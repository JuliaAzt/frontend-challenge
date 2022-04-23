import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import Loading from '../../components/Loading/Loading';
import Typography from '../../components/Typography';
import { filmAdapterPage } from '../../services/filmAdapter';
import './Film.scss';

function Film() {
  const { filmId } = useParams();
  const [film, setFilm] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getFilm = async () => {
      setLoading(true);
      setFilm(await filmAdapterPage(filmId));
      setLoading(false);
    };
    getFilm();
  }, []);

  return (
    <Container className="film">
      <Row justify="between" className="film__header">
        <Col md={9}>
          <Typography variant="title" level="xlarge">
            {film?.NOME}
          </Typography>
          <Typography variant="text" level="large">
            Episódio {film?.EPISODIO}
          </Typography>
        </Col>
        <Col md={3} align="right">
          <Typography variant="text" level="small">
            ATUALIZADA EM: {film?.ATUALIZADO}
          </Typography>
          <br />
          <Typography variant="text" level="small">
            CRIADA EM: {film?.CRIADO}
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card title="Sinopse">
            {isLoading ? (
              <Loading />
            ) : (
              <Typography variant="text" level="medium" className="film__sinopse">
                {film?.SINOPSE}
              </Typography>
            )}
          </Card>

          <Card title="Ficha Técnica" className="film__margin">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <Row>
                  <Col md={6}>
                    <Typography variant="subtitle" level="medium">
                      Diretor
                    </Typography>
                    <Typography variant="text" level="medium">
                      {film?.DIRIGIDO}
                    </Typography>
                  </Col>
                  <Col md={6}>
                    <Typography variant="subtitle" level="medium">
                      Produtores
                    </Typography>
                    <Typography variant="text" level="medium">
                      {film?.PRODUZIDO}
                    </Typography>
                  </Col>
                </Row>
                <Row className="film__margin">
                  <Col md={6}>
                    <Typography variant="subtitle" level="medium">
                      Lançamento
                    </Typography>
                    <Typography variant="text" level="medium">
                      {film?.LANCADO}
                    </Typography>
                  </Col>
                </Row>
              </>
            )}
          </Card>
        </Col>
        <Col md={8}>
          <Card title="Aparecem nesse filme">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <Row>
                  <Col md={6}>
                    <Typography variant="subtitle" level="medium">
                      personagens
                    </Typography>
                    <ul className="film__list">
                      {film?.PERSONAGENS?.map((character, index) => {
                        return (
                          <li key={index}>
                            <a href={`/people/${character?.ID}`}>
                              <Typography variant="text" level="medium">
                                {character?.NOME}
                              </Typography>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                  <Col md={6}>
                    <Typography variant="subtitle" level="medium">
                      Espécies
                    </Typography>
                    <ul className="film__list">
                      {film?.ESPECIES?.map((specie, index) => {
                        return (
                          <li key={index}>
                            <Typography variant="text" level="medium">
                              {specie}
                            </Typography>
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                </Row>
                <Row className="film__margin">
                  <Col md={4}>
                    <Typography variant="subtitle" level="medium">
                      veiculos
                    </Typography>
                    <ul>
                      {film?.VEICULOS?.map((veiculo, index) => {
                        return (
                          <li key={index}>
                            <Typography variant="text" level="medium">
                              {veiculo}
                            </Typography>
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                  <Col md={4}>
                    <Typography variant="subtitle" level="medium">
                      naves
                    </Typography>
                    <ul>
                      {film?.NAVES?.map((nave, index) => {
                        return (
                          <li key={index}>
                            <Typography variant="text" level="medium">
                              {nave}
                            </Typography>
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                  <Col md={4}>
                    <Typography variant="subtitle" level="medium">
                      planetas
                    </Typography>
                    <ul>
                      {film?.PLANETAS?.map((planeta, index) => {
                        return (
                          <li key={index}>
                            <Typography variant="text" level="medium">
                              {planeta}
                            </Typography>
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                </Row>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Film;
