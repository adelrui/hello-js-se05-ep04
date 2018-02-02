create table contato{
    id integer not null primary key autoincrement,
    nome varchar(255) not null,
    telefone varchar(255) not null,
    datacadastro timestamp not null default current_timestamp
}

insert into contato (nome,telefone) values ('Larissa', 989876321);
insert into contato (nome,telefone) values ('Joana', 9983839829);
insert into contato (nome,telefone) values ('Mariazinha', 9983712654);
insert into contato (nome,telefone) values ('Carolina', 9109238743);