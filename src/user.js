

$("#salvarUsuario").click(function() {
    var nome = document.getElementById("cadastroUsuario").value;
    var email = document.getElementById("cadastroEmail").value;
    var sexo = document.getElementById("cadastroSexo").value;
    var password = document.getElementById("cadastroPassword").value;

    user = {
        nome: nome,
        email: email,
        sexo: sexo,
        password: password
    }

    Resume.addUser(user);
});