<?php


namespace App\Service\Reservations;


use App\Entity\Reservations;

interface ReservationsServiceInterface
{
    public function add(Reservations $reservations): bool;

    public function getUserReservations(): array;
    
    public function getOnById(int $id):?Reservations;

    public function delete(Reservations $reservations):bool;
}