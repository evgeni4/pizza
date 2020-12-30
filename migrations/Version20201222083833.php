<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201222083833 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE specials ADD special_category_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE specials ADD CONSTRAINT FK_224117F6D9C34E4A FOREIGN KEY (special_category_id) REFERENCES category_specials (id)');
        $this->addSql('CREATE INDEX IDX_224117F6D9C34E4A ON specials (special_category_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE specials DROP FOREIGN KEY FK_224117F6D9C34E4A');
        $this->addSql('DROP INDEX IDX_224117F6D9C34E4A ON specials');
        $this->addSql('ALTER TABLE specials DROP special_category_id');
    }
}
