<?php

namespace App\Form;

use App\Entity\Mails;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MailsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name',TextType::class,
            [
                'required'=>false,
                'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'Name '),
            ]
            )
            ->add('email',TextType::class,
            [
                'required'=>false,
                'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'Email '),
            ])
            ->add('subject',TextType::class,
            [
                'required'=>false,
                'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'Subject'),
            ])
            ->add('message',TextareaType::class,
            [
                'required'=>false,
                'attr' => array('class' => 'uk-width-1-1', 'placeholder' => 'Message'),
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Mails::class,
        ]);
    }
}
