<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201228151740 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE checkout (id INT AUTO_INCREMENT NOT NULL, address_id INT DEFAULT NULL, delivery_id INT DEFAULT NULL, payment VARCHAR(255) NOT NULL, INDEX IDX_AF382D4EF5B7AF75 (address_id), INDEX IDX_AF382D4E12136921 (delivery_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE delivery_pay (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, price NUMERIC(10, 2) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE checkout ADD CONSTRAINT FK_AF382D4EF5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id)');
        $this->addSql('ALTER TABLE checkout ADD CONSTRAINT FK_AF382D4E12136921 FOREIGN KEY (delivery_id) REFERENCES delivery (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE checkout');
        $this->addSql('DROP TABLE delivery_pay');
    }
}
