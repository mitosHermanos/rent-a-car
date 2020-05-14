CREATE TABLE users (
	id INTEGER, 
    email VARCHAR(50) NOT NULL, 
    password VARCHAR(50) NOT NULL, 
    login_ban DATE,
    rent_ban DATE, 
    role VARCHAR(15),
    
    CONSTRAINT pk_user PRIMARY KEY (id), 
    CONSTRAINT chk_userRole CHECK (role IN ('renter', 'admin')), 
    CONSTRAINT uniq_email UNIQUE (email)
);

CREATE TABLE companies (
	id INTEGER, 
    email VARCHAR (50) NOT NULL, 
    password VARCHAR (50) NOT NULL, 
    name VARCHAR(50), 
    address VARCHAR(50), 
    buisness_number VARCHAR(15), 
    
    CONSTRAINT pk_company PRIMARY KEY (id)
);

CREATE TABLE car_models (
	id INTEGER, 
    name VARCHAR(50),
    
    CONSTRAINT pk_carModels PRIMARY KEY (id)
);

CREATE TABLE car_class (
	id INTEGER, 
    name VARCHAR(50), 
    
    CONSTRAINT pk_carClass PRIMARY KEY (id)
);

CREATE TABLE fuel_types (
	id INTEGER, 
    name VARCHAR(50), 
    
    CONSTRAINT pk_fuelType PRIMARY KEY (id)
);

CREATE TABLE pricings (
	id INTEGER, 
    distance_limit DOUBLE, 
    regular_price DOUBLE, 	-- Redovna dnevna cena
    overuse_price DOUBLE, 	-- Cena po prekoracenom km
    collision_damaga_waiver DOUBLE, 
    discount_days INTEGER, 	-- Da bi dobio popust od discount_percent posto, mora da rentira na bar ovoliko dana
    discount_percent DOUBLE, 
    
    CONSTRAINT pk_pricing PRIMARY KEY (id)
);

CREATE TABLE cars (
	id INTEGER, 
    owner INTEGER, 
    company INTEGER, 
    model INTEGER, 
    class INTEGER, 
    fuel_type INTEGER, 
    pricing INTEGER, 
    milage DOUBLE, 
    
    CONSTRAINT pk_car PRIMARY KEY (id),
    CONSTRAINT fk_carUser FOREIGN KEY (owner) REFERENCES users(id), 
    CONSTRAINT fk_carCompany FOREIGN KEY (company) REFERENCES companies(id), 
    CONSTRAINT chk_oneOwner CHECK ((company = null) OR (owner = null)),
    CONSTRAINT fk_carModel FOREIGN KEY (model) REFERENCES car_models(id), 
    CONSTRAINT fk_carClass FOREIGN KEY (class) REFERENCES car_class(id),     
    CONSTRAINT fk_carFuelType FOREIGN KEY (fuel_type) REFERENCES fuel_types(id), 
    CONSTRAINT fk_carPricing FOREIGN KEY (pricing) REFERENCES pricings (id)
);

CREATE TABLE messages (
	id INTEGER, 
    content VARCHAR(150), 
    from_user INTEGER, 
    from_company INTEGER, 
    to_user INTEGER, 
    to_company INTEGER, 
    date TIMESTAMP, 
    
    CONSTRAINT pk_messages PRIMARY KEY (id), 
    CONSTRAINT fk_messagesFromUser FOREIGN KEY (from_user) REFERENCES users (id), 
    CONSTRAINT fk_messagesFromCompany FOREIGN KEY (from_company) REFERENCES companies (id), 
    CONSTRAINT fk_messagesToUser FOREIGN KEY (to_user) REFERENCES users (id), 
    CONSTRAINT fk_messagesToCompany FOREIGN KEY (to_company) REFERENCES companies (id) 
);

CREATE TABLE rent_requests (
	id INTEGER, 
    user INTEGER, 
    car INTEGER, 
    end_time DATETIME, 
    start_time DATETIME, 
    request_status VARCHAR(15), 
    request_group INTEGER, 
    
    CONSTRAINT pk_rentRequests PRIMARY KEY (id), 
    CONSTRAINT fk_rentRequestUser FOREIGN KEY (user) REFERENCES users(id), 
    CONSTRAINT fk_rentRequestCar FOREIGN KEY (car) REFERENCES cars(id)
);

CREATE TABLE car_reviews (
	id INTEGER, 
    user INTEGER, 
    car INTEGER, 
    rating INTEGER, 
    review VARCHAR(150), 
    time DATETIME, 
    
	CONSTRAINT pk_carReview PRIMARY KEY (id), 
    CONSTRAINT fk_carReviewUser FOREIGN KEY (user) REFERENCES users(id), 
    CONSTRAINT fk_carReviewCar FOREIGN KEY (car) REFERENCES cars(id),
	CONSTRAINT chk_ratingValue CHECK ((rating > 1) AND (ratin <= 5))
);

CREATE TABLE car_taken (
	id INTEGER, 
    car INTEGER, 
    renter INTEGER, 
    start_time DATETIME, 
    end_time DATETIME, 
    status VARCHAR(15), 
    
    CONSTRAINT pk_carTaken PRIMARY KEY (id),
    CONSTRAINT fk_carTakenCar FOREIGN KEY (car) REFERENCES cars (id), 
    CONSTRAINT fk_carTakenRenter FOREIGN KEY (renter) REFERENCES users (id), 
    CONSTRAINT chk_carTakenStatus CHECK (status IN ('pending', 'current', 'returned'))
);

CREATE TABLE renting_report (
	id INTEGER, 
    renting_instance INTEGER, 
    report VARCHAR(150), 
    added_mileage DOUBLE, 
    
    CONSTRAINT pk_rentingReport PRIMARY KEY (id), 
    CONSTRAINT fk_rentingReportInstance FOREIGN KEY (renting_instance) REFERENCES car_taken(id)
);

CREATE TABLE gps_position (
	id INTEGER,
    car INTEGER, 
    latitude DOUBLE, 
    longitude DOUBLE, 
    email VARCHAR(50) NOT NULL, 
    password VARCHAR(50) NOT NULL, 
    
    CONSTRAINT pk_gpsPosition PRIMARY KEY (id), 
    CONSTRAINT fk_gpsPositionCar FOREIGN KEY (car) REFERENCES cars(id)
);

CREATE VIEW login_view AS 
	SELECT u.email, u.password, 'USER'
    FROM users u
    UNION 
    SELECT c.email, c.password, 'COMPANY'
    FROM companies c
    UNION 
    SELECT g.email, g.password, 'CAR'
    FROM gps_position g;