<?php


namespace App\Service\Discount;


use App\Entity\Discount;

interface DiscountServiceInterface
{
    public function update(Discount $discount): bool;

    public function findByDiscountUser();

    public function checkDiscountUser();
}