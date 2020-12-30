<?php


namespace App\Service\Delivery;


use App\Repository\DeliveryRepository;

class DeliveryService implements DeliveryServiceInterface
{
    private $deliveryRepository;

    public function __construct(DeliveryRepository $deliveryRepository )
    {
        $this->deliveryRepository = $deliveryRepository;
    }

    public function getDelivery(): ?array
    {
        return $this->deliveryRepository->findAll();
    }


}