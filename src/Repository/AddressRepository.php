<?php

namespace App\Repository;

use App\Entity\Address;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\OptionsResolver\Exception\OptionDefinitionException;

/**
 * @method Address|null find($id, $lockMode = null, $lockVersion = null)
 * @method Address|null findOneBy(array $criteria, array $orderBy = null)
 * @method Address[]    findAll()
 * @method Address[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AddressRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Address::class);
    }

    public function create(Address $address): bool
    {
        try {
        $this->_em->persist($address);
        $this->_em->flush();
            return true;
        } catch (OptionDefinitionException $e) {
            return false;
        }
    }
    public function update(Address $address): bool
    {
        try {
            $this->_em->persist($address);
            $this->_em->flush();
            return true;
        } catch (OptionDefinitionException $e) {
            return false;
        }
    }
    public function delete(Address $address): bool
    {
        try {
        $this->_em->remove($address);
        $this->_em->flush();
            return true;
        } catch (OptimisticLockException $e) {
            return false;
        }
    }
    // /**
    //  * @return Address[] Returns an array of Address objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Address
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
