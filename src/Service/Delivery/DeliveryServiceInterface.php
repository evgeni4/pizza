<?php

namespace App\Service\Delivery;

use App\Entity\Delivery;

interface DeliveryServiceInterface
{
public function getDelivery():?array;
}