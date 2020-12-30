<?php

namespace App\Controller;

use App\Entity\Address;
use App\Form\AddressType;
use App\Service\Address\AddressServiceInterface;
use App\Service\Users\UserServiceInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AddressController extends AbstractController
{
    private $userService;
    private $addressService;

    public function __construct(UserServiceInterface $userService, AddressServiceInterface $addressService)
    {
        $this->userService = $userService;
        $this->addressService = $addressService;
    }

    /**
     * @Route("/my-account/address", name="app_address")
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     */
    public function address(): Response
    {
        $user = $this->userService->currentUser();
        $address = $this->addressService->allAddress();
        return $this->render('address/address.html.twig', [
            'user' => $user,
            'addressAll' => $address,
        ]);
    }

    /**
     * @Route("/my-account/address/add", name="app_address_add", methods={"GET"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     */
    public function addressAdd(): Response
    {
        $user = $this->userService->currentUser();
        return $this->render('address/address_add.html.twig', [
            'form' => $this->createForm(AddressType::class)->createView(),
            'user' => $user
        ]);
    }

    /**
     * @Route("/my-account/address/add", methods={"POST"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param UserServiceInterface $customer
     * @return Response
     */
    public function addressAddProcess(Request $request, UserServiceInterface $customer): Response
    {

        $address = new Address();
        $user = $this->userService->currentUser();
        $form = $this->createForm(AddressType::class, $address);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $address->setUser($this->userService->currentUser());
            $this->addressService->add($address);
            $this->addFlash('success', 'Нов адрес е добавен успешно!');
            return $this->redirectToRoute('app_address');

        }
        return $this->render('address/address_add.html.twig', [
            'form' => $form->createView(),
            'user' => $user
        ]);
    }

    /**
     * @Route("/my-account/address/{id}/edit", name="app_address_edit", methods={"GET"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param $id
     * @return Response
     */
    public function edit($id): Response
    {
        $address = $this->addressService->getOnById($id);
        return $this->render('address/edit_address.html.twig', [
            'form' => $this->createForm(AddressType::class)->createView(),
            'address' => $address
        ]);
    }

    /**
     * @Route("/my-account/address/{id}/edit", methods={"POST"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param $id
     * @return Response
     */
    public function editProcess(Request $request, $id): Response
    {

        $address = $this->addressService->getOnById($id);
        $form = $this->createForm(AddressType::class, $address);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->addressService->update($address);
            $this->addFlash('success', 'Адреса успешно актуализиран!');
            return $this->redirectToRoute('app_address');
        }
        return $this->render('address/edit_address.html.twig', [
            'form' => $this->createForm(AddressType::class)->createView(),
            'address' => $address
        ]);
    }

    /**
     * @Route("/my-account/address/{id}/delete", name="address_delete")
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param int $id
     * @return RedirectResponse
     */
    public function deleteAddressProcess(Request $request, int $id): Response
    {
        $address = $this->addressService->getOnById($id);
        $form = $this->createForm(AddressType::class, $address);
        $form->handleRequest($request);
        if (null === $address) {
            return $this->redirect($_SERVER['HTTP_REFERER']);
        }
        $this->addressService->delete($address);
        $this->addFlash('success', 'Адресът е изтрит успешно!');
        return $this->redirect($_SERVER['HTTP_REFERER']);
    }
}
