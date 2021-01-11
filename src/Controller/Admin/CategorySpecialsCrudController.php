<?php

namespace App\Controller\Admin;

use App\Entity\CategorySpecials;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
class CategorySpecialsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return CategorySpecials::class;
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
            ->update(Crud::PAGE_INDEX, Action::DELETE, function (Action $action) {
                return $action->setIcon('fa fa-trash')->setLabel(false)->addCssClass('d');
            });
    }
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id','ID#')->onlyOnIndex(),
            TextField::new('title','Заглавие'),
            BooleanField::new('published','Публикувано')
        ];
    }
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index','Всички промоции')
            ->setPageTitle('detail','Детайли на промоцията')
            ->setPageTitle('edit','Редактиране на промоция')
            ->setPageTitle('new','Създаване на промоция');
    }
}
