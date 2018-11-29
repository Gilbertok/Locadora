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

UserJs.alterarSenha = function(senhaAtual, senhaNova) {
    var user = DataBase.verificaUsuarioLogado();
    if (senhaAtual != senhaNova) {
        if(user != undefined && user.password == senhaAtual) {
            user.password = senhaNova;
            DataBase.addUser(user);
            IndexJS.messageSuccesso('Senha Alterada com Sucesso!');
            $("#modal_alterar_senha").hide();
        }
    } else {
        IndexJS.messageError('Nova senha precisa ser diferente da Atual!');
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
