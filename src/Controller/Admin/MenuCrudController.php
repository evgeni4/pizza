<?php

namespace App\Controller\Admin;

use App\Entity\Menu;
use App\Field\VichImageField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class MenuCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Menu::class;
    }
public function configureFilters(Filters $filters): Filters
{
    return $filters->add('category');
}

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id','#ID')->onlyOnIndex(),
            TextField::new('title'),
            TextareaField::new('description'),
            MoneyField::new('price')->setCurrency('EUR'),
            AssociationField::new('category')->setRequired('*'),
            ImageField::new('menuImage', 'Menu image')->setBasePath("/uploads/menu_image/")->onlyOnIndex(),
            VichImageField::new('menuImageFile','Menu image') ->setFormType(VichImageType::class)->onlyOnForms(),
            BooleanField::new('published'),
            BooleanField::new('promotion'),
            BooleanField::new('vegetarian'),
            DateTimeField::new('createdAt','Created') ->setFormat('dd-MM-yyyy HH:mm:s')->onlyOnIndex(),
        ];
    }

}
