create table anexos(
	idanexo int auto_increment,
	mensagem int, constraint foreign key (mensagem) references mensagens(idsms),
	etiqueta varchar(100),
	formato enum("jpeg","png","jpg","pdf","docx","xlsx","pptx","mp4","mp3","zip","rar")
	url_anexo varchar(2048)
)