<?php

namespace App\Controller;

use App\Entity\Cart;
use App\Entity\Checkout;
use App\Entity\Menu;
use App\Form\CartType;
use App\Form\CheckoutType;
use App\Service\Address\AddressServiceInterface;
use App\Service\Cart\CartServiceInterface;
use App\Service\Checkout\CheckoutServiceInterface;
use App\Service\Delivery\DeliveryServiceInterface;
use App\Service\Menu\MenuServiceInterface;
use App\Service\Users\UserServiceInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{
    private $cartService;
    private $userService;
    private $addressService;
    private $deliveryService;
    private $checkoutService;
    private $menuService;

    public function __construct(
        CartServiceInterface $cartService,
        UserServiceInterface $userService,
        AddressServiceInterface $addressService,
        DeliveryServiceInterface $deliveryService,
        CheckoutServiceInterface $checkoutService,
        MenuServiceInterface $menuService
    )
    {
        $this->cartService = $cartService;
        $this->userService = $userService;
        $this->addressService = $addressService;
        $this->deliveryService = $deliveryService;
        $this->checkoutService = $checkoutService;
        $this->menuService = $menuService;
    }

    /**
     * @Route("/cart-view", name="app_cart")
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     */
    public function index(): Response
    {
        return $this->render('cart/index.html.twig', [
        ]);
    }

    /**
     * @Route("/cart-add", name="app_cart_add", methods={"POST"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param UserServiceInterface $userService
     * @return Response
     */
    public function addToCart(Request $request, UserServiceInterface $userService): Response
    {
        $user = $userService->currentUser();
        $product = new Cart();
        $form = $this->createForm(CartType::class, $product);
        $form->handleRequest($request);
        $product->setUser($user);
        $data = $request->request->get('cart');
        $idProduct = intval($data['product']);
        if ($form->isSubmitted()) {
            if (!empty($this->cartService->getOneById($idProduct, $user->getId()))) {
                $this->addFlash('info', 'Този продукт вече е добавен!');
                return $this->redirect($_SERVER['HTTP_REFERER']);
            }
            $this->addFlash('success-add', $idProduct);
            $this->cartService->add($product);
            return $this->redirect($_SERVER['HTTP_REFERER']);
        }
    }

    /**
     * @Route("/cart-update", name="app_cart_update", methods={"POST"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param UserServiceInterface $userService
     * @return Response
     */
    public function updateToCart(Request $request, UserServiceInterface $userService): Response
    {
        $user = $userService->currentUser();
        $data = $request->request->get('cart');
        $id = intval($data['id']);
        $cart = $this->cartService->getOneCartById($id);
        $form = $this->createForm(CartType::class, $cart);
        $form->handleRequest($request);
        $cart->setUser($user);

        if ($form->isSubmitted()) {
            $this->addFlash('success', 'Количеството актуализирано успешно!');
            $this->cartService->update($cart);
            return $this->redirect($_SERVER['HTTP_REFERER']);
        }
    }

    /**
     * @Route("/cart-delete", name="app_cart_delete", methods={"POST"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param UserServiceInterface $userService
     * @return Response
     */
    public function deleteCart(Request $request, UserServiceInterface $userService): Response
    {
        $data = $request->request->get('cart');
        $id = intval($data['id']);
        $cart = $this->cartService->getOneCartById($id);
        $form = $this->createForm(CartType::class, $cart);
        $form->handleRequest($request);

        if (null === $cart) {
            $this->addFlash('info', 'Няма такъв продукт!');
            return $this->redirect($_SERVER['HTTP_REFERER']);
        }
        if ($form->isSubmitted()) {
            $this->addFlash('success', 'Продукта успешно изтрит!');
            $this->cartService->remove($cart);
            return $this->redirect($_SERVER['HTTP_REFERER']);
        }
    }

    /**
     * @Route ("/cart-checkout", name="app_proceed_checkout", methods={"GET"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return Response
     */
    public function checkout(Request $request): Response
    {
        $formCheckout = $this->createForm(CheckoutType::class);
        $user = $this->userService->currentUser();
        $addresses = $this->addressService->allAddress();
        $deliveries = $this->deliveryService->getDelivery();
        return $this->render('cart/checkout.html.twig',
            [
                'user' => $user,
                'addresses' => $addresses,
                'deliveries' => $deliveries,
                'form'=>$formCheckout->createView()
            ]);
    }

    /**
     * @Route ("/cart-checkout",  methods={"POST"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return Response
     */
    public function checkoutProcess(Request $request): Response
    {
        $carts = $this->cartService->getAllByUser();
        $user = $this->userService->currentUser();
        $checkout = new Checkout();
        $formCheckout = $this->createForm(CheckoutType::class, $checkout);
        $formCheckout->handleRequest($request);
        if ($formCheckout->isSubmitted() && $formCheckout->isValid()) {
            $this->addFlash('success', 'Продуктите успешно са поръчани!');
            $checkout->setCustomer($user);
            foreach ($carts as $cart) {
                $cartCurrent = $this->cartService->getOneCartById($cart->getId());

                $form = $this->createForm(CartType::class, $cartCurrent);
                $form->handleRequest($request);
                $array=[];
                $array[$cartCurrent->getProduct()->getId()] =$cartCurrent->getQuality();
                $checkout->setProduct((array)$array);
               $this->cartService->remove($cartCurrent);
            }

            $this->checkoutService->add($checkout);
           return $this->redirectToRoute('app_order_history');
        }
        $addresses = $this->addressService->allAddress();
        $deliveries = $this->deliveryService->getDelivery();
        return $this->render('cart/checkout.html.twig',
            [
                'user' => $user,
                'addresses' => $addresses,
                'deliveries' => $deliveries,
                'form'=>$formCheckout->createView()
            ]);
    }

    /**
     * @Route ("/order-history", name="app_order_history", methods={"GET"})
     * @Security ("is_granted('IS_AUTHENTICATED_FULLY')")
     * @return Response
     */
    public function ordersByUser(): Response
    {
        $orderAll = $this->checkoutService->findByUser();
        $menuAll = $this->menuService->allMenu();
        return $this->render('checkout/order_history.html.twig',
            [
                'orderAll' => $orderAll,
                'menuAll'=>$menuAll
            ]);
    }
}
