create DATABASE loja_doces;

use loja_doces;

create table categoria (
 id_categoria int primary key AUTO_INCREMENT,
 nome_categoria VARCHAR(15) not null
);

insert into categoria (nome_categoria) VALUES
("bolos"), ("tortas"), ("doces finos"), ("doces tradicionais");
 
select * from categoria;

create table doces (
	id_doce int primary key AUTO_INCREMENT,
    nome_doce VARCHAR(30) not null,
    id_categoria INT not null,
    FOREIGN KEY (id_categoria) references categoria(id_categoria)
);

insert INTO doces (id_categoria,nome_doce) values
(1,"Red velvet"),
(1,"Bolo de laranja"),
(2,"Torta de frango");

SELECT * from doces;

