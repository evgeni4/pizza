<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity(fields={"email"}, message="There is already an account with this username")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message = "This ( First name ) should not be blank.")
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z\s]+$/",
     *     match=true,
     *     message="Your ( Last name ) cannot contain a number"
     * )
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message = "This (Last name ) should not be blank.")
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z\s]+$/",
     *     match=true,
     *     message="Your ( Last name ) cannot contain a number"
     * )
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank(message = "This (Email ) should not be blank.")
     * @Assert\Email( message = "The email '{{ value }}' is not a valid email."
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=50)
     * @Assert\NotBlank(message = "This (Birth Date) should not be blank.")
     */
    private $birthDate;

    /**
     * @ORM\Column(type="string", length=50)
     * @Assert\NotBlank(message = "This (Social Title) should not be blank.")
     */
    private $socialTitle;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="boolean")
     */
    public $isVerified = false;

    /**
     * @ORM\OneToMany(targetEntity=Address::class, mappedBy="user")
     */
    private $address;

    /**
     * @ORM\OneToMany(targetEntity=Cart::class, mappedBy="user")
     */
    private $carts;

    /**
     * @ORM\OneToMany(targetEntity=Discount::class, mappedBy="user")
     */
    private $discount;

    /**
     * @ORM\OneToMany(targetEntity=Reservations::class, mappedBy="user")
     */
    private $reservations;

    /**
     * @ORM\OneToMany(targetEntity=Mails::class, mappedBy="user")
     */
    private $mails;

    /**
     * @ORM\OneToMany(targetEntity=Checkout::class, mappedBy="customer")
     */
    private $userCheckout;

    /**
     * @ORM\Column(type="boolean")
     */
    private $banned;

    public function __construct()
    {
        $this->createdAt = new \DateTime('now');
        $this->address = new ArrayCollection();
        $this->carts = new ArrayCollection();
        $this->discount = new ArrayCollection();
        $this->reservations = new ArrayCollection();
        $this->mails = new ArrayCollection();
        $this->userCheckout = new ArrayCollection();
    }
    public function __toString() {
        return $this->email;
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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getBirthDate(): ?string
    {
        return $this->birthDate;
    }

    public function setBirthDate(string $birthDate): self
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    public function getSocialTitle(): ?string
    {
        return $this->socialTitle;
    }

    public function setSocialTitle(string $socialTitle): self
    {
        $this->socialTitle = $socialTitle;

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
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        //$roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function getSalt()
    {
        // TODO: Implement getSalt() method.
    }

    public function getUsername()
    {
        // TODO: Implement getUsername() method.
    }

    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    /**
     * @return Collection|Address[]
     */
    public function getAddress(): Collection
    {
        return $this->address;
    }

    public function addAddress(Address $address): self
    {
        if (!$this->address->contains($address)) {
            $this->address[] = $address;
            $address->setUser($this);
        }

        return $this;
    }

    public function removeAddress(Address $address): self
    {
        if ($this->address->removeElement($address)) {
            // set the owning side to null (unless already changed)
            if ($address->getUser() === $this) {
                $address->setUser(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection|Cart[]
     */
    public function getCarts(): Collection
    {
        return $this->carts;
    }

    public function addCart(Cart $cart): self
    {
        if (!$this->carts->contains($cart)) {
            $this->carts[] = $cart;
            $cart->setUser($this);
        }

        return $this;
    }

    public function removeCart(Cart $cart): self
    {
        if ($this->carts->removeElement($cart)) {
            // set the owning side to null (unless already changed)
            if ($cart->getUser() === $this) {
                $cart->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Discount[]
     */
    public function getDiscount(): Collection
    {
        return $this->discount;
    }

    public function addDiscount(Discount $discount): self
    {
        if (!$this->discount->contains($discount)) {
            $this->discount[] = $discount;
            $discount->setUser($this);
        }

        return $this;
    }

    public function removeDiscount(Discount $discount): self
    {
        if ($this->discount->removeElement($discount)) {
            // set the owning side to null (unless already changed)
            if ($discount->getUser() === $this) {
                $discount->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Reservations[]
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservations $reservation): self
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations[] = $reservation;
            $reservation->setUser($this);
        }

        return $this;
    }

    public function removeReservation(Reservations $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getUser() === $this) {
                $reservation->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Mails[]
     */
    public function getMails(): Collection
    {
        return $this->mails;
    }

    public function addMail(Mails $mail): self
    {
        if (!$this->mails->contains($mail)) {
            $this->mails[] = $mail;
            $mail->setUser($this);
        }

        return $this;
    }

    public function removeMail(Mails $mail): self
    {
        if ($this->mails->removeElement($mail)) {
            // set the owning side to null (unless already changed)
            if ($mail->getUser() === $this) {
                $mail->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Checkout[]
     */
    public function getUserCheckout(): Collection
    {
        return $this->userCheckout;
    }

    public function addUserCheckout(Checkout $userCheckout): self
    {
        if (!$this->userCheckout->contains($userCheckout)) {
            $this->userCheckout[] = $userCheckout;
            $userCheckout->setCustomer($this);
        }

        return $this;
    }

    public function removeUserCheckout(Checkout $userCheckout): self
    {
        if ($this->userCheckout->removeElement($userCheckout)) {
            // set the owning side to null (unless already changed)
            if ($userCheckout->getCustomer() === $this) {
                $userCheckout->setCustomer(null);
            }
        }

        return $this;
    }

    public function getBanned(): ?bool
    {
        return $this->banned;
    }

    public function setBanned(bool $banned): self
    {
        $this->banned = $banned;

        return $this;
    }
}
