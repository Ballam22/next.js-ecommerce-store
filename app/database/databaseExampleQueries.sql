CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(255) NOT NULL
);

INSERT INTO products (name, price, image_url) VALUES
('FitGear Pro Shirt', 29.99, '/images/product1.jpg'),
('FlexFit Leggings', 49.99, '/images/product2.jpg'),
('Performance Hoodie', 59.99, '/images/product3.jpg'),
('Training Gloves', 19.99, '/images/product4.jpg');
