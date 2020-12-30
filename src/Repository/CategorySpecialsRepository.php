<?php

namespace App\Repository;

use App\Entity\CategorySpecials;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CategorySpecials|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategorySpecials|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategorySpecials[]    findAll()
 * @method CategorySpecials[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategorySpecialsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategorySpecials::class);
    }

    // /**
    //  * @return CategorySpecials[] Returns an array of CategorySpecials objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CategorySpecials
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
