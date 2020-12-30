<?php

namespace App\Form;

use App\Entity\Address;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class AddressType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstName', TextType::class,
                [
                    'required'=>false,
                    'label'=>false,
                    'attr' => array(
                        'class' => 'uk-width-1-1',
                        'placeholder' => 'First name ',

                    ),
                ])
            ->add('lastName', TextType::class,
                [
                    'required'=>false,
                    'label'=>false,
                    'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'Last name '),
                ])
            ->add('address', TextType::class,
                [
                    'required'=>false,
                    'label'=>false,
                    'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'Address '),
                ])
            ->add('addressComplement', TextType::class,
                [
                    'required'=>false,
                    'label'=>false,
                    'empty_data' => '',
                    'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'Address Complement '),
                ])
            ->add('zip', IntegerType::class,
                [
                    'required'=>false,
                    'label'=>false,
                    'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'Zip'),
                ])
            ->add('phone', IntegerType::class,
                [
                    'required'=>false,
                    'label'=>false,
                    'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'Phone'),
                ])
            ->add('city', TextType::class,
                [
                    'required'=>false,
                    'label'=>false,
                    'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'City '),
                ])
            ->add('state', TextType::class,
                [
                    'required'=>false,
                    'label'=>false,
                    'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'State'),
                ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Address::class,
        ]);
    }
}
