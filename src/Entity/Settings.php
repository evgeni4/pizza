<?php

namespace App\Entity;

use App\Repository\SettingsRepository;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass=SettingsRepository::class)
 * @Vich\Uploadable
 */
class Settings
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $openDaily;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $logoSite;
    /**
     * @Vich\UploadableField (mapping="logo_site", fileNameProperty="logoSite")
     */
    private $logoSiteFile;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $slogan;

    /**
     * @ORM\Column(type="json", length=255, nullable=true)
     * @var array
     */
    private $openHours;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $sitelock = false;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $sitelockMessage;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $logoBottom;
    /**
     * @Vich\UploadableField (mapping="logo_site", fileNameProperty="logoBottom")
     */
    private $logoBottomFile;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $shippingTax;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOpenDaily(): ?string
    {
        return $this->openDaily;
    }

    public function setOpenDaily(?string $openDaily): self
    {
        $this->openDaily = $openDaily;

        return $this;
    }

    public function getLogoSite(): ?string
    {
        return $this->logoSite;
    }

    public function setLogoSite(?string $logoSite): self
    {
        $this->logoSite = $logoSite;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getLogoSiteFile()
    {
        return $this->logoSiteFile;
    }

    /**
     * @param mixed $logoSiteFile
     */
    public function setLogoSiteFile($logoSiteFile): void
    {
        $this->logoSiteFile = $logoSiteFile;
    }

    public function getSlogan(): ?string
    {
        return $this->slogan;
    }

    public function setSlogan(?string $slogan): self
    {
        $this->slogan = $slogan;

        return $this;
    }

    /**
     * @return array
     */
    public function getOpenHours(): array
    {
        return $this->openHours;
    }

    /**
     * @param array $openHours
     */
    public function setOpenHours(array $openHours): void
    {
        $this->openHours = $openHours;
    }



    public function getSitelock(): ?bool
    {
        return $this->sitelock;
    }

    public function setSitelock(?bool $sitelock): self
    {
        $this->sitelock = $sitelock;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getSitelockMessage(): ?string
    {
        return $this->sitelockMessage;
    }

    public function setSitelockMessage(?string $sitelockMessage): self
    {
        $this->sitelockMessage = $sitelockMessage;

        return $this;
    }

    public function getLogoBottom(): ?string
    {
        return $this->logoBottom;
    }

    public function setLogoBottom(?string $logoBottom): self
    {
        $this->logoBottom = $logoBottom;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getLogoBottomFile()
    {
        return $this->logoBottomFile;
    }

    /**
     * @param mixed $logoBottomFile
     */
    public function setLogoBottomFile($logoBottomFile): void
    {
        $this->logoBottomFile = $logoBottomFile;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getShippingTax(): ?string
    {
        return $this->shippingTax;
    }

    public function setShippingTax(string $shippingTax): self
    {
        $this->shippingTax = $shippingTax;

        return $this;
    }

}
