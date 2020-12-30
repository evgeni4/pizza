<?php

namespace App\Controller;

use App\Entity\Reservations;
use App\Form\ReservationsType;
use App\Service\Reservations\ReservationsServiceInterface;
use App\Service\Users\UserServiceInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReservationsController extends AbstractController
{
    private $reservationsService;
    private $userService;

    public function __construct(ReservationsServiceInterface $reservationsService, UserServiceInterface $userService)
    {
        $this->reservationsService = $reservationsService;
        $this->userService = $userService;
    }

    /**
     * @Route("/reservations", name="app_reservations",methods={"GET"})
     */
    public function reservation(): Response
    {
        $user = $this->userService->currentUser();
        $form = $this->createForm(ReservationsType::class);
        return $this->render('reservations/index.html.twig', [
            'form' => $form->createView(),
            'user' => $user
        ]);
    }

    /**
     * @Route("/reservations",  methods={"POST"})
     * @param Request $request
     * @return Response
     * @throws \Exception
     */
    public function reservationsProcess(Request $request): Response
    {
        $user = $this->userService->currentUser();
        $reservation = new Reservations();
        $form = $this->createForm(ReservationsType::class, $reservation);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->addFlash('success', 'Успешно сте резервирали местата си!');
            $this->reservationsService->add($reservation);
            return $this->redirectToRoute('app_home');
        }
        return $this->render('reservations/index.html.twig', [
            'form' => $form->createView(),
            'user' => $user
        ]);
    }

    /**
     * @Route("/my-account/reservations/{id}/delete", name="reservation_delete")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param int $id
     * @return RedirectResponse
     */
    public function deleteReservationsProcess(Request $request, int $id): Response
    {
        $reservation = $this->reservationsService->getOnById($id);
        $form = $this->createForm(ReservationsType::class, $reservation);
        $form->handleRequest($request);
        if (null === $reservation) {
            return $this->redirect($_SERVER['HTTP_REFERER']);
        }
        $this->reservationsService->delete($reservation);
        $this->addFlash('success', 'Резервацията беше изтрита успешно!');
        return $this->redirect($_SERVER['HTTP_REFERER']);
    }

    /**
     * @Route("/my-account/reservations", name="app_reservations_user")
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @return Response
     */
    public function show(): Response
    {
        $reservations = $this->reservationsService->getUserReservations();
        return $this->render('reservations/show.html.twig',
            [
                'reservations' => $reservations
            ]);
    }
}
