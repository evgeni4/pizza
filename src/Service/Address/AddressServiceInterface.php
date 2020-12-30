<?php

namespace App\Service\Address;

use App\Entity\Address;

interface AddressServiceInterface
{
    public function add(Address $address): bool;

    public function update(Address $address): bool;

    public function delete(Address $address): bool;

    public function allAddress(): array;

    public function getOnById(int $id): ?Address;
}