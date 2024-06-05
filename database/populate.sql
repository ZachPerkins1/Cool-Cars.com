INSERT INTO Makes (id, name) VALUES
(1, 'Toyota'),
(2, 'Honda'),
(3, 'Ford');

-- Insert dummy data into the Models table
INSERT INTO Models (id, name) VALUES
(1, 'Corolla'),
(2, 'Civic'),
(3, 'Mustang');

-- Insert dummy data into the Colors table
INSERT INTO Colors (id, name) VALUES
(1, 'Red'),
(2, 'Blue'),
(3, 'Green');

-- Insert dummy data into the Bodies table
INSERT INTO Bodies (id, name) VALUES
(1, 'Sedan'),
(2, 'SUV'),
(3, 'Coupe');

-- Insert dummy data into the FuelType table
INSERT INTO FuelType (id, name) VALUES
(1, 'Petrol'),
(2, 'Diesel'),
(3, 'Electric');

-- Insert dummy data into the Promotions table
INSERT INTO Promotions (id, name, start_date, end_date) VALUES
(1, 'Summer Sale', '2024-06-01', '2024-06-30'),
(2, 'Winter Discount', '2024-12-01', '2024-12-31');

-- Insert dummy data into the Images table
INSERT INTO Images (id, image_link, car_id, default_image) VALUES
(1, 'http://example.com/car1.jpg', 1, TRUE),
(2, 'http://example.com/car2.jpg', 2, TRUE),
(3, 'http://example.com/car3.jpg', 3, TRUE);

-- Insert dummy data into the Cars table
INSERT INTO Cars (id, name, make_id, model_id, color_id, body_id, mileage, fuel_id, promo_id, arrival_date, price, availability, date_sold, image_id) VALUES
(1, 'Toyota Corolla 2021', 1, 1, 1, 1, 15000, 1, 1, '2024-01-15', 20000, TRUE, NULL, 1),
(2, 'Honda Civic 2022', 2, 2, 2, 1, 10000, 1, 1, '2024-02-20', 22000, TRUE, NULL, 2),
(3, 'Ford Mustang 2020', 3, 3, 3, 3, 20000, 1, 2, '2024-03-25', 30000, TRUE, NULL, 3);

-- Insert dummy data into the Users table
INSERT INTO Users (id, first_name, last_name, role) VALUES
(1, 'John', 'Doe', 'admin'),
(2, 'Jane', 'Smith', 'sales'),
(3, 'Bob', 'Johnson', 'customer');

SELECT * FROM Makes;
SELECT * FROM Models;
SELECT * FROM Colors;
SELECT * FROM Bodies;
SELECT * FROM FuelType;
SELECT * FROM Promotions;
SELECT * FROM Images;
SELECT * FROM Cars;
SELECT * FROM Users;