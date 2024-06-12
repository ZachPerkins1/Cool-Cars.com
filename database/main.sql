CREATE TABLE Images(
    "id" SERIAL PRIMARY KEY,
    "image_link" TEXT NOT NULL,
    "car_id" BIGINT NOT NULL,
    "default_image" BOOLEAN NOT NULL
);
CREATE TABLE Bodies(
    "id" SERIAL PRIMARY KEY,
    "body_style" TEXT NOT NULL
);
CREATE TABLE Users(
    "id" SERIAL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "role" TEXT NOT NULL
);
CREATE TABLE FuelType(
    "id" SERIAL PRIMARY KEY,
    "fuel_type" TEXT NOT NULL
);
CREATE TABLE Cars(
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "year" INT NOT NULL,
    "make_id" BIGINT NOT NULL,
    "model_id" BIGINT NOT NULL,
    "color_id" BIGINT NOT NULL,
    "body_id" BIGINT NOT NULL,
    "mileage" BIGINT NOT NULL,
    "fuel_id" BIGINT NOT NULL,
    "promo_id" BIGINT NOT NULL,
    "arrival_date" DATE NOT NULL,
    "price" BIGINT NOT NULL,
    "availability" BOOLEAN NOT NULL,
    "date_sold" DATE NULL,
    "image_id" BIGINT NULL
);
CREATE TABLE Makes(
    "id" SERIAL PRIMARY KEY,
    "make" TEXT NOT NULL
);
CREATE TABLE Colors(
    "id" SERIAL PRIMARY KEY,
    "color" TEXT NOT NULL
);
CREATE TABLE Promotions(
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "start_date" DATE NULL,
    "end_date" DATE NULL
);
CREATE TABLE Models(
    "id" SERIAL PRIMARY KEY,
    "model" TEXT NOT NULL
);
CREATE TABLE Reviews(
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" SMALLINT NOT NULL,
    "avatar" TEXT NULL,
    "date" DATE NOT NULL DEFAULT (CURRENT_DATE)
);

CREATE TABLE UserFavorites(
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    "car_id" INTEGER NOT NULL
);
ALTER TABLE Cars
ADD COLUMN review_id INTEGER;

ALTER TABLE Cars ADD CONSTRAINT cars_color_id_foreign FOREIGN KEY(color_id) REFERENCES Colors(id);
ALTER TABLE Cars ADD CONSTRAINT cars_make_id_foreign FOREIGN KEY(make_id) REFERENCES Makes(id);
ALTER TABLE Cars ADD CONSTRAINT cars_body_id_foreign FOREIGN KEY(body_id) REFERENCES Bodies(id);
ALTER TABLE Cars ADD CONSTRAINT cars_promo_id_foreign FOREIGN KEY(promo_id) REFERENCES Promotions(id);
ALTER TABLE Cars ADD CONSTRAINT cars_fuel_id_foreign FOREIGN KEY(fuel_id) REFERENCES FuelType(id);
ALTER TABLE Cars ADD CONSTRAINT cars_model_id_foreign FOREIGN KEY(model_id) REFERENCES Models(id);
ALTER TABLE Cars ADD CONSTRAINT cars_image_id_foreign FOREIGN KEY(image_id) REFERENCES Images(id);
ALTER TABLE Cars ADD CONSTRAINT cars_review_id_foreign FOREIGN KEY(review_id) REFERENCES Reviews(id);

ALTER TABLE UserFavorites ADD CONSTRAINT user_favorites_user_id_foreign FOREIGN KEY(user_id) REFERENCES Users(id);
ALTER TABLE UserFavorites ADD CONSTRAINT user_favorites_car_id_foreign FOREIGN KEY(car_id) REFERENCES Cars(id);

