<?php


namespace App\Service\Settings;


use App\Entity\Settings;
use App\Repository\SettingsRepository;

class SettingsService implements \App\Service\Settings\SettingsServiceInterface
{
    private $settingsRepository;


    public function __construct(SettingsRepository $settingsRepository)
    {
        $this->settingsRepository = $settingsRepository;
    }

    public function findOneSettings(): ?Settings
    {
        return $this->settingsRepository->findOneBy(['id' => 1]);
    }
}