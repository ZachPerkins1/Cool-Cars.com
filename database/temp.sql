CREATE TABLE Reviews(
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" SMALLINT NOT NULL,
    "avatar" TEXT NULL,
    "date" DATE NOT NULL
);

INSERT INTO Reviews (name, review, rating, avatar) VALUES
('Brad Pitt', 'Excellent service and a great selection of cars. Highly recommend!', 5, './images/brad.jpeg'),
('Margot Robbie', 'The staff was very friendly and helped me find the perfect car.', 4.5, './images/margot.jpeg'),
('Matthew Mcconaughey', 'Good experience overall, but the process took longer than expected.', 4, './images/matthew.jpeg'),
('Leonardo Decaprio', 'Great prices and fantastic customer service. Will come back again!', 5, './images/leo.webp'),
('Scarlet Johanson', 'Great selection of cars, quick and easy process!.', 5, './images/scarlet.jpeg');

