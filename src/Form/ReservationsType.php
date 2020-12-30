<?php

namespace App\Form;

use App\Entity\Reservations;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ReservationsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('fullName', TextType::class,
                [
                    // 'label_attr' => array('class' => 'col-xs-3 col-form-label mr-2'),
                    'attr' => array('placeholder' => 'Name'),
                    'required' => false,
                    'label' => false,
                ])
            ->add('guests', IntegerType::class,
                [
                    'required' => false,
                    'label' => false,
                    'attr' => array('placeholder' => 'Guests','min'=>0),
                ])
            ->add('date', TextType::class,
                [
                    'required' => false,
                    'label' => false,
                   'attr' => array('placeholder' => 'Date'),
                ]
            )
            ->add('time', TextType::class,
                [
                    'required' => false,
                    'label' => false,
                    'attr' => array('placeholder' => 'Time'),

                ])
            ->add('phone', TextType::class,
                [
                    'attr' => array('placeholder' => 'Phone '),
                    'required' => false,
                    'label' => false,
                ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Reservations::class,
        ]);
    }
}
