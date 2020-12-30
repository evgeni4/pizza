<?php

namespace App\Controller\Admin;

use App\Entity\Discount;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class DiscountCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Discount::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title'),
            TextareaField::new('description'),
            IntegerField::new('percent'),
            AssociationField::new('user'),
            DateTimeField::new('start','Start')->setFormat('dd-MM-yyyy HH:mm:ss'),
            DateTimeField::new('end','End')->setFormat('dd-MM-yyyy HH:mm:ss'),
            BooleanField::new('indefinitely'),
            BooleanField::new('verifyCard'),
            BooleanField::new('published'),
            DateTimeField::new('createdAt','Created at')->setFormat('dd-MM-yyyy HH:mm:ss')->onlyOnIndex(),
        ];
    }

}
