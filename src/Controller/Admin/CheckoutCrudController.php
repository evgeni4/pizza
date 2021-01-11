<?php

namespace App\Controller\Admin;

use App\Entity\Checkout;
use App\Service\Checkout\CheckoutServiceInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CheckoutCrudController extends AbstractCrudController
{
    private $checkoutService;

    /**
     * CheckoutCrudController constructor.
     * @param $checkoutService
     */
    public function __construct(CheckoutServiceInterface $checkoutService)
    {
        $this->checkoutService = $checkoutService;
    }

    public static function getEntityFqcn(): string
    {
        return Checkout::class;
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->update(Crud::PAGE_INDEX, Action::NEW, function (Action $action) {
                return $action->setIcon('fa fa-plus')->setLabel(false)->addCssClass('d');
            })->setPermission(Action::NEW,'ROLE_ADMIN')
            ->add(Crud::PAGE_INDEX, Action::DETAIL)

            ->update(Crud::PAGE_INDEX, Action::DETAIL, function (Action $action) {
                return $action->setIcon('fa fa-eye')->setLabel(false)->addCssClass('d');
            })->update(Crud::PAGE_INDEX, Action::EDIT, function (Action $action) {
                return $action->setIcon('fa fa-pencil-square-o')->setLabel(false)->addCssClass('d');
            })
            ->remove(Crud::PAGE_INDEX, Action::DELETE)
            ->remove(Crud::PAGE_INDEX, Action::EDIT)
            ->remove(Crud::PAGE_INDEX, Action::NEW)
            //->remove(Crud::PAGE_DETAIL, Action::EDIT)
            ->remove(Crud::PAGE_DETAIL, Action::DELETE);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id','ID#')->onlyOnDetail(),
            TextField::new('orders','Поръчка №'),
            TextField::new('customer','Клиент')->onlyOnDetail(),
            CollectionField::new('delivery','Подробности')->onlyOnDetail(),
            BooleanField::new('confirmed','Потвърдено'),
            DateTimeField::new('updateAt','Потвърдено')->setFormat('dd/MM/yyyy'),
            DateTimeField::new('createdAt','Дата/Час')->setFormat('dd/MM/yyyy H:mm'),
        ];
    }
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index','Всички поръчки')
            ->setPageTitle('detail','Детайли на поръчката')
            ->setPageTitle('edit','Редактиране на поръчката');
//            ->overrideTemplates([
//                'crud/detail' => 'admin/pages/details.html.twig',
//            ]);

    }
}
