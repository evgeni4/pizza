<?php

namespace App\Entity;

use App\Repository\CartRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CartRepository::class)
 */
class Cart
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Menu::class, inversedBy="carts")
     */
    private $product;

    /**
     * @ORM\Column(type="integer")
     */
    private $quality;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="carts")
     */
    private $user;

    /**
     * @ORM\Column(type="boolean")
     */
    private $status = true;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduct(): ?Menu
    {
        return $this->product;
    }

    public function setProduct(?Menu $product): self
    {
        $this->product = $product;

        return $this;
    }

    public function getQuality(): ?int
    {
        return $this->quality;
    }

    public function setQuality(int $quality): self
    {
        $this->quality = $quality;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }
}
