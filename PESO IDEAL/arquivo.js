

function calc(){
	var nome = document.getElementById("nome").value;

	var sexo =  getRadioValor();

	var alt = document.getElementById("alt").value;

	var saude=0;

	
	if((sexo==null) || (nome=="") || (alt=="")){
		document.getElementById("resultado").innerHTML = "<p style='color:red;'>CAMPOS NÃO PREENCHIDOS</p>";
	}else{
		if(alt>100){
			alt = alt / 100;
		}


		if(sexo=="masc"){
			saude = 22 * (alt*alt);
			document.getElementById("resultado").innerHTML = "<p style='color:green;'>PESO IDEAL : "+saude+"</p>";


		}else{
			saude = 21 * (alt*alt);
			document.getElementById("resultado").innerHTML = "<p style='color:green;'>PESO IDEAL : "+saude+"</p>";

		}
	}
}


//funcão capturar radio 
function getRadioValor(){
	var rads = document.getElementsByName("sexo");
	  
	for(var i = 0; i < rads.length; i++){
		if(rads[i].checked){
	    	return rads[i].value;
	   	}
	  
	 }
	return null;
}

function limpar(){
	document.getElementById("nome").value ="";
	document.getElementById("alt").value ="";
	document.getElementById("resultado").innerHTML ="";
	document.getElementById("nome").focus();
}

