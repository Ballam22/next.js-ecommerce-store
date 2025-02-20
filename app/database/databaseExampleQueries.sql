CREATE TABLE products (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  price decimal(10, 2) NOT NULL,
  imageurl varchar(255) NOT NULL
);

INSERT INTO
  products (name, price, imageurl)
VALUES
  (
    'FitGear Pro Shirt',
    29.99,
    '/images/shirt.jpg'
  ),
  (
    'FitGear FlexFit Leggings',
    49.99,
    '/images/leggings.jpg'
  ),
  (
    'FitGear Performance Hoodie',
    59.99,
    '/images/hoodie.jpg'
  ),
  (
    'FitGear Training Gloves',
    19.99,
    '/images/gloves.jpg'
  );
