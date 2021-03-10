

function Calcular(){
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;;
	var imc=0;
	var resultado = document.querySelector("resultado");
	var saude  = document.querySelector("saude");
	

	if(peso == "" || altura ==""){
		// alert("Campos incompletos");
  	
		if(peso ==""){
			document.getElementById("peso").focus();
			document.getElementById("peso").style.border = "1px solid red";
		}else{
			document.getElementById("altura").focus();
			document.getElementById("altura").style.border = "1px solid red";
		}
	}else{
		document.getElementById("peso").style.border = "";
		document.getElementById("altura").style.border = "";
	
		if(altura>=100){
			altura = altura / 100;
			imc = peso / (altura * altura);
		}else if(altura<100){
			imc = peso / (altura * altura);
		}
		console.log(imc);
		document.getElementById("resultado").value = imc.toFixed(2);
		document.getElementById("resultado").style.backgroundColor = "#4ee44e";
		if(imc<18){
			document.getElementById("saude").value = "Magrão";
		}else
		if(imc>=18 && imc<=25){
			document.getElementById("saude").value = "Saudável";
		}else{
			document.getElementById("saude").value = "Gordaço";
		}
		// document.getElementById("resultado").style.backgroundColor = "black";
	}
}
function Limpar(){
	peso.value = "";
	altura.value ="";
	resultado.value ="";
	saude.value = "";
	document.getElementById("resultado").style.backgroundColor = "";

	peso.focus();
}