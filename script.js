const textoDigitado = document.getElementById('text-input');
const textoMeme = document.getElementById('meme-text');

function addTexto() {
  const texto = textoDigitado.value;

  textoMeme.textContent = texto;
}

textoDigitado.addEventListener('keyup', addTexto);
