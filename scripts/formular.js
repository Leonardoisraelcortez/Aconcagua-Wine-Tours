function enviarFormulario() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var comentarios = document.getElementById("comentarios").value;

    if (nome === "" || sobrenome === "" || telefone === "" || email === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    var dadosFormulario = {
        nome: nome,
        sobrenome: sobrenome,
        telefone: telefone,
        email: email,
        comentarios: comentarios
    };

    console.log(dadosFormulario);

    var resultadoEnvio = document.getElementById("resultadoEnvio");
    resultadoEnvio.innerHTML = "Formulário enviado com sucesso.";

    document.getElementById("enviarBotao").disabled = true;
}
