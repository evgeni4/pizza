<?php

namespace App\Controller\Admin;

use App\Entity\CategorySpecials;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CategorySpecialsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return CategorySpecials::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title'),
            BooleanField::new('published')
        ];
    }

}
