function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var comentarios = document.getElementById("comentarios").value;

    if (nombre === "" || apellido === "" || telefono === "" || email === "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    var datosFormulario = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        comentarios: comentarios
    };

    console.log(datosFormulario);

    var resultadoEnvio = document.getElementById("resultadoEnvio");
    resultadoEnvio.innerHTML = "Formulario enviado con éxito.";

    document.getElementById("enviarBoton").disabled = true;
}
