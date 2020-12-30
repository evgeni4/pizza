<?php


namespace App\Service\Slider;


use App\Repository\SliderRepository;

class SliderService implements SliderServiceInterface
{
private $sliderRepository;

    /**
     * SliderService constructor.
     * @param $sliderRepository
     */
    public function __construct(SliderRepository $sliderRepository)
    {
        $this->sliderRepository = $sliderRepository;
    }

    public function slider(): array
    {
        return $this->sliderRepository->findBy(['published'=>1]);
    }
}