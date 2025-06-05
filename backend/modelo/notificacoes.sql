create table notificacoes(
	idnotify int auto_increment,
	descricao text,
	categoria enum("Mensagem","Alerta","Pedidos"),
	idemissor int,
	idreceptor int,
	dataEnviada varchar(25),
	dataVisualiz varchar(25),
	estado enum("lida","não lida"),
	primary key(idnotify),
	foreign key (idreceptor) references usuarios (iduser),
	foreign key (idemissor) references usuarios (iduser)
)