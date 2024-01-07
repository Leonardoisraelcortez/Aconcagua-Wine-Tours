function sendForm() {
    var firstName = document.getElementById("nombre").value;
    var lastName = document.getElementById("apellido").value;
    var phone = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comentarios").value;

    if (firstName === "" || lastName === "" || phone === "" || email === "") {
        alert("Please complete all required fields.");
        return;
    }

    var formData = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        comments: comments
    };

    console.log(formData);

    var resultMessage = document.getElementById("resultMessage");
    resultMessage.innerHTML = "Form submitted successfully.";

    document.getElementById("submitButton").disabled = true;
}
