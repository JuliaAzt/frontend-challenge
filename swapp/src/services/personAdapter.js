import { singleRequest, multipleRequests } from './swApi';

const peopleAdapter = async (pageNumber) => {
  const peopleRequest = await singleRequest(`https://swapi.dev/api/people/?page=${pageNumber}`);
  console.log(peopleRequest);
  const peopleArray = peopleRequest.results;

  return peopleArray.map((person, index) => {
    const height = Number(person.height) / 100.0;
    return {
      NOME: person.name,
      DATA: person.birth_year,
      ALTURA: `${height} METRO`,
      ESPECIE: person.species[0] || '',
      VEICULOS: person.vehicles,
      PLANETA: person.homeworld,
      PERSON_ID: index + 1,
      NEXT_PAGE: peopleRequest.next
    };
  });
};

const personAdapterCard = async (person) => {
  const vehicles = await multipleRequests(person.vehicles);
  const planet = (await singleRequest(person.planet)) || '';
  const specie = (await singleRequest(person.specie)) || '';

  const vehiclesNames = vehicles.map((el) => {
    return el.name;
  });

  return {
    ESPECIE: specie.name || 'N/A',
    VEICULOS: vehiclesNames || 'N/A',
    PLANETA: planet.name
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
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const filmsInfo = films.map((el) => {
    return { NOME: el.title, URL: el.url };
  });

  return {
    NOME: personRequest.name,
    FILMES: filmsInfo,
    CRIADO: formatDate(personRequest.created),
    ATUALIZADO: formatDate(personRequest.edited),
    ESPECIE: specie?.name || '',
    ALTURA: `${height} METRO`,
    PESO: `${personRequest.mass} KG`,
    CABELO: personRequest.hair_color,
    VEICULOS: getArrayNames(vehicles) || '',
    NAVES: getArrayNames(starships) || ''
  };
};

export { peopleAdapter, personAdapterCard, personAdapterPage };
