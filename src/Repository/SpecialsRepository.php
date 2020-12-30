<?php

namespace App\Repository;

use App\Entity\Specials;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Specials|null find($id, $lockMode = null, $lockVersion = null)
 * @method Specials|null findOneBy(array $criteria, array $orderBy = null)
 * @method Specials[]    findAll()
 * @method Specials[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SpecialsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Specials::class);
    }

    // /**
    //  * @return Specials[] Returns an array of Specials objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Specials
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
