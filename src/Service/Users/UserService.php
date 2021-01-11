<?php


namespace App\Service\Users;


use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Security\Core\Security;

class UserService implements UserServiceInterface
{
    private $security;
    private $userRepository;

    public function __construct(Security $security,UserRepository $userRepository)
    {
        $this->security = $security;
        $this->userRepository = $userRepository;
    }


    public function currentUser(): ?User
    {
        return $this->security->getUser();
    }
    public function updatePassword(User $user): bool
    {
        return $this->userRepository->update($user);
    }

    public function customer(): array
    {
        return $this->userRepository->findBy(['banned'=>0]);
    }
}