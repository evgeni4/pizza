<?php


namespace App\Service\Settings;


use App\Entity\Settings;

interface SettingsServiceInterface
{
    public function findOneSettings(): ?Settings;
}