create table projeto(
	idprojecto int AUTO_INCREMENT,
    tiulo varchar(100) not null,
    iduser int, 
    descricao text not null,
    tipo enum("TCC","TFC","Documento Parcial"),
    dataCriacao varchar(25) not null,
    dataEntrega varchar(25),
    dataConclusao varchar(25),
    url_projeto varchar(2048),
    num_arquivos int default 0,
    primary key (idpro),
    foreign key (iduser) references usuarios (iduser)
)