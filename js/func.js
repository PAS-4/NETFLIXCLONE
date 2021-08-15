$('.carousel').slick({
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
});

const fundoFilmeAtual = document.querySelector('#filmeAtual')
const titulo = document.querySelector('#titulo')
const subtitulo = document.querySelector('#subtitulo')
const sinopse = document.querySelector('#sinopse')

// function infoDefaut(){
//     fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../img/defautBack.jpg")'
//     fundoFilmeAtual.style.backgroundSize = 'cover'
//     subtitulo.innerHTML = 'Já recebeu a coruja com sua carta de Hogwarts?'
//     sinopse.innerHTML = 'Então embarque no Hogwarts Express - Plataforma 9 3/4'
// }

function mudaInfoFilme(n){
    switch (n){
        case 1:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("./img/hpUmBack.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            subtitulo.innerHTML = 'e a Pedra Filosofal'
            sinopse.innerHTML = 'A magia começa aqui!!'
            break
        case 2:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("./img/hpDoisBack.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            subtitulo.innerHTML = 'e a Câmara Secreta'
            sinopse.innerHTML = 'Um amigo elfo e um fantasma do passado!!'
            break
        case 3:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("./img/hpTresBack.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            subtitulo.innerHTML = 'e o Prisioneiro de Azkaban'
            sinopse.innerHTML = 'A Busca por justiça!!'
            break
        case 4:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("./img/hpQuatroBack.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            subtitulo.innerHTML = 'e o Cálice de Fogo'
            sinopse.innerHTML = 'Que os Jogos comecem (Torneio Tribruxo)!!'
            break
        case 5:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("./img/hpCincoBack.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            subtitulo.innerHTML = 'e a Ordem da Fênix'
            sinopse.innerHTML = 'A despedida de Sirius e a volta do Lord das Trevas!!'
            break
        case 6:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("./img/hpSeisBack.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            subtitulo.innerHTML = 'e o Enigma do Príncipe'
            sinopse.innerHTML = 'A queda de Dumbledore!!'
            break
        case 7:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("./img/hpSeteUmBack.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            subtitulo.innerHTML = 'e as Relíquias da Morte - Parte 1'
            sinopse.innerHTML = 'Hogwarts precisa de ajuda!!'
            break
        case 8:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("./img/hpSeteDoisBack.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            subtitulo.innerHTML = 'e as Relíquias da Morte - Parte 2'
            sinopse.innerHTML = 'Tudo termina aqui!!'
            break
    }
}