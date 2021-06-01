
const vermelho = document.querySelector('.red')
vermelho.style.backgroundColor = 'red'
const preto = document.querySelector('.black')
preto.style.backgroundColor = 'black'
const azul = document.querySelector('.pink')
azul.style.backgroundColor = 'pink'
const verde = document.querySelector('.green')
verde.style.backgroundColor = 'green'
const limpar = document.querySelector('#clear-board')

const pixel = document.querySelectorAll('.pixel')

var corAtual = "black";
selecionarPixel();
vermelho.addEventListener('click', selecionarVermelho)
preto.addEventListener('click', selecionarPreto)
azul.addEventListener('click', selecionarAzul)
verde.addEventListener('click', selecionarVerde)
limpar.addEventListener('click', pintarTudoDeBranco)

function pintarTudoDeBranco() {
  for (let index in pixel) {
      pixel[index].style.backgroundColor = 'white'
  }
}

function selecionarPixel() {
  for (let index in pixel) {
    pixel[index].addEventListener('click', function () {
      pixel[index].style.backgroundColor = corAtual
    })
  }
}

function selecionarVermelho(event) {
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  let cor = event.target.style.backgroundColor
  vermelho.classList.add('selected')
  corAtual = cor
}
function selecionarPreto(event) {
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  let cor = event.target.style.backgroundColor
  preto.classList.add('selected')
  corAtual = cor
}
function selecionarAzul(event) {
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  let cor = event.target.style.backgroundColor
  azul.classList.add('selected')
  corAtual = cor
}
function selecionarVerde(event) {
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  let cor = event.target.style.backgroundColor
  verde.classList.add('selected')
  corAtual = cor
}
