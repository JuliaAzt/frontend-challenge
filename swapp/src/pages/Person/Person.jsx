import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Typography from '../../components/Typography';
import { personAdapterPage } from '../../services/personAdapter';
import Chart from './Chart';
import './Person.scss';

function Person() {
  const { personId } = useParams();
  const [person, setPerson] = useState({});
  const [isLoading, setLoading] = useState(true);

  const percentageFilms = (moviesCount) => {
    return ((moviesCount / 6) * 100).toFixed(2);
  };
  useEffect(() => {
    const getPerson = async () => {
      setPerson(await personAdapterPage(personId));
      setLoading(false);
    };

    getPerson();
  }, []);

  return (
    <Container className="person">
      <Row justify="between" className="person__header">
        <Col md={9}>
          <Typography variant="title" level="xlarge">
            {person?.NOME}
          </Typography>
        </Col>
        <Col md={3} align="right">
          <Typography variant="text" level="small">
            ATUALIZADA EM: {person?.ATUALIZADO}
          </Typography>
          <br />
          <Typography variant="text" level="small">
            CRIADA EM: {person?.CRIADO}
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Card title="informações físicas">
            {isLoading ? (
              <Loading />
            ) : (
              <Row>
                <Col md={3}>
                  <Typography variant="text" level="medium">
                    ESPÉCIE: {person?.ESPECIE}
                  </Typography>
                </Col>
                <Col md={3}>
                  <Typography variant="text" level="medium">
                    ALTURA: {person?.ALTURA}
                  </Typography>
                </Col>
                <Col md={2}>
                  <Typography variant="text" level="medium">
                    PESO: {person?.PESO}
                  </Typography>
                </Col>
                <Col md={4}>
                  <Typography variant="text" level="medium">
                    COR DO CABELO: {person?.CABELO}
                  </Typography>
                </Col>
              </Row>
            )}
          </Card>
          <Card title="veículos e naves utilizados" className="person__card">
            {isLoading ? (
              <Loading />
            ) : (
              <Row>
                <Col md={6}>
                  <Typography variant="subtitle" level="medium">
                    VEÍCULOS
                  </Typography>

                  <ul>
                    {person?.VEICULOS?.map((vehicle, index) => {
                      return (
                        <li key={index}>
                          <Typography variant="text" level="medium">
                            {vehicle}
                          </Typography>
                        </li>
                      );
                    })}
                  </ul>
                </Col>
                <Col md={6}>
                  <Typography variant="subtitle" level="medium">
                    NAVES
                  </Typography>
                  <ul>
                    {person?.NAVES?.map((spaceship, index) => {
                      return (
                        <li key={index}>
                          <Typography variant="text" level="medium">
                            {spaceship}
                          </Typography>
                        </li>
                      );
                    })}
                  </ul>
                </Col>
              </Row>
            )}
          </Card>
        </Col>
        <Col md={4}>
          <Card title="Aparições em filmes">
            {isLoading ? (
              <Loading />
            ) : (
              <div>
                <Row justify="center">
                  <Col md={8}>
                    <Chart number={person?.FILMES?.length} />
                  </Col>
                  <Col md={12} align="center">
                    <Typography variant="text" level="small">
                      {percentageFilms(person?.FILMES?.length)} % ({person?.FILMES?.length} DE 6
                      FILMES)
                    </Typography>
                  </Col>
                </Row>
                <Typography variant="subtitle" level="medium">
                  Aparece em
                </Typography>
                <ul>
                  {person?.FILMES?.map((episode, index) => {
                    return (
                      <li key={index}>
                        <a href={episode?.URL}>
                          <Typography variant="text" level="medium">
                            {episode?.NOME}
                          </Typography>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Person;
