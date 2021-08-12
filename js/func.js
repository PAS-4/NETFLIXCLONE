const fundoFilmeAtual = document.querySelector('#filmeAtual')
const titulo = document.querySelector('#titulo')
const sinopse = document.querySelector('#sinopse')

function mudaInfoFilme(n){
    switch (n){
        case 1:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../img/hp1-back.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            titulo.innerHTML = 'Harry Potter e a Pedra Filosofal'
            sinopse.innerHTML = 'A magia começa aqui!!'
            break
        case 2:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../img/hp2-back.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            titulo.innerHTML = 'Harry Potter e a Câmara Secreta'
            sinopse.innerHTML = 'Um amigo elfo e um fantasma do passado!!'
            break
        case 3:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../img/hp3-back.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            titulo.innerHTML = 'Harry Potter e o Prisioneiro de Azkaban'
            sinopse.innerHTML = 'A Busca por justiça!!'
            break
        case 4:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../img/hp4-back.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            titulo.innerHTML = 'Harry Potter e o Cálice de Fogo'
            sinopse.innerHTML = 'Que os Jogos comecem (Torneio Tribruxo)!!'
            break
        case 5:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../img/hp5-back.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            titulo.innerHTML = 'Harry Potter e a Ordem da Fênix'
            sinopse.innerHTML = 'A despedida de Sirius!!'
            break
        case 6:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../img/hp6-back.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            titulo.innerHTML = 'Harry Potter e o Enigma do Príncipe'
            sinopse.innerHTML = 'A queda de Dumbledore!!'
            break
        case 7:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../img/hp7-1-back.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            titulo.innerHTML = 'Harry Potter e as Relíquias da Morte - Parte 1'
            sinopse.innerHTML = 'Hogwarts precisa de ajuda!!'
            break
        case 8:
            fundoFilmeAtual.style.background = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../img/hp7-2-back.jpg")'
            fundoFilmeAtual.style.backgroundSize = 'cover'
            titulo.innerHTML = 'Harry Potter e as Relíquias da Morte - Parte 2'
            sinopse.innerHTML = 'Tudo termina aqui!!'
            break
    }
}