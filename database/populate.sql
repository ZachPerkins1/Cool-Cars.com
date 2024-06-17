
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
('Mazda'),
('Tesla'),
('Porsche'),
('Ferrari');

-- Insert dummy data into the Models table
INSERT INTO Models (model, make_id) VALUES
('Corolla', 1), -- Sedan
('Civic', 2), -- Sedan
('Mustang', 3), -- Coupe
('Malibu', 4), -- Sedan
('Altima', 5), -- Sedan
('3 Series', 6), -- Sedan
('A4', 7), -- Sedan
('C-Class', 8), -- Sedan
('Golf', 9), -- Hatchback
('Elantra', 10), -- Sedan
('Sorento', 11), -- SUV
('Outback', 12), -- SUV
('Mazda3', 13), -- Sedan
('Previa', 1), -- Minivan
('Tacoma', 1), -- Pickup Truck
('Odyssey', 2), -- Minivan
('Cybertruck', 14), -- Pickup Truck
('911 Carrera', 15), -- Convertible
('Portofino', 16); -- Convertible

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
('Sedan'), -- 1
('SUV'), -- 2
('Coupe'), --3
('Hatchback'), --4
('Convertible'), --5
('Pickup Truck'), --6
('Minivan'), --7
('Wagon'), --8
('Coupe-SUV'), --9
('Roadster'), --10
('Crossover'), -- 11
('Luxury Sedan'); --12

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
('src/assets/toyota-carolla-2004.png', 1, TRUE),
('src/assets/1995-Honda-Civic.png', 2, TRUE),
('src/assets/2020-Ford-Mustang.png', 3, TRUE),
('src/assets/2019-chevrolet-malibu.png', 4, TRUE),
('src/assets/2017_nissan_altima.png', 5, TRUE),
('src/assets/2021-bmw-330e-sedan.png', 6, TRUE),
('src/assets/audi-a4.png', 7, TRUE),
('src/assets/2021-mercedes-benz-c-class.png', 8, TRUE),
('src/assets/2022-VW-Golf-GTI-2.png', 9, TRUE),
('src/assets/hyundai-elantra.png', 10, TRUE),
('src/assets/sorento_2019.png', 11, TRUE),
('src/assets/2018-Subaru-Outback.png', 12, TRUE),
('src/assets/Mazda3.png', 13, TRUE),
('src/assets/1996-toyota-previa.png', 14, TRUE),
('src/assets/2020-toyota-tacoma.png', 15, TRUE),
('src/assets/2018_honda_odyssey.png', 16, TRUE),
('src/assets/tesla-cybertruck-giga-texas-car-designboom-03.png', 17, TRUE),
('src/assets/porsche-911-carrera.png', 18, TRUE),
('src/assets/ferrari-portofino.png', 19, TRUE);

-- Insert dummy data into the Cars table
INSERT INTO Cars (year, make_id, model_id, color_id, body_id, mileage, fuel_id, promo_id, arrival_date, price, availability, date_sold, image_id) VALUES
( 2004, 1, 1, 1, 1, 15000, 1, 1, '2024-01-15', 20000, TRUE, NULL, 1), -- Toyota Corolla Sedan
( 1995, 2, 2, 2, 1, 10000, 1, 1, '2024-02-20', 22000, TRUE, NULL, 2), -- Honda Civic Sedan
( 2020, 3, 3, 3, 3, 20000, 1, 2, '2024-03-25', 30000, TRUE, NULL, 3), -- Ford Mustang Coupe
( 2019, 4, 4, 4, 1, 25000, 1, 3, '2024-04-15', 18000, TRUE, NULL, 4), -- Chevrolet Malibu Sedan
( 2018, 5, 5, 5, 1, 30000, 1, 4, '2024-05-20', 17000, TRUE, NULL, 5), -- Nissan Altima Sedan
( 2021, 6, 6, 6, 1, 10000, 1, 5, '2024-06-25', 35000, TRUE, NULL, 6), -- BMW 3 Series Sedan
( 2020, 7, 7, 7, 1, 15000, 1, 6, '2024-07-30', 33000, TRUE, NULL, 7), -- Audi A4 Sedan
( 2021, 8, 8, 8, 1, 15000, 1, 1, '2024-08-15', 40000, TRUE, NULL, 8), -- Mercedes-Benz C-Class Sedan
( 2022, 9, 9, 4, 2, 10000, 1, 1, '2024-09-20', 25000, TRUE, NULL, 9), -- Volkswagen Golf Hatchback
( 2020, 10, 10, 3, 1, 20000, 1, 2, '2024-10-25', 20000, TRUE, NULL, 10), -- Hyundai Elantra Sedan
( 2019, 11, 11, 4, 2, 25000, 1, 3, '2024-11-15', 30000, TRUE, NULL, 11), -- Kia Sorento SUV
( 2018, 12, 12, 5, 2, 30000, 1, 4, '2024-12-20', 28000, TRUE, NULL, 12), -- Subaru Outback SUV
( 2021, 13, 13, 6, 1, 10000, 1, 5, '2025-01-25', 22000, TRUE, NULL, 13), -- Mazda Mazda3 Sedan
( 1996, 1, 14, 7, 7, 5000, 1, 1, '2025-02-15', 30000, TRUE, NULL, 14), -- Toyota Previa Minivan
( 2020, 1, 15, 8, 6, 10000, 1, 2, '2025-03-20', 35000, TRUE, NULL, 15), -- Toyota Tacoma Pickup Truck
( 2019, 2, 16, 9, 7, 15000, 1, 3, '2025-04-25', 32000, TRUE, NULL, 16), -- Honda Odyssey Minivan
( 2024, 14, 17, 10, 6, 5000, 1, 4, '2025-05-30', 70000, TRUE, NULL, 17), -- Tesla Cybertruck Pickup Truck
( 2022, 15, 18, 11, 5, 5000, 1, 1, '2025-06-15', 120000, TRUE, NULL, 18), -- Porsche 911 Carrera Convertible
( 2022, 16, 19, 12, 5, 5000, 1, 1, '2025-07-20', 220000, TRUE, NULL, 19); -- Ferrari Portofino Convertible

-- INSERT INTO Cars (year, make_id, model_id, color_id, body_id, mileage, fuel_id, promo_id, arrival_date, price, availability, date_sold, image_id) VALUES
-- ( 2021, 1, 1, 1, 1, 15000, 1, 1, '2024-01-15', 20000, TRUE, NULL, 1),
-- ( 2022, 2, 2, 2, 1, 10000, 1, 1, '2024-02-20', 22000, TRUE, NULL, 2),
-- ( 2020, 3, 3, 3, 3, 20000, 1, 2, '2024-03-25', 30000, TRUE, NULL, 3),
-- ( 2019, 4, 4, 4, 1, 25000, 1, 3, '2024-04-15', 18000, TRUE, NULL, 4),
-- ( 2018, 5, 5, 5, 2, 30000, 1, 4, '2024-05-20', 17000, TRUE, NULL, 5),
-- ( 2021, 6, 6, 6, 3, 10000, 1, 5, '2024-06-25', 35000, TRUE, NULL, 6),
-- ( 2020, 7, 7, 7, 3, 15000, 1, 6, '2024-07-30', 33000, TRUE, NULL, 7),
-- ( 2021, 8, 8, 8, 1, 12000, 1, 7, '2024-08-10', 40000, TRUE, NULL, 8),
-- ( 2019, 9, 9, 9, 2, 22000, 1, 8, '2024-09-15', 20000, TRUE, NULL, 9),
-- ( 2018, 10, 10, 10, 4, 27000, 1, 9, '2024-10-20', 15000, TRUE, NULL, 10),
-- ( 2017, 11, 11, 11, 5, 35000, 1, 10, '2024-11-25', 25000, TRUE, NULL, 11),
-- ( 2020, 12, 12, 12, 6, 20000, 1, 11, '2024-12-30', 28000, TRUE, NULL, 12),
-- ( 2019, 13, 13, 5, 3, 23000, 1, 12, '2024-01-05', 19000, TRUE, NULL, 13);

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