<?php


namespace App\Service\Discount;


use App\Entity\Discount;
use App\Repository\DiscountRepository;
use App\Service\Users\UserServiceInterface;

class DiscountService implements \App\Service\Discount\DiscountServiceInterface
{
    private $discountRepository;
    private $userService;

    public function __construct(DiscountRepository $discountRepository, UserServiceInterface $userService)
    {
        $this->discountRepository = $discountRepository;
        $this->userService = $userService;
    }

    public function update(Discount $discount): bool
    {
        $discount->setPublished(1);
        $discount->setVerifyCard(1);
        return $this->discountRepository->update($discount);
    }
    public function findByDiscountUser(): ?Discount
    {
        $id = $this->userService->currentUser()->getId();
        return $this->discountRepository->findOneBy(['user' => $id,'published'=>1]);
    }

    public function checkDiscountUser(): ?Discount
    {
        if ($this->userService->currentUser()){
            $id = $this->userService->currentUser()->getId();
            return $this->discountRepository->findOneBy(['user' => $id]);
        }
 return null;
    }

}