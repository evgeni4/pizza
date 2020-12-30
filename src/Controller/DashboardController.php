<?php

namespace App\Controller;

use App\Form\ChangePasswordFormType;
use App\Form\DiscountType;
use App\Service\Discount\DiscountService;
use App\Service\Users\UserServiceInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use SymfonyCasts\Bundle\ResetPassword\Controller\ResetPasswordControllerTrait;
use SymfonyCasts\Bundle\ResetPassword\Exception\ResetPasswordExceptionInterface;
use SymfonyCasts\Bundle\ResetPassword\ResetPasswordHelperInterface;

class DashboardController extends AbstractController
{
    use ResetPasswordControllerTrait;

    private $resetPasswordHelper;

    private $userService;

    private $discountService;

    public function __construct(UserServiceInterface $userService, ResetPasswordHelperInterface $resetPasswordHelper, DiscountService $discountService)
    {
        $this->userService = $userService;
        $this->resetPasswordHelper = $resetPasswordHelper;
        $this->discountService = $discountService;
    }

    /**
     * @Route("/my-account", name="app_myaccount")
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     */
    public function myAccount(): Response
    {
        $user = $this->userService->currentUser();
        return $this->render('dashboard/my_account.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/my-account/profile", name="app_profile", methods={"GET"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     */
    public function profile(): Response
    {
        $user = $this->userService->currentUser();
        return $this->render('user/profile.html.twig', [
            'user' => $user,
            'resetForm' => $this->createForm(ChangePasswordFormType::class)->createView(),
        ]);
    }

    /**
     * @Route("/my-account/profile", methods={"POST"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return RedirectResponse|Response
     */
    public function resetProcess(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $user = $this->userService->currentUser();
        $form = $this->createForm(ChangePasswordFormType::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $encodedPassword = $passwordEncoder->encodePassword($user, $form->get('plainPassword')->getData());
            $user->setPassword($encodedPassword);
            $this->userService->updatePassword($user);
            $this->addFlash('success', 'Update password successfully!');
            return $this->redirectToRoute('app_myaccount');
        }
        return $this->render('user/profile.html.twig', [
            'resetForm' => $form->createView(),
            'user' => $user,
        ]);

    }

    /**
     * @Route("/my-account/discount", name="app_discount", methods={"GET"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     */
    public function discount(): Response
    {
        return $this->render('discount/discount.html.twig');
    }

    /**
     * @Route("/discount/verify", name="app_discount_verify", methods={"POST"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return Response
     */
    public function verifyDiscountProcess(Request $request): Response
    {
        $discount = $this->discountService->checkDiscountUser();
        if ($request->isMethod('POST')) {
            $this->addFlash('success', 'Вашата карта за отстъпка е успешно потвърдена!');
            $this->discountService->update($discount);
            return $this->redirect($_SERVER['HTTP_REFERER']);
        }

    }

}
