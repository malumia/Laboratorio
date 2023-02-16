

function valida() {
  
	var numero_dni = document.getElementById('numerodni');
	var letra_dni = document.getElementById('letradni');
	var letras = ['T', 'R','W', 'A','G', 'M','Y', 'F','P', 'D','X', 'B','N', 'J','Z', 'S','Q', 'V','H', 'L','C', 'K','E'];
	var retorno="";

	if(numero_dni.value=='' || letra_dni.value==''){
		alert("Debe rellenar el número y la letra del DNI");
		limpiar();
	}
	else{
		if (isNaN(numero_dni.value)==true) { 
			alert("Debe introducir un número de DNI") ;
			limpiar();
		  }
		  else
		  { 
			  if (isNaN(letra_dni.value)==true) { 
				if(letra_dni.value.length==1)
				{
					letra_dni=letra_dni.value.toUpperCase();
					var calculo=numero_dni.value%23;
					var letra_final=letras[calculo];
					if(letra_dni==letra_final)
					{
						retorno=document.getElementById('solucion').innerHTML="<h1>La letra introducida es correcta</h1>";
					}
					else{
						retorno=document.getElementById('solucion').innerHTML="<h3 style='color:red'>La letra introducida no es correcta</h3>";
					}
				}
				else
				{
					alert(letra_dni.length+"La letra del DNI solo debe contener un caracter") ;
					limpiar();
				}
		  }
		  else
		  {
			alert("Debe introducir una letra valida para el DNI") ;
			limpiar();
		} 
      } 
}
return retorno;
}

function comprobar_enter(f) {
    if (f.keyCode == 13) {
       valida();
    }
}

function limpiar(){
	document.getElementById('numerodni').value = ''
	document.getElementById('letradni').value = ''
	document.getElementById('solucion').value = ''
}

