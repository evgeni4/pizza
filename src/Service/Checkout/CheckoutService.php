<?php


namespace App\Service\Checkout;


use App\Entity\Checkout;
use App\Repository\CheckoutRepository;
use App\Service\Users\UserServiceInterface;

class CheckoutService implements CheckoutServiceInterface
{
    private $checkoutRepository;
    private $userService;

    public function __construct(CheckoutRepository $checkoutRepository,UserServiceInterface $userService)
    {
        $this->checkoutRepository = $checkoutRepository;
        $this->userService=$userService;
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
        return $this->checkoutRepository->findBy(['customer'=>$user->getId()]);
    }
    public function findOneByUser(int $id): ?Checkout
    {
        $user = $this->userService->currentUser();
        return $this->checkoutRepository->findOneBy(['id'=>$id]);
    }

    public function findAll(): array
    {
        return $this->checkoutRepository->findAll();
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

}