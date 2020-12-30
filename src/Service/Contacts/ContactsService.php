<?php


namespace App\Service\Contacts;


use App\Repository\ContactsRepository;

class ContactsService implements ContactsServiceInterface
{
    private $ContactsRepository;

    /**
     * ContactsService constructor.
     * @param $ContactsRepository
     */
    public function __construct(ContactsRepository $ContactsRepository)
    {
        $this->ContactsRepository = $ContactsRepository;
    }

    public function contacts(): array
    {
        return $this->ContactsRepository->findBy(['published'=>1],['title'=>'ASC']);
    }
}