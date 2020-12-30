<?php


namespace App\Service\Address;


use App\Entity\Address;
use App\Repository\AddressRepository;
use App\Service\Users\UserServiceInterface;

class AddressService implements AddressServiceInterface
{
    private $addressRepository;
    private $userService;

    public function __construct(AddressRepository $addressRepository,UserServiceInterface $userService)
    {
        $this->addressRepository = $addressRepository;
        $this->userService = $userService;
    }

    public function add(Address $address): bool
    {
        return $this->addressRepository->create($address);
    }

    public function update(Address $address): bool
    {
        return $this->addressRepository->update($address);
    }

    public function delete(Address $address): bool
    {
       return $this->addressRepository->delete($address);
    }

    public function allAddress():array
    {
        $id = $this->userService->currentUser()->getId();
        return $this->addressRepository->findBy(['user'=>$id]);
    }

    public function getOnById(int $id): ?Address
    {
        return $this->addressRepository->findOneBy(['id'=>$id]);
    }
}