<?php

namespace App\Entity;

use App\Repository\DeliveryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DeliveryRepository::class)
 */
class Delivery
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $title;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=Checkout::class, mappedBy="delivery")
     */
    private $deliveryCheckout;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $price;

    public function __construct()
    {
        $this->createdAt = new \DateTime('now');
        $this->deliveryCheckout = new ArrayCollection();
    }
    public function __toString()
    {
        return $this->getTitle();
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection|Checkout[]
     */
    public function getDeliveryCheckout(): Collection
    {
        return $this->deliveryCheckout;
    }

    public function addDeliveryCheckout(Checkout $deliveryCheckout): self
    {
        if (!$this->deliveryCheckout->contains($deliveryCheckout)) {
            $this->deliveryCheckout[] = $deliveryCheckout;
            $deliveryCheckout->setDelivery($this);
        }

        return $this;
    }

    public function removeDeliveryCheckout(Checkout $deliveryCheckout): self
    {
        if ($this->deliveryCheckout->removeElement($deliveryCheckout)) {
            // set the owning side to null (unless already changed)
            if ($deliveryCheckout->getDelivery() === $this) {
                $deliveryCheckout->setDelivery(null);
            }
        }

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }
}
