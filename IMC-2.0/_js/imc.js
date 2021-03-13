//função imc
function calc_imc(altura,peso){
	var imc = peso / (altura*altura);
	return imc.toFixed(2);
}