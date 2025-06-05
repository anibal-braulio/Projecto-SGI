create table mensagens(
	idsms int auto_increment,
	conteudo text not null,
	anexo varchar (2048),
	idemissor int not null,
	idreceptor int not null,
	dataEnvio varchar(25) not null,
	dataVisualiz varchar(25),
	tipo enum("audio","texto") not null,
	estado enum("lida","não lida") not null,
	primary key(idnotify),
	foreign key (idreceptor) references usuarios (iduser),
	foreign key (idemissor) references usuarios (iduser)
)