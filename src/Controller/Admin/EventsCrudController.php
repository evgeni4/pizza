<?php

namespace App\Controller\Admin;

use App\Entity\Events;
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


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title'),
            TextareaField::new('description'),
            DateTimeField::new('start','Start')->setFormat('dd-MM-yyyy HH:mm:ss'),
            DateTimeField::new('end','End')->setFormat('dd-MM-yyyy HH:mm:ss'),
            BooleanField::new('allDay','All day'),
            ColorField::new('backgroundColor')->onlyOnForms(),
            ColorField::new('borderColor')->onlyOnForms(),
            ColorField::new('textColor')->onlyOnForms(),
        ];
    }

}
