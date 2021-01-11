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
use App\Repository\UserRepository;
use App\Service\Users\UserServiceInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    private $userService;
    public function __construct(UserServiceInterface $userService)
    {
        $this->userService = $userService;
    }
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
    }

    public function configureDashboard(): Dashboard
    {
        $customer = $this->userService->customer();
        return Dashboard::new() ->setTitle('Администрация');
    }

    public function configureMenuItems(): iterable
    {
        return [
            MenuItem::linktoDashboard('Начало', 'fa fa-home')
                ->setCssClass('sidebar-link'),
            MenuItem::subMenu('Категории', 'uk-icon-inbox')
                ->setCssClass('sidebar-link collapsed')
                ->setSubItems([
                    MenuItem::linkToCrud('Категории', '', Categories::class)->setCssClass('sidebar-link',),
                    MenuItem::linkToCrud('Промоции', '', CategorySpecials::class)->setCssClass('sidebar-link',),
                ]),
            MenuItem::subMenu('Ястия', 'uk-icon-cutlery')
                ->setCssClass('sidebar-link collapsed')
                ->setSubItems([
                    MenuItem::linkToCrud('Ястия', '', Menu::class)->setCssClass('sidebar-link',),
                    MenuItem::linkToCrud('Промоции  на ястия', '', Specials::class)->setCssClass('sidebar-link',),
                ]),
            MenuItem::subMenu('Поръчки', 'icon-2')
                ->setCssClass('sidebar-link collapsed')
                ->setSubItems([
                    MenuItem::linkToCrud('Поръчки', 'icon-2',Checkout::class)->setCssClass('sidebar-link'),
                    MenuItem::linkToCrud('Доставка', 'fa fa-car', Delivery::class)->setCssClass('sidebar-link',)
                ]),

            MenuItem::linkToCrud('Отстъпки', 'uk-icon-percent', Discount::class)->setCssClass('sidebar-link',),
            MenuItem::subMenu('Потребители', 'fa fa-users')
                ->setCssClass('sidebar-link collapsed')
                ->setSubItems(
                    [
                        MenuItem::linkToCrud('Клиенти', 'fa fa-users', User::class)->setCssClass('sidebar-link',)
                    ]
                ),
            MenuItem::linkToCrud('Резервации', 'uk-icon-phone', Reservations::class)->setCssClass('sidebar-link',),
            MenuItem::linkToCrud('Контакти', 'uk-icon-headphones', Contacts::class)->setCssClass('sidebar-link',),
            MenuItem::linkToCrud('Събития', 'uk-icon-calendar', Events::class)->setCssClass('sidebar-link',),
            MenuItem::subMenu('Настройки','uk-icon-cogs')->setCssClass('sidebar-link collapsed')
                ->setSubItems([
                    MenuItem::linkToCrud('Slider', 'uk-icon-file-image-o', Slider::class)->setCssClass('sidebar-link',),
                    MenuItem::linkToCrud('Настройки на сайта', 'uk-icon-cogs', Settings::class)->setCssClass('sidebar-link',),
                ]),
            MenuItem::linkToLogout('Изход', 'fa fa-sign-out')->setCssClass('sidebar-link',),
        ];

        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}
