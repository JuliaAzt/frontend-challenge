import { singleRequest, multipleRequests } from './swApi';

const filmsAdapter = async () => {
  const filmsRequest = await singleRequest(`https://swapi.dev/api/films`);
  const filmsArray = filmsRequest.results;
  return filmsArray.map((film, index) => {
    const date = film.release_date.split('-').reverse().join('/');
    return {
      NOME: film.title,
      EPISODIO: film.episode_id,
      LANCADO: date,
      DIRIGIDO: film.director,
      FILM_ID: index + 1
    };
  });
};

const filmAdapterPage = async (filmId) => {
  const filmRequest = await singleRequest(`https://swapi.dev/api/films/${filmId}`);
  const characters = await multipleRequests(filmRequest.characters);
  const species = await multipleRequests(filmRequest.species);
  const vehicles = await multipleRequests(filmRequest.vehicles);
  const starships = await multipleRequests(filmRequest.starships);
  const planets = await multipleRequests(filmRequest.planets);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const getArrayNames = (array) => {
    return array.map((el) => el.name);
  };

  const charactersInfo = characters.map((el) => {
    return { NOME: el.name, ID: el.url.split('/')[5] };
  });

  return {
    NOME: filmRequest.title,
    SINOPSE: filmRequest.opening_crawl,
    EPISODIO: filmRequest.episode_id,
    LANCADO: filmRequest.release_date,
    CRIADO: formatDate(filmRequest.created),
    ATUALIZADO: formatDate(filmRequest.edited),
    DIRIGIDO: filmRequest.director,
    PRODUZIDO: filmRequest.producer,
    PERSONAGENS: charactersInfo,
    ESPECIES: getArrayNames(species),
    VEICULOS: getArrayNames(vehicles),
    NAVES: getArrayNames(starships),
    PLANETAS: getArrayNames(planets)
  };
};

export { filmsAdapter, filmAdapterPage };
