create table documento(
	iddoc int auto_increment,
	titulo varchar(100) not null,
	descricao varchar(200) not null,
	conteudo text,
	idprojecto int,
	formato enum("docx","pdf","xlsx","pptx") not null,
	dataCriacao varchar(25) not null,
	dataEntrega varchar(25),
	dataAtualiz varchar(25),
	senha varchar(8),
	url_doc varchar(2048),
	tamanho varchar(8),
	progesso enum("concluido","em anadamento","quase ao termino","no começo"),
	nivelAcesso enum("privado","publico","especial"),
	categoria enum("Modelo","Documento"),
	primary key (iddoc),
	foreign key (idprojecto) references projectos (idprojecto)
);