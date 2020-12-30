<?php


namespace App\Service\Specials;


use App\Repository\SpecialsRepository;

class SpecialsService implements SpecialsServiceInterface
{
  private $specialsRepository;

    /**
     * SpecialsService constructor.
     * @param $specialsRepository
     */
    public function __construct(SpecialsRepository $specialsRepository)
    {
        $this->specialsRepository = $specialsRepository;
    }

    public function allSpecials(): array
    {
        return $this->specialsRepository->findBy(['published'=>1]);
    }
}