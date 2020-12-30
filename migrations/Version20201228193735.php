<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201228193735 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE checkout ADD product_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE checkout ADD CONSTRAINT FK_AF382D4E4584665A FOREIGN KEY (product_id) REFERENCES menu (id)');
        $this->addSql('CREATE INDEX IDX_AF382D4E4584665A ON checkout (product_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE checkout DROP FOREIGN KEY FK_AF382D4E4584665A');
        $this->addSql('DROP INDEX IDX_AF382D4E4584665A ON checkout');
        $this->addSql('ALTER TABLE checkout DROP product_id');
    }
}
