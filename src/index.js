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

function carregarFilmes(filmes) {

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