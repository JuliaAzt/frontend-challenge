import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { filmsAdapter } from '../../services/filmAdapter';
import PageHeader from '../../components/PageHeader';
import CardFilm from '../../components/CardFilm';
import Loading from '../../components/Loading/Loading';

function Films() {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchFilm, setSearchFilm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleUserSearch = (data) => {
    setSearchFilm(data.target.value);
  };

  useEffect(() => {
    if (searchFilm === '') setSearchResults(films);
    else {
      const filteredFilms = films.filter((el) =>
        el.NOME.toLowerCase().includes(searchFilm.toLowerCase())
      );
      setSearchResults(filteredFilms);
    }
  }, [searchFilm, films]);

  useEffect(() => {
    const getFilms = async () => {
      setLoading(true);
      setFilms(await filmsAdapter());
      setLoading(false);
    };
    getFilms();
  }, []);

  return (
    <Container className="film">
      <Row>
        <Col md={12}>
          <PageHeader title="Filmes" search={searchFilm} handleUserSearch={handleUserSearch} />
        </Col>
        {isLoading ? (
          <Loading />
        ) : (
          searchResults.map((result, index) => {
            return (
              <Col md={3} key={index}>
                <CardFilm {...result} filmId={index + 1} />
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
}

export default Films;
