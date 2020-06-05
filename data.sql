
insert into privilege_table (id, name) values (1, 'pr1');
insert into role_table (id, name) values(4, 'agent');
insert into role_table (id, name) values(3, 'user');
insert into role_table (id, name) values(1, 'admin');
insert into role_table (id, name) values(2, 'secure_admin');


insert into roles_privileges (role_id, privilege_id) values (1, 1);
insert into user_table (user_id, email, firstname, lastname, password) values (1, 'mail@gmail.com', 'name', 'surname', 'sifra');
insert into user_table (user_id, email, firstname, lastname, password) values (6, 'mail@yahoo.com', 'fristname', 'lastname', 'password');

--

--

insert into user_roles (user_id, role_id) values (1, 1);

commit;

insert into fuel_type_table (id, deleted, name) values (1, 0, 'electric');
insert into fuel_type_table (id, deleted, name) values (2, 0, 'diesel');


insert into car_class_table (car_class_id, deleted, name) values (1, 0, 'van');
insert into car_class_table (car_class_id, deleted, name) values (2, 0, 'family car');
insert into car_class_table (car_class_id, deleted, name) values (3, 0, 'racing car');


insert into manufacturer_table (manufacturer_id, deleted, name) values (1, 0, 'Merzedes-Benz');
insert into manufacturer_table (manufacturer_id, deleted, name) values (2, 0, 'Opel');
insert into manufacturer_table (manufacturer_id, deleted, name) values (3, 0, 'Yugo');


insert into transmission_type_table (transmission_type_id, deleted, name) values (1, 0, 'manual');
insert into transmission_type_table (transmission_type_id, deleted, name) values (2, 0, 'automatic');


insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (1, 0, 'Sprinter Cargo Van', 1, 1, 1);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (2, 0, 'Sprinter Passenger Van', 1, 1, 1);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (3, 0, 'Sprinter Crew Van', 1, 1, 1);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (4, 0, 'A-Class', 2, 1, 2);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (5, 0, 'C-Class', 2, 1, 1);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (6, 0, 'E-Class Coupe', 2, 1, 2);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (7, 0, 'EQ Silver', 3, 1, 1);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (8, 0, 'Silver Arrow 01', 3, 1, 2);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (9, 0, '220-A', 3, 1, 2);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (10, 0, 'Sienna Minivan', 1, 2, 2);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (11, 0, 'GR Supra', 3, 2, 1);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (12, 0, 'Yaris', 2, 2, 1);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (13, 0, 'Corolla', 2, 2, 1);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (14, 0, 'Prius', 2, 2, 2);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (15, 0, 'Zastava', 2, 3, 1);
insert into car_models_table (car_models_id, deleted, car_models_name, car_class_id, manufacturer_id, transmission_type_id) values (16, 0, 'Koral', 2, 3, 2);
-- Prikaz podataka o modelu kola:
-- select cmt.car_models_id, cmt.deleted, car_models_name, cct.name, mt.name, ttt.name
-- from car_models_table cmt inner join car_class_table cct 
-- on cmt.car_class_id = cct.car_class_id
-- inner join manufacturer_table mt on mt.manufacturer_id = cmt.manufacturer_id
-- inner join transmission_type_table ttt on ttt.transmission_type_id = cmt.transmission_type_id;


insert into pricing_table (pricing_id, collision_damage, deleted, discount_days, discount_percent, pricing_limit, pricing_name, overuse_price, regular_price, company_id, user_id)
	values (1, 300, 0, 100, 5, 1500, 'p1', 30, 12, null, 1);
insert into pricing_table (pricing_id, collision_damage, deleted, discount_days, discount_percent, pricing_limit, pricing_name, overuse_price, regular_price, company_id, user_id)
	values (2, 100, 0, 80, 15, 2000, 'p2', 80, 10, null, 1);
insert into pricing_table (pricing_id, collision_damage, deleted, discount_days, discount_percent, pricing_limit, pricing_name, overuse_price, regular_price, company_id, user_id)
	values (3, 300, 0, 100, 5, 1500, 'p1', 30, 12, null, 6);


select * from cars_table;
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (1, 0, 0, 1500, 'van 1', null, 1, 1, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (2, 0, 0, 1650, 'van 2', null, 2, 1, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (3, 0, 0, 15000, 'van 3', null, 1, 1, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (4, 0, 0, 1990, 'van 4', null, 2, 2, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (5, 0, 0, 1310, 'van 5', null, 1, 3, 6, 3, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (6, 0, 0, 1230, 'AClass Gray', null, 2, 4, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (7, 0, 0, 1230, 'AClass White', null, 1, 4, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (8, 0, 0, 1230, 'AClass Blue', null, 2, 4, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (9, 0, 0, 37546, 'BClass Gray', null, 1, 5, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (10, 0, 0, 4365, 'BClass White', null, 2, 5, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (11, 0, 0, 4364, 'BClass Blue', null, 1, 5, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (12, 0, 0, 254665, 'EClass Gray', null, 2, 6, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (13, 0, 0, 56876, 'EClass White', null, 2, 6, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (14, 0, 0, 6424, 'EClass Blue', null, 1, 6, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (15, 0, 0, 8246, 'Silver Surfer', null, 1, 7, 1, 2, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (16, 0, 0, 33341, 'Smooth Silver', null, 2, 7, 1, 2, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (17, 0, 0, 312341, 'Robin Hood', null, 1, 8, 1, 2, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (18, 0, 0, 341, 'Archer', null, 2, 8, 1, 2, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (19, 0, 0, 342, 'Eat my Dust', null, 2, 9, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (20, 0, 0, 331, 'Highlander', null, 1, 9, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (21, 0, 0, 73441, 'Mudslide', null, 2, 9, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (22, 0, 0, 734, 'Blue van', null, 2, 10, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (23, 0, 0, 441, 'Red van', null, 2, 10, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (24, 0, 0, 441, 'Black (goverment) van', null, 1, 10, 1, 1);
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (25, 0, 0, 286, 'White van', null, 2, 10, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (26, 0, 0, 2232, 'Nobunaga', null, 1, 11, 1, 2, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (27, 0, 0, 73441, 'Kenshin', null, 2, 11, 1, 2, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (28, 0, 0, 9283, 'Red Yaris', null, 1, 12, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (29, 0, 0, 23450, 'Blue Yaris', null, 1, 12, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (30, 0, 0, 23341, 'White Yaris', null, 1, 12, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (31, 0, 0, 73, 'Red Corolla', null, 2, 13, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (32, 0, 0, 2231, 'Blue Corolla', null, 1, 13, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (33, 0, 0, 456, 'Black Corolla', null, 1, 13, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (34, 0, 0, 4512, 'Beige Corolla', null, 2, 13, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (35, 0, 0, 45241, 'Yellow Prius', null, 1, 14, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (36, 0, 0, 4501, 'White Prius', null, 2, 14, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (37, 0, 0, 4500, 'Stojan', null, 2, 15, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (38, 0, 0, 221, 'Stojadin', null, 2, 15, 2, 3, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (39, 0, 0, 451, 'Stojko', null, 1, 15, 1, 1, 'Novi Sad');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (40, 0, 0, 2212, 'Beli Jugo', null, 2, 16, 1, 1, 'Beograd');
insert into cars_table (cars_id, deleted, has_android, cars_milage, name, company_id, fuel_type, car_models_id, user_id, pricing_id, town)
	values (41, 0, 0, 7112, 'Zuti Jugo', null, 1, 16, 1, 1, 'Novi Sad');


commit;
select * from cars_table;
select count(*) from cars_table;
select c.* from cars_table c where c.cars_id = c.cars_id;