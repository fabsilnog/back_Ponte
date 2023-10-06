CREATE DATABASE DB_Ponte;

----------------------------------------------------

CREATE TABLE usuario(  
    Alunoid int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50),
    nome VARCHAR(255),
    instituicao VARCHAR(100),
    polo VARCHAR(50),
    curso VARCHAR(50),
    ano_de_ingresso INT(4),
    calouro_ou_veterano CHAR(1),
    bio VARCHAR(255),
    link_foto_perfil VARCHAR(255)
);

-----------------------------------------------------




