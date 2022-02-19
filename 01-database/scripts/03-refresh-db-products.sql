-- -----------------------------------------------------
-- Schema full-stack-nikriks
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-nikriks`;

CREATE SCHEMA `full-stack-nikriks`;
USE `full-stack-nikriks` ;

-- -----------------------------------------------------
-- Table `full-stack-nikriks`.`product_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-nikriks`.`product_category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-nikriks`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-nikriks`.`product` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `unit_price` DECIMAL(13,2) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `units_in_stock` INT(11) DEFAULT NULL,
   `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  `category_id` BIGINT(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Categories
-- -----------------------------------------------------
INSERT INTO product_category(category_name) VALUES ('Specials');
INSERT INTO product_category(category_name) VALUES ('A La Carte (For Sharing)');
INSERT INTO product_category(category_name) VALUES ('Rice Meals');
INSERT INTO product_category(category_name) VALUES ('Extras');
INSERT INTO product_category(category_name) VALUES ('Party Trays');

-- -----------------------------------------------------
-- Specials
-- -----------------------------------------------------
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1000', 'Special Batangas Lomi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 85, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1001', 'Chicken Lomi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 100, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1002', 'Lechon Lomi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 100, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1003', 'Miki Guisado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 85, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1004', 'Chami (Tamis Anghang)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 95, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1005', 'Canton Guisado with Lechon Kawali', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 140, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1006', 'Bihon Guisado with Lechon Kawali', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 140, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1007', 'Super Jumbo Overload - Batangas Lomi', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 230, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1008', 'Super Jumbo Overload - Miki Guisado', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 270, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1009', 'Super Jumbo Overload - Chami (Tamis Anghang', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 270, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1010', 'Pansit with Lecho Kawali in Bilao - Small (5-8 pax)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 400, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1011', 'Pansit with Lecho Kawali in Bilao - Medium (10-12 pax)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 550, 1, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('SPECIALS-1012', 'Pansit with Lecho Kawali in Bilao - Large (15-20 pax)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin dui et dui euismod malesuada. Nunc hendrerit pulvinar tellus, posuere molestie libero volutpat quis. Donec arcu nisl, cursus non neque non, consequat ornare nunc.', 'assets/images/products/placeholder.png', 1, 100, 700, 1, NOW());


-- -----------------------------------------------------
-- A La Carte (For Sharing)
-- -----------------------------------------------------
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1000', 'Cripsy Pork Sisig - Solo', 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 90, 2, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1001', 'Cripsy Pork Sisig - Barkada', 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 220, 2, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1002', 'Creamy Tofu', 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 120, 2, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1003', 'Lechon Kawali, 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 120, 2, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1004', "Tokwa't Baboy", 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 140, 2, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1005', 'Oyster Garlic Chicken', 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 175, 2, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1006', 'Buttered Garlic Chicken', 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 175, 2, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1007', 'Sweet and Sour Fish Fillet', 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 170, 2, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1008', 'Butter Garlic Shrimp', 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 220, 2, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1009', 'Beef Caldereta', 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 220, 2, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('A-LA-CARTE-1010', 'Roastbeef with Creamy Mushroom Sauce', 'Do you love mathematics? If so, then you need this elegant coffee mug with an amazing fractal design. You don\'t have to worry about boring coffee mugs anymore. This coffee mug will be the topic of conversation in the office, guaranteed! Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 220, 2, NOW());


-- -----------------------------------------------------
-- Rice Meals
-- -----------------------------------------------------
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('RICE MEALS-1000', 'Chicken Nuggets with ala King Sauce', 'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 80, 3, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('RICE MEALS-1001', 'Pork Sisig with Rice ', 'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 90, 3, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('RICE MEALS-1002', 'Lechon Kawali with Rice ', 'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 90, 3, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('RICE MEALS-1003', 'Buttered Chicken with Rice ', 'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 90, 3, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('RICE MEALS-1004', 'Oyster Garlic Chicken with Rice ', 'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 90, 3, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('RICE MEALS-1005', 'Sweet and Sour Fish Fillet with Rice ', 'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 100, 3, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('RICE MEALS-1006', 'Buttered Garlic Shrimp with Rice ', 'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 110, 3, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('RICE MEALS-1007', 'Beef Caldereta with Rice ', 'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 120, 3, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('RICE MEALS-1008', 'Roastbeef with Rice  ', 'Fractal images are amazing! You can now own a mouse pad with a unique and amazing fractal. The mouse pad is made of a durable and smooth material. Your mouse will easily glide across the mouse pad. This mouse pad will brighten your workspace. Buy it now!', 'assets/images/products/placeholder.png', 1, 100, 120, 3, NOW());


-- -----------------------------------------------------
-- Extras
-- -----------------------------------------------------
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('EXTRAS-1000', 'Double Toppings', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 25, 4, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('EXTRAS-1001', 'Overload Toppings', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 55, 4, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('EXTRAS-1002', 'Plain Rice', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png'', 1, 100, 15, 4, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('EXTRAS-1003', 'NikRik's Special Egg Fried Rice', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 20, 4, NOW());

-- -----------------------------------------------------
-- Party Trays
-- -----------------------------------------------------

INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1000', 'Kawali in Bilao - Small (5-8 pax)', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 400, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1001', 'Kawali in Bilao - Medium (10-12 pax)', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 550, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1002', 'Kawali in Bilao - Large (15-20 pax)', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 700, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1003', 'Creamy Tofu', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 600, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1004', 'Chopseuy', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 600, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1005', 'Sweet & Sour Fish Fillet', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 800, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1006', 'Fish Fillet with Creamy Garlic Dip ', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 800, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1007', 'Buttered Garlic Chicken', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 850, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1008', 'Oyster Chicken', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 850, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1009', 'Buttered Garlic Shrimp', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 1000, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1010', 'Crispy Pork Sisig', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 1100, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1011', 'Lechon Kawali', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'aassets/images/products/placeholder.png', 1, 100, 1200, 5, NOW());
INSERT INTO product (sku, name, description, image_url, active, units_in_stock, unit_price, category_id,date_created) VALUES ('PARTY TRAYS-1012', 'Roastbeef with Mushroom Sauce', 'This luggage tag will help you identify your luggage. The luggage tag is very unique and it will stand out from the crowd. The luggage tag is created out of a rugged and durable plastic. Buy this luggage tag now to make it easy to identify your luggage!', 'assets/images/products/placeholder.png', 1, 100, 1600, 5, NOW());

