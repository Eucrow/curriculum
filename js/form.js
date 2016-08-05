//HIDDEN FIELD
var othersChekboxes = document.getElementsByName('meet_radio');
var othersField = document.getElementById('otros');


for (var i = 0; i < othersChekboxes.length; i++) {
    othersChekboxes[i].addEventListener('change', function(evt){
        if (this.id == 'meet_otros' && this.checked == true) {
            othersField.style.display = 'block';
            othersField.focus();
        } else{
            othersField.style.display = 'none';
        }
    })
}

//VALIDATION OF THE FORM
var form = document.getElementById("formulario_contacto");

form.addEventListener("submit", function(evt){
	var inputNombre = document.getElementById("nombre");
	var inputApellidos = document.getElementById("apellidos");
	var inputEmail = document.getElementById("email");
    var inputTel = document.getElementById("tel");

	var meetRadioInput = {
		"meet_1": document.getElementById("meet_1"),
		"meet_2": document.getElementById("meet_2"),
		"meet_3": document.getElementById("meet_3"),
		"meet_4": document.getElementById("meet_4"),
        "meet_otros": document.getElementById("meet_otros"),
	};

    var otrosText = document.getElementById("otros");

    var mensajeTextarea = document.getElementById("mensaje");

    var submit;

	// if (inputNombre.checkValidity() == false) {
	// 	alert("Escribe tu nombre");
	// 	inputNombre.focus();
	// 	evt.preventDefault();
	// 	return false;
	// }
    //
    // if (inputApellidos.checkValidity() == false) {
    //     alert("Escribe tus apellidos");
    //     inputApellidos.focus();
    //     evt.preventDefault();
    //     return false;
    // }

    if (inputEmail.checkValidity() == false) {
		alert("Escribe tu email");
		inputEmail.focus();
		evt.preventDefault();
		return false;
	}

    if (inputTel.checkValidity() == false) {
        alert("Escribe tu teléfono");
        inputTel.focus();
        evt.preventDefault();
        return false;
    }

    if(document.getElementById("meet_otros").checked == true) {
        if(!document.getElementById("otros").value) {
            alert("seleciona de qué otra manera me has conocido");
            document.getElementById("otros").focus();
            evt.preventDefault();
            return false;
        }
    }

    if (mensajeTextarea.checkValidity() == false) {
        alert("Has metido algún caracter demasiado raro en el mensaje");
        mensajeTextarea.focus();
        evt.preventDefault();
        return false;
    } else if (mensajeTextarea.value.split(" ").length > 150){
       alert("Máximo 150 palabras en el mensaje");
       mensajeTextarea.focus();
       evt.preventDefault();
       return false;
   }
})
