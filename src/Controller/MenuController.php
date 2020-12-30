<?php

namespace App\Controller;

use App\Service\Categories\CategoriesServiceInterface;
use App\Service\Menu\MenuServiceInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MenuController extends AbstractController
{
    private $categoriesService;
    private $menuService;

    public function __construct(CategoriesServiceInterface $categoriesService, MenuServiceInterface $menuService)
    {
        $this->categoriesService = $categoriesService;
        $this->menuService = $menuService;
    }

    /**
     * @Route("/menu", name="app_menu")
     */
    public function show(): Response
    {
        $categories = $this->categoriesService->allCategories();
        $allMenu = $this->menuService->allMenu();
        return $this->render('menu/show.html.twig', [
            'categories' => $categories,
            'allMenu' => $allMenu,
        ]);
    }

    /**
     * @Route("/order-food", name="app_order_food")

     * @return Response
     */
    public function orderFood(): Response
    {
        $categories = $this->categoriesService->allCategories();
        $allMenu = $this->menuService->allMenu();
        return $this->render('menu/order_food.html.twig', [
            'categories' => $categories,
            'allMenu' => $allMenu,
        ]);
    }
}
