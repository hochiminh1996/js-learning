// FELIPPE MARQUES DA SILVA DE ALMEIDA
var i=1;//será nosso indice para o número de pacientes

var btn = document.querySelector("#btn");
//acessando o botão

btn.addEventListener("click",function(){//criando um evento quando o btn for clicado

	var formulario = document.querySelector("#formu"); // acessando o formulário principal
	/*NÃO ESQUECER DE SULAR O SELECTOR # OU . DENTRO DO ("")*/

	var nome = formulario.nome.value;//acessando 
	var altura = formulario.altura.value;//possivel acesssar a partir do name dos inputs
	var peso = formulario.peso.value;//possivel acesssar a partir do name dos inputs
	var msg = document.querySelector("#msg");//acessnado o campo mensagem

	// console.log(nome);
	// console.log(altura);
	// console.log(peso);
	if(nome==""){
		// alert("OLÁ");
		msg.textContent = "Nome : inválido";
		msg.classList.add("invalido");

		formulario.nome.focus();
	}else if(altura==""){
		msg.textContent = "Altura : inválida";
		msg.classList.add("invalido");

		formulario.altura.focus();
	}else if(peso==""){
		msg.textContent = "Peso : inválido";
		msg.classList.add("invalido");

		formulario.peso.focus();
	}else{

		if(altura>99){
			altura = altura / 100;
		}

		if(altura >=2.5){
			msg.textContent = "Altura : <2.5";
			formulario.altura.focus();
		}else if(peso<=0 || peso>=500){
			msg.textContent = "PESO : >0 E <500";
			formulario.peso.focus();
		}else {
			var imc = calc_imc(altura,peso);
			


			var tabela = document.querySelector("#tabela");//TABELA DE INSERÇÃO 

			// console.log(tabela.value);

			
			var tabela_paciete = document.createElement("tr");//criação de td 

			var tdindice = document.createElement("td");//td de nome
			var tdnome = document.createElement("td");//td de nome
			var tdaltura = document.createElement("td");//td de altura
			var tdpeso = document.createElement("td");////td de peso
			var td_imc = document.createElement("td");//td do imc

			tdindice.classList.add("bordas");//criamos uma classe
			tdnome.classList.add("bordas");//criamos uma classe
			tdaltura.classList.add("bordas");//criamos uma classe
			tdpeso.classList.add("bordas");//criamos uma classe
			td_imc.classList.add("bordas");//criamos uma classe

			/*
				ABAIXO IREMOS ADICIONAR CLASSES ESPECÍFICAS DE ACORDO COM O VALOR DO IMC.
			*/
			if(imc<=18.5){
				td_imc.classList.add("nivel_1");
			}else if(imc>18.5 && imc<=24.9){
				td_imc.classList.add("nivel_2");
			}else if(imc>24.9 && imc<=29.9){
				td_imc.classList.add("nivel_3");
			}else if(imc>29.9 && imc<=34.9){
				td_imc.classList.add("nivel_4");
			}else if(imc>34.9 && imc<=39.9){
				td_imc.classList.add("nivel_5");
			}else if(imc>39.9){
				td_imc.classList.add("nivel_6");
			}

			tabela_paciete.appendChild(tdindice);//CRIADO NOSSA TD DE INDICE
			tabela_paciete.appendChild(tdnome);//td (tdnome) é filho de tabela_paciete
			tabela_paciete.appendChild(tdpeso);//td (tdpeso) é filho de tabela_paciete	
			tabela_paciete.appendChild(tdaltura);//td (tdaltura) é filho de tabela_paciete
			tabela_paciete.appendChild(td_imc);//td (tdpeso) é filho de tabela_paciete

			tdindice.textContent = i++;//INDICE INCREMENTADO
			tdnome.textContent = nome;//atribuir os valores do inputs a nova td criada
			tdpeso.textContent = peso;//atribuir os valores do inputs a nova td criada
 			tdaltura.textContent = altura;//atribuir os valores do inputs a nova td criada
			td_imc.textContent	 = calc_imc(altura,peso);//atribuir os valores do inputs a nova td criada

			tabela.appendChild(tabela_paciete);

			limpar(formulario);//passando o formulário com os inputs

			console.log(tabela);


		}
	}

});

function limpar(formulario){
	//acessamentos o formulario e zeremos a partir do name obtido pelo querySelector
	formulario.nome.value="";
	formulario.altura.value="";
	formulario.peso.value="";
	// formulario.msg.value="";
	document.getElementById("msg").innerHTML="";
}

// //função imc
// function calc_imc(altura,peso){
// 	var imc = peso / (altura*altura);
// 	return imc.toFixed(2);
// }