CREATE TABLE "Images"(
    "id" BIGINT NOT NULL,
    "image_link" TEXT NOT NULL,
    "car_id" BIGINT NOT NULL,
    "default" BOOLEAN NOT NULL
);
ALTER TABLE
    "Images" ADD PRIMARY KEY("id");
CREATE TABLE "Bodies"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL
);
ALTER TABLE
    "Bodies" ADD PRIMARY KEY("id");
CREATE TABLE "Users"(
    "id" BIGINT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "role" TEXT NOT NULL
);
ALTER TABLE
    "Users" ADD PRIMARY KEY("id");
CREATE TABLE "FuelType"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL
);
ALTER TABLE
    "FuelType" ADD PRIMARY KEY("id");
CREATE TABLE "Cars"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
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
ALTER TABLE
    "Cars" ADD PRIMARY KEY("id");
CREATE TABLE "Makes"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL
);
ALTER TABLE
    "Makes" ADD PRIMARY KEY("id");
CREATE TABLE "Colors"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL
);
ALTER TABLE
    "Colors" ADD PRIMARY KEY("id");
CREATE TABLE "Promotions"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" DATE NULL,
    "end_date" DATE NULL
);
ALTER TABLE
    "Promotions" ADD PRIMARY KEY("id");
CREATE TABLE "Models"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL
);
ALTER TABLE
    "Models" ADD PRIMARY KEY("id");
ALTER TABLE
    "Cars" ADD CONSTRAINT "cars_color_id_foreign" FOREIGN KEY("color_id") REFERENCES "Colors"("id");
ALTER TABLE
    "Cars" ADD CONSTRAINT "cars_make_id_foreign" FOREIGN KEY("make_id") REFERENCES "Makes"("id");
ALTER TABLE
    "Cars" ADD CONSTRAINT "cars_body_id_foreign" FOREIGN KEY("body_id") REFERENCES "Bodies"("id");
ALTER TABLE
    "Cars" ADD CONSTRAINT "cars_promo_id_foreign" FOREIGN KEY("promo_id") REFERENCES "Promotions"("id");
ALTER TABLE
    "Cars" ADD CONSTRAINT "cars_fuel_id_foreign" FOREIGN KEY("fuel_id") REFERENCES "FuelType"("id");
ALTER TABLE
    "Cars" ADD CONSTRAINT "cars_model_id_foreign" FOREIGN KEY("model_id") REFERENCES "Models"("id");
ALTER TABLE
    "Cars" ADD CONSTRAINT "cars_image_id_foreign" FOREIGN KEY("image_id") REFERENCES "Images"("id");