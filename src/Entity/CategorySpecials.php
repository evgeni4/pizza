<?php

namespace App\Entity;

use App\Repository\CategorySpecialsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategorySpecialsRepository::class)
 */
class CategorySpecials
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
     * @ORM\Column(type="boolean")
     */
    private $published=true;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity=Specials::class, mappedBy="specialCategory")
     */
    private $specials;

    public function __construct()
    {
        $this->specials = new ArrayCollection();
        $this->createdAt=new \DateTime('now');
    }
public function __toString(){
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

    public function getPublished(): ?bool
    {
        return $this->published;
    }

    public function setPublished(bool $published): self
    {
        $this->published = $published;

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
     * @return Collection|Specials[]
     */
    public function getSpecials(): Collection
    {
        return $this->specials;
    }

    public function addSpecial(Specials $special): self
    {
        if (!$this->specials->contains($special)) {
            $this->specials[] = $special;
            $special->setSpecialCategory($this);
        }

        return $this;
    }

    public function removeSpecial(Specials $special): self
    {
        if ($this->specials->removeElement($special)) {
            // set the owning side to null (unless already changed)
            if ($special->getSpecialCategory() === $this) {
                $special->setSpecialCategory(null);
            }
        }

        return $this;
    }
}
