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

function logoff() {
    DataBase.logoff();
    location.reload();
}


IndexJS = {};

IndexJS.messageError = function(message) {
    iziToast.show({
        id: null, 
        class: '',
        titleColor: '',
        titleSize: '',
        titleLineHeight: '',
        messageColor: '',
        messageSize: '',
        messageLineHeight: '',
        backgroundColor: '',
        icon: '',
        iconText: '',
        iconColor: '',
        iconUrl: null,
        image: '',
        imageWidth: 50,
        maxWidth: null,
        zindex: null,
        layout: 1,
        balloon: false,
        close: true,
        closeOnEscape: false,
        closeOnClick: false,
        displayMode: 0, // once, replace
        target: '',
        targetFirst: true,
        rtl: false,
        animateInside: true,
        pauseOnHover: true,
        resetOnHover: false,
        progressBarColor: '',
        progressBarEasing: 'linear',
        overlay: false,
        overlayClose: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown',
        buttons: {},
        inputs: {},
        onOpening: function () {},
        onOpened: function () {},
        onClosing: function () {},
        onClosed: function () {},
        drag: false,
        progressBar: false,
        timeout: 0,
        theme: 'light', // dark
        color: 'yellow', // blue, red, green, yellow
        position: 'topLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center

        title: 'Atenção',
        message: message
    });
}

IndexJS.messageSuccesso = function(message) {
    iziToast.show({
        id: null, 
        class: '',
        titleColor: '',
        titleSize: '',
        titleLineHeight: '',
        messageColor: '',
        messageSize: '',
        messageLineHeight: '',
        backgroundColor: '',
        icon: '',
        iconText: '',
        iconColor: '',
        iconUrl: null,
        image: '',
        imageWidth: 50,
        maxWidth: null,
        zindex: null,
        layout: 1,
        balloon: false,
        close: true,
        closeOnEscape: false,
        closeOnClick: false,
        displayMode: 0, // once, replace
        target: '',
        targetFirst: true,
        timeout: 5000,
        rtl: false,
        animateInside: true,
        pauseOnHover: true,
        resetOnHover: false,
        progressBarColor: '',
        progressBarEasing: 'linear',
        overlay: false,
        overlayClose: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown',
        buttons: {},
        inputs: {},
        onOpening: function () {},
        onOpened: function () {},
        onClosing: function () {},
        onClosed: function () {},
        drag: false,
        progressBar: false,
        theme: 'light', // dark
        color: 'green', // blue, red, green, yellow
        position: 'topLeft', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center

        title: 'Sucesso!',
        message: message
    });
}

IndexJS.carregarMenu = function (params) {
    var indexCarrossel = document.getElementById('index-carrossel');
    var indexMenu = document.getElementById('index-menu');
    var menu = '';
    var carrousel = '';
    var user = DataBase.verificaUsuarioLogado();
    // caso esteja logado
    if (user != undefined) {
        menu = `<div class="jumbotron">
                    <h1 class="display-3">Bem vindo, ${user.nome}</h1>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-3">
                            <h3 class="card-header">Dados da conta</h3>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Cras justo odio</li>
                                <li class="list-group-item">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div class="card-footer text-muted">
                                Ultimo login, 2 dias atrás
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
                    <div class="col-md-6">
                        <button type="button" id="logoff" onclick="logoff()" class="btn btn-danger">Logoff</button>
                    </div>
                </div>`;
    } else {
        carrousel = `<div class="carrossel">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100 img-responsive" src="assets/img/imagem1.jpg" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 img-responsive" src="assets/img//imagem2.jpg" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100 img-responsive" src="assets/img/imagem3.jpg" alt="Third slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>`;
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
                menu+=`<div class="row">${IndexJS.getCardFilmes()}</div>`;
    }
    indexCarrossel.innerHTML = carrousel;
    indexMenu.innerHTML = menu;
}

IndexJS.getCardFilmes = function () {
    var capas = [
        {
            linkImagem: 'Acao/logan.jpg'
        },
        {
            linkImagem: 'Acao/desejodematar.jpg'
        },
        {
            linkImagem: 'Acao/passageiro.jpg'
        },
        {
            linkImagem: 'Acao/duplaexplosiva.jpg'
        },
        {
            linkImagem: 'Acao/escuridao.jpg'
        },
        {
            linkImagem: 'Acao/foreigner.jpg'
        },
        {
            linkImagem: 'Acao/linhaacao.jpg'
        },{
            linkImagem: 'Aventura/aventuravingadores.jpg'
        },
        {
            linkImagem: 'Aventura/hansolo.jpg'
        },
        {
            linkImagem: 'Drama/umaquestaopessoal.jpg'
        },
        {
            linkImagem: 'Aventura/comotreinardragao.jpg'
        },
        {
            linkImagem: 'Acao/passageiro.jpg'
        }
    ]
    
    var corpo = '';
    capas.forEach(capa => {
        corpo+=`<div class="col-md-3">
                    <div class="card mb-3 shadow-sm">
                        <img class="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" 
                            style="height: 225px; width: 100%; display: block;" 
                            src="./assets/img/${capa.linkImagem}" 
                            data-holder-rendered="true">
                    </div>
                </div>`
    });
    return corpo;
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