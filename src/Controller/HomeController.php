<?php

namespace App\Controller;

use App\Entity\Reservations;
use App\Entity\Settings;
use App\Form\ReservationsType;
use App\Service\CategorySpecials\CategorySpecialsService;
use App\Service\Reservations\ReservationsServiceInterface;
use App\Service\Slider\SliderServiceInterface;
use App\Service\Specials\SpecialsServiceInterface;
use App\Service\Users\UserServiceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    private $categorySpecials;
    private $specialsService;
    private $sliderService;
    private $userService;
    private $reservationsService;

    public function __construct(ReservationsServiceInterface $reservationsService, UserServiceInterface $userService, SliderServiceInterface $sliderService, CategorySpecialsService $categorySpecials, SpecialsServiceInterface $specialsService)
    {
        $this->sliderService = $sliderService;
        $this->categorySpecials = $categorySpecials;
        $this->specialsService = $specialsService;
        $this->userService = $userService;
        $this->reservationsService = $reservationsService;
    }

    /**
     * @Route("/", name="app_home",methods={"GET"})
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $user = $this->userService->currentUser();
        $categorySpecials = $this->categorySpecials->allCategory();
        $specials = $this->specialsService->allSpecials();
        $sliders = $this->sliderService->slider();
        $reservation = new Reservations();
        $form = $this->createForm(ReservationsType::class, $reservation);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if ($form->isValid()) {
                $this->addFlash('success', 'Успешно сте резервирали местата си!');
                $this->reservationsService->add($reservation);
                return $this->redirectToRoute('app_home');
            }
        }
        return $this->render('home/index.html.twig', [
            'categorySpecials' => $categorySpecials,
            'specials' => $specials,
            'sliders' => $sliders,
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }
}
