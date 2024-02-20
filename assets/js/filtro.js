import { listaDeFavoritos } from '../../assets/js/main.js';
import { apiKey } from './script.js';
import { InserirFilmesNaTela } from '../../assets/js/main.js';
const filtroAtivo = document.getElementById('cabecalho__checkbox');

filtroAtivo.addEventListener('change', getFilmesFavoritos);

const inputPesquisa = document.querySelector('.cabecalho__pesquisa-input');
const lupa = document.querySelector('.cabecalho__pesquisa-lupa');
lupa.addEventListener('click', pesquisarFilmes);

function pesquisarFilmes() {
    const searchTerm = inputPesquisa.value.trim(); // Obtém o valor do campo de pesquisa e remove espaços em branco no início e no final

    if (searchTerm !== '') {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${searchTerm}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => {
                const movies = data.results; // Array de filmes correspondentes aos resultados da pesquisa
                let movieIds = [];
                let movieList = [];

                const exactMatch = movies.find(movie => movie.title === searchTerm); // Verifica se há um filme com título exato

                if (exactMatch) {
                    movieIds.push(exactMatch.id); // Adiciona o ID do filme com título exato
                    movieList.push(exactMatch); // Adiciona o filme à lista de filmes
                } else {
                    movieIds = movies.map(movie => movie.id); // Adiciona os IDs de todos os filmes correspondentes
                    movieList = movies; // Define a lista de filmes como todos os filmes correspondentes
                }

                InserirFilmesNaTela(movieList);
            })
            .catch(error => {
                console.error('Ocorreu um erro ao pesquisar filmes:', error);
            });
    } else {
        console.log('Nenhum termo de pesquisa foi inserido.');
    }
}

async function getFilmesFavoritos() {
    if (listaDeFavoritos.length === 0) {
        document.getElementById('filmes').innerHTML = '';
        document.querySelector('.card__lista-vazia').style.display = 'flex';
    }

    if (filtroAtivo.checked) {
        try {
            const filmes = [];
            for (const movieId of listaDeFavoritos) {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`);
                const movie = await response.json();
                filmes.push(movie);
            }
            InserirFilmesNaTela(filmes);
            document.querySelectorAll('.cards').forEach(elemento => {
                elemento.querySelector('.cards__parte2-checkbox').checked = true;
            });
        } catch (error) {
            console.error('Ocorreu um erro ao obter detalhes dos filmes:', error);
        }
    } else {
        document.querySelector('.card__lista-vazia').style.display = 'none';
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`);
            const data = await response.json();
            const movies = data.results.slice(0, 10);
            InserirFilmesNaTela(movies);
        } catch (error) {
            console.error('Ocorreu um erro ao obter os filmes populares:', error);
        }
    }
}
