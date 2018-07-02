// JavaScript Validación
$('document').ready(function(){ 
    //onclick 
    boton = document.getElementById('enviarbtn');
    boton.onclick = function(){
	
		alert("Enviado con exito");

	};

    //

	document.getElementById('email').addEventListener('keyup', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }

    if(campo.value === ""){
    	valido.innerText="";
    }

 });

})