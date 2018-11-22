
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

    DataBase.addUser(user);
});

$("#login").click(function() {
    var usuario = document.getElementById("loginUsuario").value;
    var senha = document.getElementById("loginSenha").value;
    user = DataBase.validaLogin(usuario, senha);
    if(user != undefined) {
        DataBase.login(user);
        location.reload();
    }
});

