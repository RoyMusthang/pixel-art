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
limpar.addEventListener('click', corDefaut)

function corDefaut() {
  for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white'
  }
}

function selecionarPixel() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', function () {
      pixel[index].style.backgroundColor = corAtual
    })
  }
}
function selecionarVermelho(event) {
  let cor = event.target.style.backgroundColor
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  vermelho.classList.add('selected')
  corAtual = cor
}
function selecionarPreto(event) {
  let cor = event.target.style.backgroundColor
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  preto.classList.add('selected')
  corAtual = cor
}
function selecionarAzul(event) {
  let cor = event.target.style.backgroundColor
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  azul.classList.add('selected')
  corAtual = cor
}
function selecionarVerde(event) {
  let cor = event.target.style.backgroundColor
  vermelho.classList.remove('selected')
  verde.classList.remove('selected')
  azul.classList.remove('selected')
  preto.classList.remove('selected')
  verde.classList.add('selected')
  corAtual = cor
}

