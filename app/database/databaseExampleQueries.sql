CREATE TABLE products (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  price decimal(10, 2) NOT NULL,
  image_url varchar(255) NOT NULL
);

INSERT INTO
  products (name, price, image_url)
VALUES
  (
    'FitGear Pro Shirt',
    29.99,
    '/images/shirt.jpg'
  ),
  (
    'Fitgear FlexFit Leggings',
    49.99,
    '/images/leggings.jpg'
  ),
  (
    'Fitgear Performance Hoodie',
    59.99,
    '/images/hoodie.jpg'
  ),
  (
    'Fitgear Training Gloves',
    19.99,
    '/images/gloves.jpg'
  );
