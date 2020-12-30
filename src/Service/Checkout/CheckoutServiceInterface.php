<?php


namespace App\Service\Checkout;


use App\Entity\Checkout;

interface CheckoutServiceInterface
{
    public function add(Checkout $checkout): bool;
    public function findAll(): array;
    public function findByUser(): array;
    public function findOneByUser(int $id): ?Checkout;
}