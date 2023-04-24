DROP DATABASE IF EXISTS gerenciador_enderecos_db;
CREATE DATABASE gerenciador_enderecos_db;
USE gerenciador_enderecos_db;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE addresses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    postal_code VARCHAR(10) NOT NULL,
    street VARCHAR(150) NOT NULL,
    house_number VARCHAR(10) NOT NULL,
    city VARCHAR(150) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name, email) VALUES
	('Marcia', 'marcia@email.com'),
    ('Cecília', 'cecilia@email.com'),
    ('Larissa', 'larissa@email.com');

INSERT INTO addresses (postal_code, street, house_number, city, user_id) VALUES
	('05522000', 'Rua das Margaridas', '123', 'Birigui', 1),
    ('03341100', 'Rua das Orquídeas', '780', 'Diadema', 2),
    ('02521100', 'Rua dos Cravos', '22', 'Guarapari', 3);