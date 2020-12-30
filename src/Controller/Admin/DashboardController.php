<?php

namespace App\Controller\Admin;

use App\Entity\Categories;
use App\Entity\CategorySpecials;
use App\Entity\Checkout;
use App\Entity\Contacts;
use App\Entity\Delivery;
use App\Entity\Discount;
use App\Entity\Events;
use App\Entity\Menu;
use App\Entity\Reservations;
use App\Entity\Settings;
use App\Entity\Slider;
use App\Entity\Specials;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Brown Coffee');
    }

    public function configureMenuItems(): iterable
    {
        return [
            MenuItem::linktoDashboard('Начало', 'fa fa-home'),

            MenuItem::linkToCrud('Поръчки', 'fa fa-home',Checkout::class),

            MenuItem::subMenu('Категории', 'fa fa-home')
                ->setSubItems([
                    MenuItem::linkToCrud('Категории', 'fa fa-home', Categories::class),
                    MenuItem::linkToCrud('Промоции', 'fa fa-home', CategorySpecials::class),
                ]),
            MenuItem::subMenu('Меню', 'fa fa-home')
                ->setSubItems([
                    MenuItem::linkToCrud('Меню', 'fa fa-home', Menu::class),
                    MenuItem::linkToCrud('Промоции', 'fa fa-home', Specials::class),
                ]),

              MenuItem::linkToCrud('Тип на поръчка', 'fa fa-car', Delivery::class),

            MenuItem::subMenu('Потребители', 'fa fa-users')
                ->setSubItems(
                    [
                        MenuItem::linkToCrud('Клиенти', 'fa fa-users', User::class)
                    ]
                ),
            MenuItem::linkToCrud('Slider', 'fa fa-home', Slider::class),
            MenuItem::linkToCrud('Резервации', 'fa fa-home', Reservations::class),
            MenuItem::linkToCrud('Контакти', 'fa fa-home', Contacts::class),
            MenuItem::linkToCrud('Настройки', 'fa fa-home', Settings::class),
            MenuItem::linkToCrud('Събития', 'fa fa-home', Events::class),
            MenuItem::linkToCrud('Отстъпки', 'fa fa-home', Discount::class),
            MenuItem::linkToLogout('Изход', 'fa fa-sign-out'),
        ];

        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}
