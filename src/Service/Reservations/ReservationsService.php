<?php


namespace App\Service\Reservations;


use App\Entity\Reservations;
use App\Repository\ReservationsRepository;
use App\Service\Users\UserServiceInterface;

class ReservationsService implements ReservationsServiceInterface
{
    private $reservationsRepository;
    private $userService;

    public function __construct(ReservationsRepository $reservationsRepository, UserServiceInterface $userService)
    {
        $this->reservationsRepository = $reservationsRepository;
        $this->userService = $userService;
    }

    public function add(Reservations $reservations): bool
    {
        if ($this->userService->currentUser()){
            $reservations->setUser($this->userService->currentUser());
        }
        return $this->reservationsRepository->insert($reservations);
    }

    public function getUserReservations(): array
    {
        $id = $this->userService->currentUser()->getId();
        return $this->reservationsRepository->findBy(['user' => $id]);
    }

    public function getOnById(int $id): ?Reservations
    {
        return $this->reservationsRepository->findOneBy(['id'=>$id]);
    }

    public function delete(Reservations $reservations): bool
    {
        return $this->reservationsRepository->delete($reservations);
    }

    public function getAllReservations(): array
    {
        return $this->reservationsRepository->findBy(['confirmed'=>1]);
    }
}