const content = document.getElementById('content');

async function loadRandomPhrase() {
  content.innerHTML = '<p class="loading">Cargando frase...</p>';

  try {
    const response = await fetch('/api/random');
    const data = await response.json();

    if (!data.ok) {
      content.innerHTML = `<p class="error">${data.message}</p>`;
      return;
    }

    if (data.tipo === 'imagen' && data.imagen_url) {
      content.innerHTML = `
        <img 
          src="${data.imagen_url}" 
          alt="Dato curioso" 
          class="phrase-image" 
        />
      `;
      return;
    }

    content.innerHTML = `
      <p class="phrase">${data.texto}</p>
    `;

  } catch (error) {
    content.innerHTML = `
      <p class="error">No pudimos cargar la frase. Intenta de nuevo.</p>
    `;
  }
}

loadRandomPhrase();