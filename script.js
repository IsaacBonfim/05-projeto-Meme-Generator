const textoDigitado = document.getElementById('text-input');
const textoMeme = document.getElementById('meme-text');

function addTexto() {
  const texto = textoDigitado.value;

  textoMeme.textContent = texto;
}

textoDigitado.addEventListener('keyup', addTexto);

const imagem = document.getElementById('meme-image');
const carregaImagem = document.getElementById('meme-insert');

function carregaMeme(evento) {
  const meme = evento.target.files[0];

  imagem.src = URL.createObjectURL(meme);
}

carregaImagem.addEventListener('change', carregaMeme);

const agua = document.getElementById('water');
const fogo = document.getElementById('fire');
const terra = document.getElementById('earth');

function mudaBorda(evento) {
  const borda = document.getElementById('meme-image-container');

  if (evento.target.id === 'water') {
    borda.style.border = '5px double blue';
  } else if (evento.target.id === 'fire') {
    borda.style.border = '3px dashed red';
  } else if (evento.target.id === 'earth') {
    borda.style.border = '6px groove green';
  }
}

agua.addEventListener('click', mudaBorda);
fogo.addEventListener('click', mudaBorda);
terra.addEventListener('click', mudaBorda);
