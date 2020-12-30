<?php

namespace App\Entity;

use App\Repository\ReservationsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ReservationsRepository::class)
 * @UniqueEntity(fields={"phone"}, message="There is already an account with this phone")
 */
class Reservations
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message = "This ( Name ) should not be blank.")
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z\s]+$/",
     *     match=true,
     *     message="Your ( Name ) cannot contain a number"
     * )
     */
    private $fullName;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank(message = "This ( Guests ) should not be blank.")
     */
    private $guests;

    /**
     * @ORM\Column(type="date")
     * @Assert\NotBlank(message = "This ( Date ) should not be blank.")
     */
    private $date;

    /**
     * @ORM\Column(type="time" )
     * @Assert\NotBlank(message = "This ( Time ) should not be blank.")
     */
    private $time;

    /**
     * @ORM\Column(type="integer", length=20 ,unique=true)
     * @Assert\NotBlank(message = "This ( Phone ) should not be blank.")
     */
    private $phone;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="reservations")
     */
    private $user;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    public function __construct()
    {
        $this->createdAt = new \DateTime('now');
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(string $fullName): self
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function getGuests(): ?int
    {
        return $this->guests;
    }

    public function setGuests(int $guests): self
    {
        $this->guests = $guests;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate( $date): self
    {

        $this->date = new \DateTime($date);

        return $this;
    }

    public function getTime(): ?\DateTimeInterface
    {
        return $this->time;
    }

    public function setTime(  $time): self
    {
        $this->time = new \DateTime($time);

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

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
}
