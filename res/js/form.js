$(function(){
	var ctn_cadastro = document.querySelector(".ctn-cadastro");
	var ctn_login = document.querySelector(".ctn-login");
	const modalTipoUser = document.querySelector(".modal-inq");
	var modal = document.querySelector('.modal-erro');
	const campoErro = document.querySelector('.modal-erro #erro');
	const regexText = /^[A-Za-zÀ-ÿ\s]{3,}$/;
	const regexTextS = /^[A-Za-z0-9\s]+$/;
	const regexEscola = /^[\w]$/;
	const regexTelefone =/^[0-9]{9}$/;
	const regexEmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
	const regexSenha = /^[^\s]+$/;
	var tipoUser;

	//modal.style.display = "block";
	document.querySelector(".close").addEventListener("click", function() {
    	modal.style.display = "none";
	});
	$(".modal-erro button").click(function(e){
		modal.style.display = "none";
	});
	$(".call-cadastro").click(function(){
		$(".form-login").fadeOut(1000);
		document.querySelector("footer").remove();
		modalTipoUser.style.display = "block";
	});
	$(".modal-ctt-inq button").click(function(){
		if(document.querySelector("input[name='tipoUser']:checked")){
			tipoUser = document.querySelector("input[name='tipoUser']:checked").value;
			if(tipoUser == "estudante"){
				ctn_login.remove();
				ctn_cadastro.classList.remove("oculto");
				console.log(tipoUser);
			}else{
				ctn_login.remove();
				ctn_cadastro.classList.remove("oculto");
				document.querySelector(".ctn-cadastro .tipo").remove();
				console.log(tipoUser);
			}
			modalTipoUser.style.display = "none";
		}
	});

	$(".btnNext").click(function(event){
		event.preventDefault();
		if(!regexText.test(nome.value)){
			campoErro.textContent = "informe um nome valido com inicial maiuscula";
			modal.style.display = "block";
			nome.classList.add(".erro-campo");
			return;
		}
		if(endereco.value === "" || endereco.value.length < 3){
			campoErro.textContent = "informe um endereco valido";
			modal.style.display = "block";
			enedereco.classList.add("erro-campo");
			return;
		}
		if(!regexTelefone.test(telefone.value)){
			campoErro.textContent = "informe um numero de telefone valido";
			modal.style.display = "block";
			telefone.classList.add(".erro-campo");
			return;
		}
		if(dia.value == "dia" || mes.value == "mês" || ano.value == "ano"){
			campoErro.textContent = "informe uma data valida";
			modal.style.display = "block";
			return;
		}
		if(!document.querySelector("input[name='genero']:checked")){
			campoErro.textContent  = "informe se é um homem ou mulher";
			modal.style.display = "block";
			document.querySelector(".genero").style.background = "red";
			return;
		}
		if(faculdade.value === "Instituição"){
			document.querySelector(".genero").style.background = "transparent";
			campoErro.textContent  = "informe uma Instituição";
			modal.style.display = "block";
			faculdade.classList.add(".erro-campo");
			return;
		}
		if(!regexText.test(escolaridade.value)){
			campoErro.textContent = "informe uma escolaridade valida";
			modal.style.display = "block";
			escolaridade.classList.add(".erro-campo");
			return;
		}
		/*if(mes.value === "mês"){
			campoErro.textContent = "informe um mes valido";
			modal.style.display = "block";m
			return;
		}	fhfhjfkjfkjvcv
		if(ano.value === "ano"){
			campoErro.textContent = "informe um ano valido";
			modal.style.display = "block";
			return;
		}*/
		document.querySelector(".box-cadastro-um").classList.add("oculto");
		document.querySelector(".box-user").classList.remove("oculto");
	});

	document.querySelector(".form-cadastro").addEventListener('submit',function(event){
		event.preventDefault();
		if(nomeUser.value === "" || nomeUser.length < 3){
			campoErro.textContent  = "informe um nome e usuario valido 'anibal69'";
			modal.style.display = "block";
			nomeUser.classList.add(".erro-campo");
			return;
		}
		if(!regexSenha.test(senhaUser.value)){
			campoErro.textContent = "informe uma senha valida 'senha1234'";
			modal.style.display = "block";
			senhaUsere.classList.add(".erro-campo");
		}
		if(!regexEmail.test(emailUser.value)){
			campoErro.textContent  = "informe um nome e email valido";
			modal.style.display = "block";
			emailUser.classList.add(".erro-campo");
			return;
		}
		if(obs.value == "" || obs.value.length < 3){
			campoErro.textContent  = "informe uma observação valida";
			modal.style.display = "block";
			obs.classList.add(".erro-campo");
			return;
		}
		console.log("tipo de usuario: "+tipoUser);
		console.log("nome: "+nome.value);
		console.log("endereco: "+endereco.value);
		console.log("telefone: "+telefone.value);
		console.log("data: "+dia.value+" / "+mes.value+" / "+ano.value);
		console.log("genero: "+document.querySelector("input[name='genero']:checked").value);
		console.log("faculdade: "+faculdade.value);
		console.log("escolaridade: "+escolaridade.value);
		console.log("nome de usuario: "+nomeUser.value);
		console.log("senha de usuario: "+senhaUser.value);
		console.log("email: "+emailUser.value);
		console.log("obs: "+obs.value);
		alert("Usuario cadastrado com sucesso");
		console.log("usuario cadastrado com sucesso");
	});

	formLogin.addEventListener("submit",function(e){
		e.preventDefault();
		if(emailLogin.value === "" || !regexEmail.test(emailLogin.value)){
			campoErro.textContent = "informe um email valido 'exemple@gmail.com'";
			modal.style.display = "block";
			emailLogin.classList.add('erro-campo');
			return;
		}else{
			emailLogin.classList.remove('erro-campo');
		}

		if((!regexSenha.test(senhaLogin.value)) || senhaLogin.value === ""){
			campoErro.textContent = "informe uma senha valida: senha1234";
			modal.style.display = "block";
			senhaLogin.classList.add('erro-campo');
			return;
		}else{
			senhaLogin.classList.remove('erro-campo');
		}
		console.log("agora assim envia");
	});


	
});