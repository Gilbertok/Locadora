UserJs = {};

UserJs.login = function(usuario, senha) {
    user = DataBase.validaLogin(usuario, senha);
    if(user != undefined) {
        DataBase.login(user);
        location.reload();
    } else {
        IndexJS.messageError('Usuário Inexistente!');
    }
}

$("#salvarUsuario").click(function() {
    var username = document.getElementById("cadastroUsuario").value;
    var nome = document.getElementById("cadastroNomeCompleto").value;
    var email = document.getElementById("cadastroEmail").value;
    var sexo = document.getElementById("cadastroSexo").value;
    var password = document.getElementById("cadastroPassword").value;

    user = {
        username: username,
        nome: nome,
        email: email,
        sexo: sexo,
        password: password
    }
    DataBase.addUser(user);
    IndexJS.messageSuccesso('Usuário Cadastrado com sucesso!');
    setTimeout(function(){
            UserJs.login(user.username, user.password);
        }, 
        1500
    );
});

$("#login").click(function() {
    var usuario = document.getElementById("loginUsuario").value;
    var senha = document.getElementById("loginSenha").value;
    UserJs.login(usuario, senha);
});

