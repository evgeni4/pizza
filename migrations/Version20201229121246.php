<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201229121246 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE checkout CHANGE discount discount_id INT NOT NULL');
        $this->addSql('ALTER TABLE checkout ADD CONSTRAINT FK_AF382D4E4C7C611F FOREIGN KEY (discount_id) REFERENCES discount (id)');
        $this->addSql('CREATE INDEX IDX_AF382D4E4C7C611F ON checkout (discount_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE checkout DROP FOREIGN KEY FK_AF382D4E4C7C611F');
        $this->addSql('DROP INDEX IDX_AF382D4E4C7C611F ON checkout');
        $this->addSql('ALTER TABLE checkout CHANGE discount_id discount INT NOT NULL');
    }
}
