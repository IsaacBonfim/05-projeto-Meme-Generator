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
