var baseUser = 'locadora.users';
var baseLogin = 'locadora.login';
var usersList = JSON.parse(localStorage.getItem(baseUser)) || [];
var loginUser = JSON.parse(localStorage.getItem(baseLogin)) || {};

DataBase = {};
DataBase.getUser = function(searchTerm, advancedFilter) {
    advancedFilter = advancedFilter || {};
    return usersList.filter(function(user) {
        return user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.habilidades.some(function(h) {
                    return h.nome.toLowerCase().includes(searchTerm)
                });
    });
}

DataBase.addUser = function(user) {
    usersList.push(user);
    localStorage.setItem(baseUser, JSON.stringify(usersList));
}

DataBase.login = function(login) {
    localStorage.setItem(baseLogin, JSON.stringify(login));
}

DataBase.validaLogin = function(usuario, senha) {
    var userLogin = {};
    usersList.forEach(user => {
        if (user.nome.toLowerCase() === usuario.toLowerCase() && user.password.toLowerCase() === senha.toLowerCase()) {
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
