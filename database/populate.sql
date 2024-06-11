INSERT INTO Makes (id, make) VALUES
(1, 'Toyota'),
(2, 'Honda'),
(3, 'Ford'),
(4, 'Chevrolet'),
(5, 'Nissan'),
(6, 'BMW'),
(7, 'Audi'),
(8, 'Mercedes-Benz'),
(9, 'Volkswagen'),
(10, 'Hyundai'),
(11, 'Kia'),
(12, 'Subaru'),
(13, 'Mazda');

-- Insert dummy data into the Models table
INSERT INTO Models (id, model) VALUES
(1, 'Corolla'),
(2, 'Civic'),
(3, 'Mustang'),
(4, 'Malibu'),
(5, 'Altima'),
(6, '3 Series'),
(7, 'A4'),
(8, 'C-Class'),
(9, 'Golf'),
(10, 'Elantra'),
(11, 'Sorento'),
(12, 'Outback'),
(13, 'Mazda3');

-- Insert dummy data into the Colors table
INSERT INTO Colors (id, color) VALUES
(1, 'Red'),
(2, 'Blue'),
(3, 'Green'),
(4, 'Black'),
(5, 'White'),
(6, 'Silver'),
(7, 'Gray'),
(8, 'Yellow'),
(9, 'Orange'),
(10, 'Purple'),
(11, 'Brown'),
(12, 'Pink');

-- Insert dummy data into the Bodies table
INSERT INTO Bodies (id, body_style) VALUES
(1, 'Sedan'),
(2, 'SUV'),
(3, 'Coupe'),
(4, 'Hatchback'),
(5, 'Convertible'),
(6, 'Pickup Truck'),
(7, 'Minivan'),
(8, 'Wagon'),
(9, 'Coupe-SUV'),
(10, 'Roadster'),
(11, 'Crossover'),
(12, 'Luxury Sedan');

-- Insert dummy data into the FuelType table
INSERT INTO FuelType (id, fuel_type) VALUES
(1, 'Petrol'),
(2, 'Diesel'),
(3, 'Electric'),
(4, 'Hybrid'),
(5, 'Hydrogen'),
(6, 'Natural Gas'),
(7, 'Bio-diesel'),
(8, 'Ethanol'),
(9, 'Flex Fuel'),
(10, 'LPG'),
(11, 'Solar'),
(12, 'Electric-Petrol');

-- Insert dummy data into the Promotions table
INSERT INTO Promotions (id, name, start_date, end_date) VALUES
(1, 'Summer Sale', '2024-06-01', '2024-06-30'),
(2, 'Winter Discount', '2024-12-01', '2024-12-31'),
(3, 'Spring Sale', '2024-03-01', '2024-03-31'),
(4, 'Fall Discount', '2024-09-01', '2024-09-30'),
(5, 'Black Friday Sale', '2024-11-25', '2024-11-30'),
(6, 'New Year Offer', '2024-01-01', '2024-01-07'),
(7, 'Valentines Day Special', '2024-02-10', '2024-02-14'),
(8, 'Memorial Day Sale', '2024-05-25', '2024-05-28'),
(9, 'Labor Day Sale', '2024-09-02', '2024-09-05'),
(10, 'Independence Day Special', '2024-07-04', '2024-07-07'),
(11, 'Halloween Offer', '2024-10-29', '2024-10-31'),
(12, 'Easter Sale', '2024-04-18', '2024-04-21');

-- Insert dummy data into the Images table
INSERT INTO Images (id, image_link, car_id, default_image) VALUES
(1, 'http://example.com/car1.jpg', 1, TRUE),
(2, 'http://example.com/car2.jpg', 2, TRUE),
(3, 'http://example.com/car3.jpg', 3, TRUE),
(4, 'http://example.com/car4.jpg', 4, TRUE),
(5, 'http://example.com/car5.jpg', 5, TRUE),
(6, 'http://example.com/car6.jpg', 6, TRUE),
(7, 'http://example.com/car7.jpg', 7, TRUE),
(8, 'http://example.com/car8.jpg', 8, TRUE),
(9, 'http://example.com/car9.jpg', 9, TRUE),
(10, 'http://example.com/car10.jpg', 10, TRUE),
(11, 'http://example.com/car11.jpg', 11, TRUE),
(12, 'http://example.com/car12.jpg', 12, TRUE),
(13, 'http://example.com/car13.jpg', 13, TRUE);

-- Insert dummy data into the Cars table
INSERT INTO Cars (id, name, make_id, model_id, color_id, body_id, mileage, fuel_id, promo_id, arrival_date, price, availability, date_sold, image_id) VALUES
(1, 'Toyota Corolla 2021', 1, 1, 1, 1, 15000, 1, 1, '2024-01-15', 20000, TRUE, NULL, 1),
(2, 'Honda Civic 2022', 2, 2, 2, 1, 10000, 1, 1, '2024-02-20', 22000, TRUE, NULL, 2),
(3, 'Ford Mustang 2020', 3, 3, 3, 3, 20000, 1, 2, '2024-03-25', 30000, TRUE, NULL, 3),
(4, 'Chevrolet Malibu 2019', 4, 4, 4, 1, 25000, 1, 3, '2024-04-15', 18000, TRUE, NULL, 4),
(5, 'Nissan Altima 2018', 5, 5, 5, 2, 30000, 1, 4, '2024-05-20', 17000, TRUE, NULL, 5),
(6, 'BMW 3 Series 2021', 6, 6, 6, 3, 10000, 1, 5, '2024-06-25', 35000, TRUE, NULL, 6),
(7, 'Audi A4 2020', 7, 7, 7, 3, 15000, 1, 6, '2024-07-30', 33000, TRUE, NULL, 7),
(8, 'Mercedes-Benz C-Class 2021', 8, 8, 8, 1, 12000, 1, 7, '2024-08-10', 40000, TRUE, NULL, 8),
(9, 'Volkswagen Golf 2019', 9, 9, 9, 2, 22000, 1, 8, '2024-09-15', 20000, TRUE, NULL, 9),
(10, 'Hyundai Elantra 2018', 10, 10, 10, 4, 27000, 1, 9, '2024-10-20', 15000, TRUE, NULL, 10),
(11, 'Kia Sorento 2017', 11, 11, 11, 5, 35000, 1, 10, '2024-11-25', 25000, TRUE, NULL, 11),
(12, 'Subaru Outback 2020', 12, 12, 12, 6, 20000, 1, 11, '2024-12-30', 28000, TRUE, NULL, 12),
(13, 'Mazda Mazda3 2019', 13, 13, 5, 3, 23000, 1, 12, '2024-01-05', 19000, TRUE, NULL, 13);


-- Insert dummy data into the Users table
INSERT INTO Users (id, first_name, last_name, role) VALUES
(1, 'John', 'Doe', 'admin'),
(2, 'Jane', 'Smith', 'sales'),
(3, 'Bob', 'Johnson', 'customer'),
(4, 'Alice', 'Williams', 'admin'),
(5, 'David', 'Brown', 'sales'),
(6, 'Emma', 'Davis', 'customer'),
(7, 'Frank', 'Miller', 'admin'),
(8, 'Grace', 'Wilson', 'sales'),
(9, 'Henry', 'Moore', 'customer'),
(10, 'Ivy', 'Taylor', 'admin'),
(11, 'Jack', 'Anderson', 'sales'),
(12, 'Karen', 'Thomas', 'customer'),
(13, 'Leo', 'Jackson', 'admin');

INSERT INTO Reviews (name, review, rating, avatar) VALUES
('Brad Pitt', 'Excellent service and a great selection of cars. Highly recommend!', 5, './images/brad.jpeg'),
('Margot Robbie', 'The staff was very friendly and helped me find the perfect car.', 4.5, './images/margot.jpeg'),
('Matthew Mcconaughey', 'Good experience overall, but the process took longer than expected.', 4, './images/matthew.jpeg'),
('Leonardo Decaprio', 'Great prices and fantastic customer service. Will come back again!', 5, './images/leo.webp'),
('Scarlet Johanson', 'Great selection of cars, quick and easy process!.', 5, './images/scarlet.jpeg');

SELECT * FROM Makes;
SELECT * FROM Models;
SELECT * FROM Colors;
SELECT * FROM Bodies;
SELECT * FROM FuelType;
SELECT * FROM Promotions;
SELECT * FROM Images;
SELECT * FROM Cars;
SELECT * FROM Users;