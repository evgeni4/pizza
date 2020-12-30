<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstName', TextType::class,
                [
                   // 'label_attr' => array('class' => 'col-xs-3 col-form-label mr-2'),
                    'attr' => array('class' => 'uk-width-1-1','placeholder' => 'First name '),
                    'required' => false,
                    'label'=>false
                ])
            ->add('lastName', TextType::class,
                [
                    'attr' => array('class' => 'uk-width-1-1','placeholder' => 'Last name '),
                    'required' => false,
                    'label'=>false
                ])
            ->add('email', TextType::class,
                [
                    'required' => false,
                    'attr' => array('class' => 'uk-width-1-1','placeholder' => 'Email','autocomplete'=>'off'),
                    'label'=>false
                ])
            ->add('socialTitle', ChoiceType::class,
                [
                    'label'=>false,
                    'choices' => [
                        'Mr.' => 'Mr.',
                        'Mrs.' => 'Mrs.',
                    ],
                    'expanded' => true,
                ])
            ->add('birthDate', TextType::class,
                [
                    'required' => false,
                    'label'=>false,
                    'attr' => array('class' => 'uk-width-1-1','data-uk-datepicker'=>"{format:'DD-MM-YYYY', minDate: 0}"),
                ]
            )
//            ->add('agreeTerms', CheckboxType::class, [
//                'mapped' => false,
//                'constraints' => [
//                    new IsTrue([
//                        'message' => 'You should agree to our terms.',
//                    ]),
//                ],
//            ])
            ->add('plainPassword', RepeatedType::class, [
                'mapped' => false,
                'required' => false,
                'label'=>false,
                'type' => PasswordType::class,
                'first_options' => [
                    'label'=>false,
                    'attr' => array('class' => 'uk-width-1-1','placeholder' => 'Password','autocomplete'=>'off'),
                    'constraints' => [
                        new NotBlank([
                            'message' => 'Please enter a password',
                        ]),
                        new Length([
                            'min' => 6,
                            'minMessage' => 'Your password should be at least {{ limit }} characters',
                            // max length allowed by Symfony for security reasons
                            'max' => 4096,
                        ]),
                    ],
                ],
                'second_options' => [
                    'label'=>false,
                    'attr' => array('class' => 'uk-width-1-1','placeholder' => 'Repeat Password','autocomplete'=>'off'),
                ],
                'invalid_message' => 'The password fields must match.',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
