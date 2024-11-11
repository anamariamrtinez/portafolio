function validarDatos() {
    const formulario = document.getElementById("formulario"); // Agarra el formulario entero
    const campos = formulario.querySelectorAll('input[type="text"], input[type="email"], textarea'); //Agarra todos los datos del formulario cargados como texto y email, y "textarea" (el espacio grande)  
    let campoValido = true;

    campos.forEach(campo => { //Para cada uno
        if (campo.value.trim() == "") {  // Comprueba si el campo está vacío, y en caso positivo
            alert(`El campo ${campo.name} está vacío`);
            campoValido = false;  // Marca el formulario como inválido si hay algún campo vacío
            return;
        }
    });

    if (campoValido) {
        alert("Mail enviado correctamente!")
    }

}