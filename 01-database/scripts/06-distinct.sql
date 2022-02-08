USE `full-stack-ecommerce`;

-- clean up previous database TABLESPACE

SET FOREIGN_KEY_CHECKS=0;

TRUNCATE customer;
TRUNCATE orders;
TRUNCATE order_item;
TRUNCATE address;

SET FOREIGN_KEY_CHECKS=1;

--Step 2: make the email address UNIQUE

ALTER TABLE customer ADD UNIQUE (email);
