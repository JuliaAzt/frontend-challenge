import { singleRequest, multipleRequests } from './swApi';

const personAdapterCard = async (personId) => {
  const personRequest = await singleRequest(`https://swapi.dev/api/people/${personId}`);
  const vehicles = await multipleRequests(personRequest.vehicles);
  const specie = await singleRequest(personRequest.species[0]);

  const vehiclesNames = vehicles.map((el) => {
    return el.name;
  });

  return {
    NASCIMENTO: {
      NOME: personRequest.name,
      DATA: personRequest.birth_year
    },
    DESCRICAO: {
      ESPECIE: specie.name || '',
      ALTURA: personRequest.height
    },
    VEICULOS: vehiclesNames || ''
  };
};

const personAdapterPage = async (personId) => {
  const personRequest = await singleRequest(`https://swapi.dev/api/people/${personId}`);
  const vehicles = await multipleRequests(personRequest.vehicles);
  const films = await multipleRequests(personRequest.films);
  const starships = await multipleRequests(personRequest.starships);
  const specie = await singleRequest(personRequest.species[0] || []);
  const height = Number(personRequest.height) / 100.0;

  const getArrayNames = (array) => {
    return array.map((el) => el.name);
  };

  const filmsInfo = films.map((el) => {
    return { NOME: el.title, URL: el.url };
  });

  return {
    NOME: personRequest.name,
    FILMES: filmsInfo,
    DESCRICAO: {
      ESPECIE: specie.name || '',
      ALTURA: `${height} METRO`,
      PESO: `${personRequest.mass} KG`,
      CABELO: personRequest.hair_color
    },
    VEICULOS: getArrayNames(vehicles) || '',
    NAVES: getArrayNames(starships) || ''
  };
};

export { personAdapterCard, personAdapterPage };
