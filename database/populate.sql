
INSERT INTO Makes (make) VALUES
('Toyota'),
('Honda'),
('Ford'),
('Chevrolet'),
('Nissan'),
('BMW'),
('Audi'),
('Mercedes-Benz'),
('Volkswagen'),
('Hyundai'),
('Kia'),
('Subaru'),
('Mazda');

-- Insert dummy data into the Models table
INSERT INTO Models (model) VALUES
('Corolla'),
('Civic'),
('Mustang'),
('Malibu'),
('Altima'),
('3 Series'),
('A4'),
('C-Class'),
('Golf'),
('Elantra'),
('Sorento'),
('Outback'),
('Mazda3');

-- Insert dummy data into the Colors table
INSERT INTO Colors (color) VALUES
('Red'),
('Blue'),
('Green'),
('Black'),
('White'),
('Silver'),
('Gray'),
('Yellow'),
('Orange'),
('Purple'),
('Brown'),
('Pink');

-- Insert dummy data into the Bodies table
INSERT INTO Bodies (body_style) VALUES
('Sedan'),
('SUV'),
('Coupe'),
('Hatchback'),
('Convertible'),
('Pickup Truck'),
('Minivan'),
('Wagon'),
('Coupe-SUV'),
('Roadster'),
('Crossover'),
('Luxury Sedan');

-- Insert dummy data into the FuelType table
INSERT INTO FuelType (fuel_type) VALUES
('Petrol'),
('Diesel'),
('Electric'),
('Hybrid'),
('Hydrogen'),
('Natural Gas'),
('Bio-diesel'),
('Ethanol'),
('Flex Fuel'),
('LPG'),
('Solar'),
('Electric-Petrol');

-- Insert dummy data into the Promotions table
INSERT INTO Promotions (name, start_date, end_date) VALUES
('Summer Sale', '2024-06-01', '2024-06-30'),
('Winter Discount', '2024-12-01', '2024-12-31'),
('Spring Sale', '2024-03-01', '2024-03-31'),
('Fall Discount', '2024-09-01', '2024-09-30'),
('Black Friday Sale', '2024-11-25', '2024-11-30'),
('New Year Offer', '2024-01-01', '2024-01-07'),
('Valentines Day Special', '2024-02-10', '2024-02-14'),
('Memorial Day Sale', '2024-05-25', '2024-05-28'),
('Labor Day Sale', '2024-09-02', '2024-09-05'),
('Independence Day Special', '2024-07-04', '2024-07-07'),
('Halloween Offer', '2024-10-29', '2024-10-31'),
('Easter Sale', '2024-04-18', '2024-04-21');

-- Insert dummy data into the Images table
INSERT INTO Images (image_link, car_id, default_image) VALUES
('http://example.com/car1.jpg', 1, TRUE),
('http://example.com/car2.jpg', 2, TRUE),
('http://example.com/car3.jpg', 3, TRUE),
('http://example.com/car4.jpg', 4, TRUE),
('http://example.com/car5.jpg', 5, TRUE),
('http://example.com/car6.jpg', 6, TRUE),
('http://example.com/car7.jpg', 7, TRUE),
('http://example.com/car8.jpg', 8, TRUE),
('http://example.com/car9.jpg', 9, TRUE),
('http://example.com/car10.jpg', 10, TRUE),
('http://example.com/car11.jpg', 11, TRUE),
('http://example.com/car12.jpg', 12, TRUE),
('http://example.com/car13.jpg', 13, TRUE);

-- Insert dummy data into the Cars table
INSERT INTO Cars (name, year, make_id, model_id, color_id, body_id, mileage, fuel_id, promo_id, arrival_date, price, availability, date_sold, image_id) VALUES
('Toyota Corolla 2021', 2021, 1, 1, 1, 1, 15000, 1, 1, '2024-01-15', 20000, TRUE, NULL, 1),
('Honda Civic 2022', 2022, 2, 2, 2, 1, 10000, 1, 1, '2024-02-20', 22000, TRUE, NULL, 2),
('Ford Mustang 2020', 2020, 3, 3, 3, 3, 20000, 1, 2, '2024-03-25', 30000, TRUE, NULL, 3),
('Chevrolet Malibu 2019', 2019, 4, 4, 4, 1, 25000, 1, 3, '2024-04-15', 18000, TRUE, NULL, 4),
('Nissan Altima 2018', 2018, 5, 5, 5, 2, 30000, 1, 4, '2024-05-20', 17000, TRUE, NULL, 5),
('BMW 3 Series 2021', 2021, 6, 6, 6, 3, 10000, 1, 5, '2024-06-25', 35000, TRUE, NULL, 6),
('Audi A4 2020', 2020, 7, 7, 7, 3, 15000, 1, 6, '2024-07-30', 33000, TRUE, NULL, 7),
('Mercedes-Benz C-Class 2021', 2021, 8, 8, 8, 1, 12000, 1, 7, '2024-08-10', 40000, TRUE, NULL, 8),
('Volkswagen Golf 2019', 2019, 9, 9, 9, 2, 22000, 1, 8, '2024-09-15', 20000, TRUE, NULL, 9),
('Hyundai Elantra 2018', 2018, 10, 10, 10, 4, 27000, 1, 9, '2024-10-20', 15000, TRUE, NULL, 10),
('Kia Sorento 2017', 2017, 11, 11, 11, 5, 35000, 1, 10, '2024-11-25', 25000, TRUE, NULL, 11),
('Subaru Outback 2020', 2020, 12, 12, 12, 6, 20000, 1, 11, '2024-12-30', 28000, TRUE, NULL, 12),
('Mazda Mazda3 2019', 2019, 13, 13, 5, 3, 23000, 1, 12, '2024-01-05', 19000, TRUE, NULL, 13);

-- Insert dummy data into the Users table
-- INSERT INTO Users (first_name, last_name, role, email, username, password, avatar) VALUES
-- ('Juan', 'Pinol', 'admin', 'juan.pinol@cvent.com', 'juan', '123'),
-- ('Jane', 'Smith', 'user'),
-- ('Bob', 'Johnson', 'user'),
-- ('Shaan', 'Malhotra', 'admin', 'shaan.malhotra@cvent.com'),
-- ('David', 'Brown', 'user'),
-- ('Emma', 'Davis', 'user'),
-- ('Noah', 'Beito', 'admin', 'noah.beito@cvent.com'),
-- ('Grace', 'Wilson', 'user'),
-- ('Henry', 'Moore', 'user'),
-- ('Ivy', 'Taylor', 'admin'),
-- ('Jack', 'Anderson', 'user'),
-- ('Karen', 'Thomas', 'user'),
-- ('Leo', 'Jackson', 'user');

SELECT * FROM Makes;
SELECT * FROM Models;
SELECT * FROM Colors;
SELECT * FROM Bodies;
SELECT * FROM FuelType;
SELECT * FROM Promotions;
SELECT * FROM Images;
SELECT * FROM Cars;
SELECT * FROM Users;