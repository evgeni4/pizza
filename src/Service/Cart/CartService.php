<?php


namespace App\Service\Cart;


use App\Entity\Cart;
use App\Repository\CartRepository;
use App\Service\Users\UserServiceInterface;

class CartService implements \App\Service\Cart\CartServiceInterface
{
    private $cartRepository;
    private $userService;


    public function __construct(CartRepository $cartRepository,UserServiceInterface $userService)
    {
        $this->cartRepository = $cartRepository;
        $this->userService=$userService;
    }

    public function add(Cart $cart): bool
    {
        return $this->cartRepository->insert($cart);
    }

    public function update(Cart $cart): bool
    {
        return $this->cartRepository->update($cart);
    }

    public function remove(Cart $cart): bool
    {
        return $this->cartRepository->delete($cart);
    }

    public function getOneById(int $id, int $userId): ?Cart
    {
        return $this->cartRepository->findOneBy(['product' => $id, 'user' => $userId,'status'=>1]);
    }
    public function getOneCartById(int $id): ?Cart
    {
        return $this->cartRepository->findOneBy(['id' => $id]);
    }
    public function getAllByUser(): ?array
    {
        if ($this->userService->currentUser()){
            $id = $this->userService->currentUser()->getId();
            return $this->cartRepository->findBy(['user' => $id,'status'=>1]);
        }
        return null;
    }
    public function getAllByUserCheckout(): ?array
    {
        if ($this->userService->currentUser()){
            $id = $this->userService->currentUser()->getId();
            return $this->cartRepository->findBy(['user' => $id,'status'=>0]);
        }
        return null;
    }
}