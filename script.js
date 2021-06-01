window.onload = pixelBoard;

function pixelBoard(){
  for (let index = 0; index < 25; index += 1) {
    let divPixelBoard = document.querySelector('#pixel-board');
    let pixel = document.createElement('div')
    pixel.className = 'pixel';
    divPixelBoard.appendChild(pixel);
  }
}

document.addEventListener('click', selecionaCor);

function selecionaCor(){
  let corAplicavel = document.querySelector('.selector');
  let pixel = eve
  
}

// function Coloring(event) {
//   const pixel = event.target;
//   pixel.style.backgroundColor = document.querySelectorAll('.selected')[0].id;
// }
// const pixels = document.querySelectorAll('.pixel');
// for (let index = 0; index < pixels.length; index += 1) {
//   pixels[index].addEventListener('click', Coloring);
// }