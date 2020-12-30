<?php

namespace App\Entity;

use App\Repository\MailsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=MailsRepository::class)
 */
class Mails
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message = "This ( Name ) should not be blank.")
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z\s]+$/",
     *     match=true,
     *     message="Your ( Name ) cannot contain a number"
     * )
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @assert\NotBlank(message =" This ( Email ) should not be blank.")
     * @Assert\Email message="Your ( Email ) cannot valid!"
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
      * @Assert\NotBlank(message = "This ( Name ) should not be blank.")
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z\s]+$/",
     *     match=true,
     *     message="Your ( Name ) cannot contain a number"
     * )
     */
    private $subject;

    /**
     * @ORM\Column(type="text", nullable=true)
      * @Assert\NotBlank(message = "This ( Name ) should not be blank.")
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z\s]+$/",
     *     match=true,
     *     message="Your ( Name ) cannot contain a number"
     * )
     */
    private $message;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="mails")
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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

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

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(?string $subject): self
    {
        $this->subject = $subject;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;

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
