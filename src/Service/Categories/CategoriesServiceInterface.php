<?php


namespace App\Service\Categories;


use App\Entity\Categories;

interface CategoriesServiceInterface
{
    public function allCategories():array;
}