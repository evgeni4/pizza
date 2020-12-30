<?php

namespace App\Controller\Admin;

use App\Entity\Settings;
use App\Field\VichImageField;
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


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('openDaily','Open daily'),
            TextareaField::new('slogan','Slogan'),
            ImageField::new('logoSite', 'Logo site')->setBasePath("/uploads/logo_site/")->onlyOnIndex(),
            VichImageField::new('logoSiteFile','Logo site') ->setFormType(VichImageType::class)->onlyOnForms(),

            ImageField::new('logoBottom', 'logo footer')->setBasePath("/uploads/logo_site/")->onlyOnIndex(),
            VichImageField::new('logoBottomFile','Logo footer') ->setFormType(VichImageType::class)->onlyOnForms(),
            MoneyField::new('shippingTax','Shipping Tax')->setCurrency('EUR'),
            CollectionField::new('openHours','Open hours'),
            TextareaField::new('address','Address'),
            EmailField::new('email','Email default'),
            BooleanField::new('sitelock','Site lock'),
            TextareaField::new('sitelockMessage','Site lock message')->onlyOnForms(),
        ];
    }

}
