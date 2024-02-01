const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

// Toca o som e altera ícones
function tocarFaixa(){
  audioCapitulo.play();
  botaoPlayPause.classList.remove('bi-play-circle-fill');
  botaoPlayPause.classList.add('bi-pause-circle-fill');
}

// Pausa a faixa
function pausarFaixa(){
  audioCapitulo.pause();
  botaoPlayPause.classList.remove('bi-pause-circle-fill');
  botaoPlayPause.classList.add('bi-play-circle-fill');
}

// Pausar ou vice-versa
function tocarOuPausar(){
  if(taTocando === 0){
    tocarFaixa();
    taTocando = 1;
  }else{
    pausarFaixa();
    taTocando = 0;
  }
}

// Avançar para próxima faixa
function proximaFaixa(){
  if(capituloAtual === numeroCapitulos){
    capituloAtual = 1;
  }else{
    capituloAtual+=1;
  }

  audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa();
}

// Voltar a faixa
function voltarFaixa(){
  if(capituloAtual === 1){
    capituloAtual = numeroCapitulos;
  }else{
    capituloAtual-=1;
  }

  audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
  tocarFaixa();
  taTocando = 1;
  trocarNomeFaixa();
}

function trocarNomeFaixa(){
  nomeCapitulo.innerText = 'Capítulo ' + capituloAtual; 
}

// Botões que cham as funções
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);