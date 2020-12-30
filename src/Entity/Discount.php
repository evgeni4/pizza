<?php

namespace App\Entity;

use App\Repository\DiscountRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=DiscountRepository::class)
 */
class Discount
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $title;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\Length(
     *      max = 50,
     *      maxMessage = "Your first name cannot be longer than {{ limit }} characters"
     * )
     */
    private $description;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $start;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $end;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="discount")
     */
    private $user;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $published = true;

    /**
     * @ORM\Column(type="integer")
     */
    private $percent;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $indefinitely = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private $verifyCard = false;

    /**
     * @ORM\OneToMany(targetEntity=Checkout::class, mappedBy="discount")
     */
    private $checkouts;

    public function __construct()
    {
        $this->createdAt = new \DateTime('now');
        $this->checkouts = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getStart(): ?\DateTimeInterface
    {
        return $this->start;
    }

    public function setStart(?\DateTimeInterface $start): self
    {
        $this->start = $start;

        return $this;
    }

    public function getEnd(): ?\DateTimeInterface
    {
        return $this->end;
    }

    public function setEnd(?\DateTimeInterface $end): self
    {
        $this->end = $end;

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

    public function getPublished(): ?bool
    {
        return $this->published;
    }

    public function setPublished(?bool $published): self
    {
        $this->published = $published;

        return $this;
    }

    public function getPercent(): ?int
    {
        return $this->percent;
    }

    public function setPercent(int $percent): self
    {
        $this->percent = $percent;

        return $this;
    }

    public function getIndefinitely(): ?bool
    {
        return $this->indefinitely;
    }

    public function setIndefinitely(?bool $indefinitely): self
    {
        $this->indefinitely = $indefinitely;

        return $this;
    }

    public function getVerifyCard(): ?bool
    {
        return $this->verifyCard;
    }

    public function setVerifyCard(bool $verifyCard): self
    {
        $this->verifyCard = $verifyCard;

        return $this;
    }

    /**
     * @return Collection|Checkout[]
     */
    public function getCheckouts(): Collection
    {
        return $this->checkouts;
    }

    public function addCheckout(Checkout $checkout): self
    {
        if (!$this->checkouts->contains($checkout)) {
            $this->checkouts[] = $checkout;
            $checkout->setDiscount($this);
        }

        return $this;
    }

    public function removeCheckout(Checkout $checkout): self
    {
        if ($this->checkouts->removeElement($checkout)) {
            // set the owning side to null (unless already changed)
            if ($checkout->getDiscount() === $this) {
                $checkout->setDiscount(null);
            }
        }

        return $this;
    }
}
