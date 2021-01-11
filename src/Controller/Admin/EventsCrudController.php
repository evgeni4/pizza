<?php

namespace App\Controller\Admin;

use App\Entity\Events;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ColorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class EventsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Events::class;
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
            TextField::new('description','Описание'),
            DateTimeField::new('start','Старт')->setFormat('dd-MM-yyyy HH:mm:ss'),
            DateTimeField::new('end','Край')->setFormat('dd-MM-yyyy HH:mm:ss'),
            BooleanField::new('allDay','Цял ден'),
            ColorField::new('backgroundColor','Цвят на фона')->onlyOnForms(),
            ColorField::new('borderColor','Граница цвят')->onlyOnForms(),
            ColorField::new('textColor','Текст цвят')->onlyOnForms(),
        ];
    }
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index','Всички събития')
            ->setPageTitle('detail','Детайли на събитие')
            ->setPageTitle('edit','Редактиране на събитие')
            ->setPageTitle('new','Създаване на събитие');

    }
}
