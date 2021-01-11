<?php

namespace App\Controller\Admin;

use App\Entity\Specials;
use App\Field\VichImageField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CurrencyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class SpecialsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Specials::class;
    }
    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('price')
            ->add('specialCategory');
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
            }) ->update(Crud::PAGE_INDEX, Action::DELETE, function (Action $action) {
                return $action->setIcon('fa fa-trash')->setLabel(false)->addCssClass('d');
            });
    }
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id', '#ID')->onlyOnIndex(),
            TextField::new('title','Заглавие'),
            TextField::new('description','Описание')->hideOnIndex(),
            AssociationField::new('specialCategory','Категория'),
            MoneyField::new('price','Цена')->setCurrency('EUR'),
            ImageField::new('image', 'Снимка')->setBasePath('/uploads/menu_image/')->onlyOnIndex(),
            VichImageField::new('specialFile','Снимка')->setFormType(VichImageType::class)->onlyOnForms(),
            BooleanField::new('published', 'Публикувано')
        ];
    }
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index','Всички промоционални ястия')
            ->setPageTitle('detail','Детайли на промоционално ястие')
            ->setPageTitle('edit','Редактиране на промоционално ястие')
            ->setPageTitle('new','Създаване на промоционално ястие');

    }
}
