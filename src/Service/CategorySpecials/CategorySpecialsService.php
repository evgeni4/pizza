<?php


namespace App\Service\CategorySpecials;


use App\Repository\CategorySpecialsRepository;

class CategorySpecialsService implements CategorySpecialsServiceInterface
{
    private $categorySpecialsRepository;

    /**
     * CategorySpecialsService constructor.
     * @param $categorySpecialsRepository
     */
    public function __construct(CategorySpecialsRepository $categorySpecialsRepository)
    {
        $this->categorySpecialsRepository = $categorySpecialsRepository;
    }

    public function allCategory(): array
    {
        return $this->categorySpecialsRepository->findBy(['published'=>1]);
    }
}