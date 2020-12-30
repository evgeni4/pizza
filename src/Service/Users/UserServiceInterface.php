<?php


namespace App\Service\Users;


use App\Entity\User;

interface UserServiceInterface
{
    public function currentUser(): ?User;

    public function updatePassword(User $user): bool;
}