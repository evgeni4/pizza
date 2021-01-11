<?php


namespace App\Service\Checkout;


use App\Entity\Checkout;
use App\Entity\Menu;
use App\Repository\CheckoutRepository;
use App\Service\Menu\MenuService;
use App\Service\Menu\MenuServiceInterface;
use App\Service\Users\UserServiceInterface;

class CheckoutService implements CheckoutServiceInterface
{
    private $checkoutRepository;
    private $userService;
    private $menuService;

    public function __construct(CheckoutRepository $checkoutRepository, UserServiceInterface $userService, MenuServiceInterface $menuService)
    {
        $this->checkoutRepository = $checkoutRepository;
        $this->userService = $userService;
        $this->menuService = $menuService;
    }


    public function add(Checkout $checkout): bool
    {
        $newOrders = $this->orderGenerate();
        $checkout->setOrders($newOrders);
        return $this->checkoutRepository->insert($checkout);
    }

    public function findByUser(): array
    {
        $user = $this->userService->currentUser();
        return $this->checkoutRepository->findBy(['customer' => $user->getId()]);
    }

    public function findOneByUser(int $id): ?Checkout
    {
        $user = $this->userService->currentUser();
        return $this->checkoutRepository->findOneBy(['id' => $id]);
    }

    public function totalTurnover(): array
    {
        $id = $this->userService->currentUser()->getId();
        return $this->checkoutRepository->findBy(['user' => $id,'status'=>1]);
    }

    public function findAll(): array
    {
        return $this->checkoutRepository->findAll();
    }

    public function findAllOrders(): array
    {
        return $this->checkoutRepository->findBy(['confirmed' => 1]);
    }

    public function findAllOrdersDay(): array
    {
        $date = new \DateTime('now');
        return $this->checkoutRepository->findBy(['confirmed' => 1, 'updateAt' => $date]);
    }

    public function orderGenerate()
    {
        $count = count($this->findAll());
        $newOrder = empty($count) ? $count = 1 : $count += 1;
        switch (strlen($count)) {
            case '1':
                $newOrder = '00000' . $newOrder;
                break;
            case '2':
                $newOrder = '0000' . $newOrder;
                break;
            case '3':
                $newOrder = '000' . $newOrder;
                break;
            case '4':
                $newOrder = '00' . $newOrder;
                break;
            case '5':
                $newOrder = '0' . $newOrder;
                break;
        }
        return $newOrder;
    }

    public function findIncomeDay()
    {
        $date = new \DateTime('now');
        $checkouts = $this->checkoutRepository->findBy(['confirmed' => 1, 'updateAt' => $date]);
        $menu = $this->menuService->allMenu();
        $incomeDay = 0;
        foreach ($menu as $menus) {
            /**
             * @var Menu $menus
             */
            foreach ($checkouts as $checkout) {
                foreach ($checkout->getProduct() as $product) {
                    foreach ($product as $item => $value)
                        if ($menus->getId() == $item) {
                            $price = ($menus->getPrice() / 100) * $value;
                            $incomeDay += $price;
                        }
                }
            }
        }
        return $incomeDay;

    }

    public function findIncome()
    {
        $checkouts = $this->checkoutRepository->findBy(['confirmed' => 1]);
        $menus = $this->menuService->allMenu();
        $income = 0;
        foreach ($menus as $menu) {
            /**
             * @var Menu $menu
             */
            foreach ($checkouts as $checkout) {
                foreach ($checkout->getProduct() as $product) {
                    foreach ($product as $item => $value)
                        if ($menu->getId() == $item) {
                            $price = ($menu->getPrice() / 100) * $value;
                            $income += $price;
                        }
                }
            }
        }
        return $income;

    }
}