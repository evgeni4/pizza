<?php

namespace App\Controller\Admin;

use App\Entity\Categories;
use App\Field\VichImageField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class CategoriesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Categories::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title'),
            TextField::new('description'),
            ImageField::new('thumbnail', 'Category image')->setBasePath("/uploads/categories/")->onlyOnIndex(),
            ImageField::new('imageLeftTop', 'Block image left top')->setBasePath("/uploads/categories/")->onlyOnIndex(),
            ImageField::new('imageRightBottom', 'Block image right bottom')->setBasePath("/uploads/categories/")->onlyOnIndex(),
            ImageField::new('sectionImage', 'Section background')->setBasePath("/uploads/categories/")->onlyOnIndex(),
            TextField::new('sectionTitle'),
            TextField::new('sectionDescription'),
            VichImageField::new('thumbnailFile','Category image') ->setFormType(VichImageType::class)->onlyOnForms(),
            VichImageField::new('imageLeftTopFile','Block image left top') ->setFormType(VichImageType::class)->onlyOnForms(),
            VichImageField::new('imageRightBottomFile','Block image right bottom') ->setFormType(VichImageType::class)->onlyOnForms(),
            VichImageField::new('sectionImageFile','Section background') ->setFormType(VichImageType::class)->onlyOnForms(),
        ];
    }

}
