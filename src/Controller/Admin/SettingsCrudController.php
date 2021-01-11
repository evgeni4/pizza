<?php

namespace App\Controller\Admin;

use App\Entity\Settings;
use App\Field\VichImageField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class SettingsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Settings::class;
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
            }) ->remove(Crud::PAGE_INDEX, Action::DELETE)
            //->remove(Crud::PAGE_INDEX, Action::EDIT)
          //  ->remove(Crud::PAGE_INDEX, Action::NEW)
            ->remove(Crud::PAGE_DETAIL, Action::EDIT)
            ->remove(Crud::PAGE_DETAIL, Action::DELETE);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('openDaily','Отворени дни'),
            TextareaField::new('slogan','Лозунг')->hideOnIndex(),
            ImageField::new('logoSite', 'Лого')->setBasePath("/uploads/logo_site/")->onlyOnForms()->onlyOnDetail(),
            VichImageField::new('logoSiteFile','Лого') ->setFormType(VichImageType::class)->onlyOnForms(),

            ImageField::new('logoBottom', 'Лого долен колонтитул')->setBasePath("/uploads/logo_site/")->onlyOnForms()->onlyOnDetail(),
            VichImageField::new('logoBottomFile','Лого долен колонтитул') ->setFormType(VichImageType::class)->onlyOnForms(),
           // MoneyField::new('shippingTax','Shipping Tax')->setCurrency('EUR'),
            CollectionField::new('openHours','Работно време')->hideOnIndex(),
            TextareaField::new('address','Адрес')->hideOnIndex(),
            EmailField::new('email','Email по подразбиране')->hideOnIndex(),
            BooleanField::new('sitelock','Заключване на сайта'),
            TextareaField::new('sitelockMessage','Съобщение за заключване на сайта')->hideOnIndex(),
        ];
    }
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index','Всички настройки')
            ->setPageTitle('detail','Детайли на настройки')
            ->setPageTitle('edit','Редактиране на настройки');
           // ->setPageTitle('new','Създаване на категория');
    }
}
