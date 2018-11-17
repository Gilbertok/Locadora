$('.carousel').carousel({
    interval: 10000
})

$('.modal').on('hidden.bs.modal', function () {
    video = $(this).closest("div").find('video')[0];
    if(video != undefined) {
        video.pause();
        video.currentTime = 0;
    }
})

$('.modal').on('shown.bs.modal', function () {
    video = $(this).closest("div").find('video')[0];
    if(video != undefined) {
        video.play();
    }
})

IndexJS = {};

IndexJS.carregarMenu = function (params) {
    var indexMenu = document.getElementById('index-menu');
    var menu = '';
    var user = DataBase.verificaUsuarioLogado();
    if (user.nome != undefined) {
        menu = `<div class="jumbotron">
                    <h1 class="display-3">Bem vindo, ${user.nome}</h1>
                    <hr class="my-4">
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-3">
                            <h3 class="card-header">Card header</h3>
                            <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                            </div>
                            <img style="height: 200px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image">
                            <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                            </div>
                            <div class="card-footer text-muted">
                            2 days ago
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                            <h4 class="card-title">Card title</h4>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Minha Lista
                                <span class="badge badge-primary badge-pill">12</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Continuar Assistindo
                                <span class="badge badge-primary badge-pill">2</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Filmes Assistidos
                                <span class="badge badge-primary badge-pill">2</span>
                            </li>
                        </ul>
                    </div>
                </div>`;
    } else {
        menu = `<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 class="display-4">Faça login</h1>
                    <p class="lead">Trabalhamos com locação de filmes e venda de planos de streaming.</p>
                    <div class="row">
                        <div class="col-md-6">
                            <button type="button" class="btn btn-lg btn-block btn-success" data-toggle="modal" data-target="#modal_cadastro">Criar Cadastro</button>
                        </div>
                        <div class="col-md-6">
                            <button type="button" class="btn btn-lg btn-block btn-dark" data-toggle="modal" data-target="#modal_login">Logar</button>
                        </div>
                    </div>
                </div>`;
    }
    indexMenu.innerHTML = menu;
}

IndexJS.carregarFilmes = function (filmes) {

    var main = document.getElementById('pages');
    var paginas = '';
    var pag = 1;
    filmes.forEach(filme => {
        if (parseInt(pag%2) == 0) {
            paginas+=`<div class="row featurette">
                        <div class="col-md-7">
                            <h2 class="featurette-heading">${filme.titulo}<span class="text-muted">${filme.conteudo}</span></h2>
                            <h4 class="featurette-heading">Data de lançamento: <span class="text-muted">${filme.dataLancamento}</span></h4>
                            <h4 class="featurette-heading">Direção: <span class="text-muted">${filme.direcao}</span></h4>
                            <p class="lead">${filme.sinopse}
                                <br>
                                <br>
                                <button type="button" class="btn btn-danger btn-lg" data-toggle="modal" data-target="#${filme.dataTarget}">
                                    <i class="fas fa-play-circle"></i>
                                        Assistir Trailer
                                </button>
                            </p>
                        </div>
                        <div class="col-md-5">
                            <img class="featurette-image img-fluid mx-auto" 
                                data-src="holder.js/500x500/auto" 
                                alt="500x500" 
                                style="width: 500px; height: 500px;" 
                                src="../assets/img/${filme.linkImagem}" 
                                data-holder-rendered="true">
                        </div>
                    </div>
                    <hr class="featurette-divider">`
        } else {
            paginas+=`<div class="row featurette">
                        <div class="col-md-5">
                            <img class="featurette-image img-fluid mx-auto" 
                                data-src="holder.js/500x500/auto" 
                                alt="500x500" 
                                style="width: 500px; height: 500px;" 
                                src="../assets/img/${filme.linkImagem}" 
                                data-holder-rendered="true">
                        </div>
                        <div class="col-md-7">
                            <h2 class="featurette-heading">${filme.titulo} <span class="text-muted">${filme.conteudo}</span></h2>
                            <h4 class="featurette-heading">Data de lançamento: <span class="text-muted">${filme.dataLancamento}</span></h4>
                            <h4 class="featurette-heading">Direção: <span class="text-muted">${filme.direcao}</span></h4>
                            <p class="lead">${filme.sinopse}
                                <br>
                                <br>
                                <button type="button" class="btn btn-danger btn-lg" data-toggle="modal" data-target="#${filme.dataTarget}">
                                    <i class="fas fa-play-circle"></i>
                                        Assistir Trailer
                                </button>
                            </p>
                        </div>
                    </div>
                    <hr class="featurette-divider">`
        }
        pag++
    });

    main.innerHTML = `<div class="row loadGif">
                        <img src="../assets/img/loader2.gif" style="width: 400px; height: 400px;" alt="Banner" />
                    </div>`

    setTimeout(function(){
            main.innerHTML = paginas;
        }, 
        1500
    )
}

window.onload = IndexJS.carregarMenu();