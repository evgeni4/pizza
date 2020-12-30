<?php

namespace App\Entity;

use App\Repository\CategoriesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
/**
 * @ORM\Entity(repositoryClass=CategoriesRepository::class)
 * @Vich\Uploadable
 */
class Categories
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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $thumbnail;
    /**
     * @Vich\UploadableField (mapping="category_image", fileNameProperty="thumbnail")
     */
    private $thumbnailFile;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $imageLeftTop;
    /**
     * @Vich\UploadableField (mapping="category_image", fileNameProperty="imageLeftTop")
     */
    private $imageLeftTopFile;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $imageRightBottom;
    /**
     * @Vich\UploadableField (mapping="category_image", fileNameProperty="imageRightBottom")
     */
    private $imageRightBottomFile;
    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $sectionImage;
    /**
     * @Vich\UploadableField (mapping="category_image", fileNameProperty="sectionImage")
     */
    private $sectionImageFile;
    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $sectionTitle;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $sectionDescription;

    /**
     * @ORM\OneToMany(targetEntity=Menu::class, mappedBy="category")
     */
    private $menu;

    /**
     * @ORM\OneToMany(targetEntity=Specials::class, mappedBy="category")
     */
    private $specials;

    public function __construct()
    {
        $this->createdAt = new \DateTime('now');
        $this->menu = new ArrayCollection();
        $this->specials = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getThumbnail(): ?string
    {
        return $this->thumbnail;
    }

    public function setThumbnail(?string $thumbnail): self
    {
        $this->thumbnail = $thumbnail;

        return $this;
    }

    public function getThumbnailFile()
    {
        return $this->thumbnailFile;
    }

    public function setThumbnailFile($thumbnailFile): void
    {
        $this->thumbnailFile = $thumbnailFile;
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

    public function getImageLeftTop(): ?string
    {
        return $this->imageLeftTop;
    }

    public function setImageLeftTop(?string $imageLeftTop): self
    {
        $this->imageLeftTop = $imageLeftTop;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getImageLeftTopFile()
    {
        return $this->imageLeftTopFile;
    }

    /**
     * @param mixed $imageLeftTopFile
     */
    public function setImageLeftTopFile($imageLeftTopFile): void
    {
        $this->imageLeftTopFile = $imageLeftTopFile;
    }

    public function getImageRightBottom(): ?string
    {
        return $this->imageRightBottom;
    }

    public function setImageRightBottom(?string $imageRightBottom): self
    {
        $this->imageRightBottom = $imageRightBottom;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getImageRightBottomFile()
    {
        return $this->imageRightBottomFile;
    }

    /**
     * @param mixed $imageRightBottomFile
     */
    public function setImageRightBottomFile($imageRightBottomFile): void
    {
        $this->imageRightBottomFile = $imageRightBottomFile;
    }

    public function getSectionImage(): ?string
    {
        return $this->sectionImage;
    }

    public function setSectionImage(?string $sectionImage): self
    {
        $this->sectionImage = $sectionImage;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getSectionImageFile()
    {
        return $this->sectionImageFile;
    }

    /**
     * @param mixed $sectionImageFile
     */
    public function setSectionImageFile($sectionImageFile): void
    {
        $this->sectionImageFile = $sectionImageFile;
    }

    public function getSectionTitle(): ?string
    {
        return $this->sectionTitle;
    }

    public function setSectionTitle(?string $sectionTitle): self
    {
        $this->sectionTitle = $sectionTitle;

        return $this;
    }

    public function getSectionDescription(): ?string
    {
        return $this->sectionDescription;
    }

    public function setSectionDescription(?string $sectionDescription): self
    {
        $this->sectionDescription = $sectionDescription;

        return $this;
    }

    /**
     * @return Collection|Menu[]
     */
    public function getMenu(): Collection
    {
        return $this->menu;
    }

    public function addMenu(Menu $menu): self
    {
        if (!$this->menu->contains($menu)) {
            $this->menu[] = $menu;
            $menu->setCategory($this);
        }

        return $this;
    }

    public function removeMenu(Menu $menu): self
    {
        if ($this->menu->removeElement($menu)) {
            // set the owning side to null (unless already changed)
            if ($menu->getCategory() === $this) {
                $menu->setCategory(null);
            }
        }

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
            $special->setCategory($this);
        }

        return $this;
    }

    public function removeSpecial(Specials $special): self
    {
        if ($this->specials->removeElement($special)) {
            // set the owning side to null (unless already changed)
            if ($special->getCategory() === $this) {
                $special->setCategory(null);
            }
        }

        return $this;
    }

}
