<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201228153914 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE checkout ADD delivery_price_id INT DEFAULT NULL, ADD customer_id INT NOT NULL, ADD discount INT NOT NULL, ADD created_at DATETIME NOT NULL');
        $this->addSql('ALTER TABLE checkout ADD CONSTRAINT FK_AF382D4EB775268B FOREIGN KEY (delivery_price_id) REFERENCES delivery_pay (id)');
        $this->addSql('ALTER TABLE checkout ADD CONSTRAINT FK_AF382D4E9395C3F3 FOREIGN KEY (customer_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_AF382D4EB775268B ON checkout (delivery_price_id)');
        $this->addSql('CREATE INDEX IDX_AF382D4E9395C3F3 ON checkout (customer_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE checkout DROP FOREIGN KEY FK_AF382D4EB775268B');
        $this->addSql('ALTER TABLE checkout DROP FOREIGN KEY FK_AF382D4E9395C3F3');
        $this->addSql('DROP INDEX IDX_AF382D4EB775268B ON checkout');
        $this->addSql('DROP INDEX IDX_AF382D4E9395C3F3 ON checkout');
        $this->addSql('ALTER TABLE checkout DROP delivery_price_id, DROP customer_id, DROP discount, DROP created_at');
    }
}
