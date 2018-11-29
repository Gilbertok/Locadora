
var filmes = [
    {
        titulo: 'UMA QUESTÃO PESSOAL ',
        conteudo: 'Drama, Guerra',
        direcao: 'Paolo Taviani, Vittorio Taviani',
        dataLancamento: '20 de setembro de 2018 (1h 25min)',
        sinopse: 'Milton (Luca Marinelli) é um jovem membro da Resistência Italiana que decide cruzar a região de Langhe, durante a Segunda Guerra Mundial, para investigar o paradeiro de uma antiga namorada, Fulvia (Valentina Bellè). Ao descobrir que ela possivelmente se envolveu com seu melhor amigo, Giorgio (Lorenzo Richelmy), Milton se vê envolvido com marcas do passado e tenta reencontrá-lo a fim de resolver suas questões.',
        linkImagem: 'Drama/umaquestaopessoal.jpg',
        linkFilme: ''
    },{
        titulo: 'O PASSAGEIRO ',
        conteudo: 'Suspense, Ação',
        direcao: 'Jaume Collet-Serra',
        dataLancamento: '8 de março de 2018 (1h 44min)',
        sinopse: 'Durante o seu trajeto usual de volta para casa, um vendedor de seguros (Liam Neeson) é forçado por uma estranha misteriosa (Vera Farmiga) a descobrir a identidade de um dos passageiros do trem em que se encontra antes da última parada. Com a rotina quebrada, o homem se encontra no meio de uma conspiração criminosa. ',
        linkImagem: 'Acao/passageiro.jpg',
        linkFilme: ''
    },{
        titulo: 'DESEJO DE MATAR ',
        conteudo: 'Ação',
        direcao: 'Eli Roth',
        dataLancamento: '10 de maio de 2018 (1h 49min)',
        sinopse: 'Um homem gentil tem sua vida transformada quando sua família é abalada por um ato de violência que machuca a todos. Em busca de justiça, ele se transforma em uma máquina mortífera, para conseguir fazer justiça com as próprias mãos.',
        linkImagem: 'Acao/desejodematar.jpg',
        linkFilme: ''
    },{
        titulo: 'A FREIRA ',
        conteudo: 'Terror',
        direcao: 'Corin Hardy',
        dataLancamento: '6 de setembro de 2018 (1h 37min)',
        sinopse: 'Presa em um convento na Romênia, uma freira comete suicídio. Para investigar o caso, o Vaticano envia um padre atormentado e uma noviça prestes a se tornar freira. Arriscando suas vidas, a fé e até suas almas, os dois descobrem um segredo profano e se confrontam com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento num campo de batalha.',
        linkImagem: 'Terror/afreira.jpg',
        linkFilme: ''
    }
];

window.onload = IndexJS.carregarFilmes(filmes);