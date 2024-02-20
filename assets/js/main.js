const ElementoParaInserirFilmes = document.getElementById('filmes');
export const listaDeFavoritos = [];

function InserirFilmesNaTela(filmes) {
  ElementoParaInserirFilmes.innerHTML = '';
  filmes.forEach(movie => {
    const movieId = movie.id;
    const title = movie.title;
    const releaseYear = movie.release_date.split('-')[0];
    const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const rating = movie.vote_average.toFixed(1);
    const overview = movie.overview;

    const section = document.createElement('section');
    section.className = 'cards';
    section.dataset.movieId = movieId;

    const parte1 = document.createElement('div');
    parte1.className = 'cards__parte1';

    const img = document.createElement('img');
    img.src = posterPath;
    img.alt = 'Capa';
    img.className = 'cards__parte1-capa';

    parte1.appendChild(img);
    section.appendChild(parte1);

    const parte2 = document.createElement('div');
    parte2.className = 'cards__parte2';

    const titulo = document.createElement('h2');
    titulo.className = 'cards__parte2-titulo';
    titulo.textContent = `${title} (${releaseYear})`;

    const details = document.createElement('div');
    details.className = 'cards__parte2-details';

    const ratingDiv = document.createElement('div');
    const ratingImg = document.createElement('img');
    ratingImg.src = '/assets/img/img/Star.svg';
    ratingImg.alt = 'star';
    ratingImg.className = 'cards__parte2-icon';
    const ratingText = document.createElement('h2');
    ratingText.className = 'cards__parte2-text';
    ratingText.textContent = rating;

    ratingDiv.appendChild(ratingImg);
    ratingDiv.appendChild(ratingText);
    details.appendChild(ratingDiv);

    const favoriteDiv = document.createElement('div');
    const favoriteCheckbox = document.createElement('input');
    favoriteCheckbox.type = 'checkbox';
    favoriteCheckbox.className = 'cards__parte2-checkbox';
    if (listaDeFavoritos.includes(movieId)) {
      favoriteCheckbox.checked = true
    }

    favoriteCheckbox.addEventListener('change', () => {
      if (favoriteCheckbox.checked) {
        if (!listaDeFavoritos.includes(movie)){
          listaDeFavoritos.push(movieId);
        }
      } else {
        const index = listaDeFavoritos.indexOf(movieId);
        if (index !== -1) {
          listaDeFavoritos.splice(index, 1);
        }
      }
      console.log('Favoritos:', listaDeFavoritos);
    });

    const favoriteText = document.createElement('h2');
    favoriteText.className = 'cards__parte2-text';
    favoriteText.textContent = 'Favoritar';

    favoriteDiv.appendChild(favoriteCheckbox);
    favoriteDiv.appendChild(favoriteText);
    details.appendChild(favoriteDiv);

    parte2.appendChild(titulo);
    parte2.appendChild(details);
    section.appendChild(parte2);

    const parte3 = document.createElement('div');
    parte3.className = 'cards__parte3';

    const texto = document.createElement('p');
    texto.className = 'cards__parte3-texto';
    texto.textContent = overview;

    parte3.appendChild(texto);
    section.appendChild(parte3);

    ElementoParaInserirFilmes.appendChild(section);
  });
}

export {InserirFilmesNaTela}