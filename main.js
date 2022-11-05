function mostrar(){
	document.getElementById('formulario').reset();
}
 
function multiplicar(){
	var C = parseFloat(document.getElementById('Capital').value);
	var i = parseFloat(document.getElementById('Interes').value);
	var T = parseFloat(document.getElementById('Tiempo').value);
	document.getElementById('el-resultado').innerHTML = C*i*T;
}