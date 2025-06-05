
CREATE TABLE `usuarios` (
  `iduser` int(11) NOT NULL,
  `nome` varchar(100) not null,
  `nomeUser` varchar(50) DEFAULT NULL unique,
  `genero` enum('M','F') not null,
  `endereco` varchar(255) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL unique,
  `tipo` enum('Estudante','Professor','Professora','Orientador','Orientadora','Administrador','Co-orientador','Co-orientadora','Administradora') not null,
  `nivelAcadem` varchar(80) DEFAULT NULL,
  `dataNasc` varchar(25) NOT NULL,
  `email` varchar(254) NOT NULL unique,
  `url_foto` varchar(2048) DEFAULT NULL,
  `senha` varchar(8) not null,
  `codigoAdesao` varchar(10) not null unique,
  `obs` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
