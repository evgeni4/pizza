<?php

namespace App\Controller\Admin;

use App\Entity\Categories;
use App\Field\VichImageField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
class CategoriesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Categories::class;
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
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title','Заглавие'),
            TextField::new('description','Описание'),
            ImageField::new('thumbnail', 'Снимка')->setBasePath("/uploads/categories/")->onlyOnIndex(),
            ImageField::new('imageLeftTop', 'Изображение на раздела вляво отгоре')->setBasePath("/uploads/categories/")->onlyOnDetail(),
            ImageField::new('imageRightBottom', 'Изображение на раздела вдясно долу')->setBasePath("/uploads/categories/")->onlyOnDetail(),
            ImageField::new('sectionImage', 'Фон на раздела')->setBasePath("/uploads/categories/")->onlyOnDetail(),
            TextField::new('sectionTitle','Заглавие на раздела')->hideOnIndex(),
            TextField::new('sectionDescription','Описание на раздела')->hideOnIndex(),
            VichImageField::new('thumbnailFile','Снимка на категория ') ->setFormType(VichImageType::class)->onlyOnForms(),
            VichImageField::new('imageLeftTopFile','Изображение на раздела вляво отгоре') ->setFormType(VichImageType::class)->onlyOnForms(),
            VichImageField::new('imageRightBottomFile','Изображение на раздела вдясно долу') ->setFormType(VichImageType::class)->onlyOnForms(),
            VichImageField::new('sectionImageFile','Фон на раздела') ->setFormType(VichImageType::class)->onlyOnForms(),
        ];
    }
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index','Всички категории')
            ->setPageTitle('detail','Детайли на категорията')
            ->setPageTitle('edit','Редактиране на категория')
            ->setPageTitle('new','Създаване на категория');
    }
}
