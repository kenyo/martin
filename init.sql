CREATE TABLE inventory (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  quantity INTEGER NOT NULL,
  photo VARCHAR(255)
);

INSERT INTO inventory (name, description, quantity, photo)
VALUES ('protocookie', 'one tasty cookie', 10, 'https://celebratingsweets.com/wp-content/uploads/2014/08/Chocolate-Cookies-3.jpg');
