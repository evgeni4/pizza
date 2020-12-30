<?php

namespace App\Entity;

use App\Repository\MenuRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
/**
 * @ORM\Entity(repositoryClass=MenuRepository::class)
 * @Vich\Uploadable
 */
class Menu
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
     * @ORM\Column(type="string", length=255,nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $price;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=Categories::class, inversedBy="menu")
     */
    private $category;

    /**
     * @ORM\Column(type="boolean")
     */
    private $published = true;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $promotion = false;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $vegetarian = false;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $menuImage;
    /**
     * @Vich\UploadableField (mapping="menu_image", fileNameProperty="menuImage")
     */
    private $menuImageFile;

    /**
     * @ORM\OneToMany(targetEntity=Cart::class, mappedBy="product")
     */
    private $carts;

    public function __construct()
    {
        $this->createdAt = new \DateTime('now');
        $this->carts = new ArrayCollection();
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

    public function setDescription(string $description): self
    {
        $this->description = $description;

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

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getCategory(): ?Categories
    {
        return $this->category;
    }

    public function setCategory(?Categories $category): self
    {
        $this->category = $category;

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

    public function getPromotion(): ?bool
    {
        return $this->promotion;
    }

    public function setPromotion(?bool $promotion): self
    {
        $this->promotion = $promotion;

        return $this;
    }

    public function getVegetarian(): ?bool
    {
        return $this->vegetarian;
    }

    public function setVegetarian(?bool $vegetarian): self
    {
        $this->vegetarian = $vegetarian;

        return $this;
    }

    public function getMenuImage(): ?string
    {
        return $this->menuImage;
    }

    public function setMenuImage(?string $menuImage): self
    {
        $this->menuImage = $menuImage;

        return $this;
    }
    public function getMenuImageFile()
    {
        return $this->menuImageFile;
    }

    public function setMenuImageFile($menuImageFile): void
    {
        $this->menuImageFile = $menuImageFile;
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
            $cart->setProduct($this);
        }

        return $this;
    }

    public function removeCart(Cart $cart): self
    {
        if ($this->carts->removeElement($cart)) {
            // set the owning side to null (unless already changed)
            if ($cart->getProduct() === $this) {
                $cart->setProduct(null);
            }
        }

        return $this;
    }
}
