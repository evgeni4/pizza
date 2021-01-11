<?php


namespace App\Service\Checkout;


use App\Entity\Checkout;

interface CheckoutServiceInterface
{
    public function add(Checkout $checkout): bool;

    public function findAllOrders(): array;

    public function findAll(): array;
    public function totalTurnover(): array;

    public function findAllOrdersDay(): array;

    public function findByUser(): array;

    public function findOneByUser(int $id): ?Checkout;

    public function findIncome();

    public function findIncomeDay();

}