<?php

namespace App\Controller\Admin;

use App\Entity\Specials;
use App\Field\VichImageField;
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


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title'),
            TextareaField::new('description'),
            AssociationField::new('specialCategory'),
            MoneyField::new('price')->setCurrency('EUR'),
            ImageField::new('image')->setBasePath('/uploads/menu_image/')->onlyOnIndex(),
            VichImageField::new('specialFile')->setFormType(VichImageType::class)->onlyOnForms(),
            BooleanField::new('published')
        ];
    }

}
