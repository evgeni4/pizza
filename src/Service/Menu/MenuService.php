<?php


namespace App\Service\Menu;


use App\Repository\MenuRepository;

class MenuService implements MenuServiceInterface
{
    private $menuRepository;

    public function __construct(MenuRepository $menuRepository)
    {
        $this->menuRepository = $menuRepository;
    }


    public function allMenu(): array
    {
        return $this->menuRepository->findBy(['published'=>1]);
    }
}