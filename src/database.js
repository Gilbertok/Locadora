var baseUser = 'locadora.users';
var baseLogin = 'locadora.login';
var usersList = JSON.parse(localStorage.getItem(baseUser)) || [];
var loginUser = JSON.parse(localStorage.getItem(baseLogin)) || {};

DataBase = {};
DataBase.getUser = function(username) {
    advancedFilter = advancedFilter || {};
    return usersList.filter(function(user) {
        return user.username.toLowerCase() === username;
    });
}

DataBase.addUser = function(user) {
    usersList.push(user);
    localStorage.setItem(baseUser, JSON.stringify(usersList));
}

DataBase.login = function(login) {
    localStorage.setItem(baseLogin, JSON.stringify(login));
}

DataBase.logoff = function() {
    localStorage.setItem(baseLogin, JSON.stringify({}));
}

DataBase.validaLogin = function(usuario, senha) {
    var userLogin = undefined;
    usersList.forEach(user => {
        if (user.username.toLowerCase() === usuario.toLowerCase() && user.password.toLowerCase() === senha.toLowerCase()) {
            userLogin = user;
        }
    });
    return userLogin;
}

DataBase.verificaUsuarioLogado = function () {
    if (loginUser.nome != undefined) {
        return loginUser;
    } else {
        return undefined;
    }
    
}
