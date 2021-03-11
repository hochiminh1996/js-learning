// var titulo = document.querySelector(".titulo");

// titulo.textContent="Olá";
// //altera o conteúdo obtido da class .titulo

var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i<pacientes.length;i++){
	var paciente = pacientes[i];


	var altura = paciente.querySelector(".info-altura").textContent;
	var peso = paciente.querySelector(".info-peso").textContent;

	var campo_imc = paciente.querySelector(".info-imc");
	//campo importante para capturar todos os campos de imc

	if(peso<=0 || peso>500){
		campo_imc.textContent ="PESO INVÁLIDA";
		// campo_imc.style.backgroundColor = "red";
		/*
			SE NÃO USAR O CAMPO_IMC, E FAZER MANUALMENTE (document.selectQuery(".info-imc").textContent)
			NÃO IRÁ FUNCIONAR, VOCÊ PRECISA SELECIONAR TODOS OS CAMPOS CMAMANDO A VARIAVEL CAMPO_IMC
		*/

	}else if(altura<0 || altura>2.5){
		campo_imc.textContent="ALTURA INVÁLIDA";	
		// campo_imc.style.backgroundColor = "red";
		// paciente.style.backgroundColor = 'red';

	}
	else{
		var imc = peso / (altura * altura);
		// console.log(imc);
		campo_imc.textContent = imc.toFixed(2);

		if(imc<25){
			// campo_imc.style.backgroundColor = 'green';

			}else{
			// campo_imc.style.backgroundColor = 'red';
		}
		/*
			com o campo capturado, basta aplicar o textcontent e igualar ao imc
		*/
	}

}

var btn = document.querySelector("#inserir");
console.log(btn);

btn.addEventListener("click",function(){

	var formu = document.querySelector("form");//acessando o conteudo do formulario
	
	//CAMPOS ABAIXO : INPUTS DO FORMULÁRIO QUE O PACIENTE IRÁ PREENCHER
	var nome = formu.nome.value;
	var peso = formu.peso.value;
	var alt = formu.altura.value;
	var gord = formu.gordura.value;

	/*
		É POSSÍVEL ACESSAR O NAME DOS CAMPOS. BASTA ACESSAR O FORMULÁRIO (FORMU)
		E CHAMAR PELO NAME DO INPUT (NOME,PESO...)
	*/
	if(nome=="" || peso=="" || alt=="" || gord==""){
		alert("Preencha todos os campos");
	}else{
		if(alt>=100){
			alt = alt / 100;
		}	
		if(alt>=2.5){
			alert("Preencha a altura corretamente");
			document.getElementById("altura").focus();

		}else if(peso>=500){
			alert("Preencha o peso corretamente");
			document.getElementById("peso").focus();

		}else{
			var imc_td = peso/(alt*alt);


			var pac_tr = document.createElement("tr");//cria a TR do novo campo que será inserido
			
			var nome_td = document.createElement("td");//CRIA OS ELMENTOS DO TABELA(TD)
			var peso_td = document.createElement("td");//
			var alt_td = document.createElement("td");
			var gord_td = document.createElement("td");
			var imc = document.createElement("td");


			pac_tr.appendChild(nome_td);//os campos criados serão filhos do nosso tr
			pac_tr.appendChild(peso_td);//
			pac_tr.appendChild(alt_td);
			pac_tr.appendChild(gord_td);
			pac_tr.appendChild(imc);

			nome_td.textContent = nome;//ATRIBUI O VALOR DIGITADO NO INPUT AO NOVO CAMPO CRIADO (TD)
			peso_td.textContent = peso;//ATRIBUI O VALOR DIGITADO NO INPUT AO NOVO CAMPO CRIADO (TD)
			alt_td.textContent = alt;//ATRIBUI O VALOR DIGITADO NO INPUT AO NOVO CAMPO CRIADO (TD)
			gord_td.textContent = gord;//ATRIBUI O VALOR DIGITADO NO INPUT AO NOVO CAMPO CRIADO (TD)
			imc.textContent = imc_td.toFixed(2);
			// nome_td.textContent = nome;


			var tabela = document.querySelector("#tabela-pacientes");//ACESSANDO A TABELA PRINCIPAL

			tabela.appendChild(pac_tr);
			/*
				AQUI INFORMAMOS O NOVO PACIENTE (TR/TD) É FILHO DA NOSSA TABELA PRINCIPAL
				OU SEJA, TODOS PACIENTES (TR/TD) SERÃO INSERIDOS NA TABELA PRINCIPAL

				CASA CLIENTE É UM TR + TD 
			*/
			console.log(tabela);
		}
	}

});
// });
