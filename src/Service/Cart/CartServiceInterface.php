<?php


namespace App\Service\Cart;


use App\Entity\Cart;

interface CartServiceInterface
{
    public function add(Cart $cart): bool;

    public function update(Cart $cart): bool;

    public function remove(Cart $cart): bool;

    public function getOneById(int $id, int $userId): ?Cart;

    public function getOneCartById(int $id): ?Cart;

    public function getAllByUser():?array;
    public function getAllByUserCheckout():?array;
}