<?php

namespace App\Controller\Admin;

use App\Entity\Slider;
use App\Field\VichImageField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;

class SliderCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Slider::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title'),
            TextareaField::new('description'),
            ImageField::new('image')->setBasePath('uploads/slider_image/')->onlyOnIndex(),
            VichImageField::new('imageFile')->setFormType(VichFileType::class)->onlyOnForms(),
            BooleanField::new('published'),
            DateTimeField::new('createdAt','Created') ->setFormat('dd-MM-yyyy HH:mm:s')->onlyOnIndex(),

        ];
    }

}
