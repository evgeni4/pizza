<?php

namespace App\Entity;

use App\Repository\AddressRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=AddressRepository::class)
 * @UniqueEntity(fields={"phone"}, message="There is already an account with this phone")
 */
class Address
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message = "This ( First name ) should not be blank.")
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z\s]+$/",
     *     match=true,
     *     message="Your ( Last name ) cannot contain a number"
     * )
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message = "This ( Last name ) should not be blank.")
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z\s]+$/",
     *     match=true,
     *     message="Your ( Last name ) cannot contain a number"
     * )
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message = "This ( Address ) should not be blank.")
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $addressComplement;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank(message = "This ( Zip ) should not be blank.")
     */
    private $zip;

    /**
     * @ORM\Column(type="string", length=12,  unique=true)
     * @Assert\NotBlank(message = "This ( Phone ) should not be blank.")
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message = "This ( City ) should not be blank.")
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message = "This ( State ) should not be blank.")
     */
    private $state;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="address")
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=Checkout::class, mappedBy="address")
     */
    private $addressCheckout;

    public function __construct()
    {
        $this->createdAt = new \DateTime('now');
        $this->addressCheckout = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->getFirstName();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getAddressComplement(): ?string
    {
        return $this->addressComplement;
    }

    public function setAddressComplement(string $addressComplement): self
    {
        $this->addressComplement = $addressComplement;

        return $this;
    }

    public function getZip(): ?int
    {
        return $this->zip;
    }

    public function setZip(int $zip): self
    {
        $this->zip = $zip;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getState(): ?string
    {
        return $this->state;
    }

    public function setState(string $state): self
    {
        $this->state = $state;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|Checkout[]
     */
    public function getAddressCheckout(): Collection
    {
        return $this->addressCheckout;
    }

    public function addAddressCheckout(Checkout $addressCheckout): self
    {
        if (!$this->addressCheckout->contains($addressCheckout)) {
            $this->addressCheckout[] = $addressCheckout;
            $addressCheckout->setAddress($this);
        }

        return $this;
    }

    public function removeAddressCheckout(Checkout $addressCheckout): self
    {
        if ($this->addressCheckout->removeElement($addressCheckout)) {
            // set the owning side to null (unless already changed)
            if ($addressCheckout->getAddress() === $this) {
                $addressCheckout->setAddress(null);
            }
        }

        return $this;
    }
}
