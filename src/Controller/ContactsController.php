<?php

namespace App\Controller;

use App\Entity\Mails;
use App\Form\MailsType;
use App\Service\Contacts\ContactsServiceInterface;
use App\Service\Settings\SettingsServiceInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactsController extends AbstractController
{
    private $contactsService;

    /**
     * ContactsController constructor.
     * @param $contactsService
     */
    public function __construct(ContactsServiceInterface $contactsService)
    {
        $this->contactsService = $contactsService;
    }

    /**
     * @Route("/contacts", name="app_contacts", methods={"GET"})
     */
    public function index(): Response
    {
        $form = $this->createForm(MailsType::class);
        $contacts = $this->contactsService->contacts();
        return $this->render('contacts/index.html.twig', [
            'contacts' => $contacts,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/contacts",methods={"POST"})
     * @param Request $request
     * @param \Swift_Mailer $mailer
     * @return Response
     */
    public function sendEmailProcess(Request $request, \Swift_Mailer $mailer, SettingsServiceInterface $settingsService): Response
    {
        $contacts = $this->contactsService->contacts();
        $mails = new Mails();
        $form = $this->createForm(MailsType::class, $mails);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $message = (new \Swift_Message($mails->getName()))
                ->setFrom($mails->getEmail())
                ->setTo($settingsService->findOneSettings()->getEmail())
                ->setSubject($mails->getSubject())
                ->setBody($mails->getMessage());
            $mailer->send($message);
            $this->addFlash('success', 'Писмото успещно изпратено!');
            return $this->redirect($_SERVER['HTTP_REFERER']);
        }
        return $this->render('contacts/index.html.twig', [
            'contacts' => $contacts,
            'form' => $form->createView()
        ]);
    }
}
