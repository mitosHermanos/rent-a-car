insert into agentski_bekend.privilege_table (id, name) values (1, 'pr1');
insert into role_table (id, name) values(1, 'rola1');

insert into roles_privileges (role_id, privilege_id) values (1, 1);
insert into user_table (id, email, password) values (1, 'mail', 'sifra');

insert into user_roles (user_id, role_id) values (1, 1);