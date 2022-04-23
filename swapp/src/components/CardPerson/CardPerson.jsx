import { Container, Row } from 'react-grid-system';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import Typography from '../Typography';
import Link from '../../components/Link';
import { useState, useEffect } from 'react';
import { personAdapterCard } from '../../services/personAdapter';
import Loading from '../Loading';
import './CardPerson.scss';

function CardPerson(props) {
  const { NOME, DATA, ESPECIE, ALTURA, VEICULOS, PLANETA, PERSON_ID } = props;
  const [personInfo, setPersonInfo] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getPerson = async () => {
      setLoading(true);
      const person = await personAdapterCard({
        vehicles: VEICULOS,
        specie: ESPECIE,
        planet: PLANETA
      });

      setPersonInfo(person);
      setLoading(false);
    };
    getPerson();
  }, []);

  return (
    <div className="card__person">
      <Card title={NOME}>
        {isLoading ? (
          <Loading />
        ) : (
          <Container>
            <div className="card__section">
              <Row>
                <Typography className="card__subtitle" variant="subtitle" level="medium">
                  nascimento
                </Typography>
              </Row>
              <Row>
                <Typography variant="text" level="medium">
                  DATA: {DATA}
                </Typography>
              </Row>
              <Row>
                <Typography variant="text" level="medium">
                  PLANETA: {personInfo.PLANETA}
                </Typography>
              </Row>
            </div>
            <div className="card__section">
              <Row>
                <Typography className="card__subtitle" variant="subtitle" level="medium">
                  descrição fisica
                </Typography>
              </Row>
              <Row>
                <Typography variant="text" level="medium">
                  ESPÉCIE: {personInfo.ESPECIE}
                </Typography>
              </Row>
              <Row>
                <Typography variant="text" level="medium">
                  ALTURA: {ALTURA}
                </Typography>
              </Row>
            </div>
            <div className="card__section card__vehicles">
              <Row>
                <Typography className="card__subtitle" variant="subtitle" level="medium">
                  veiculos usados
                </Typography>
              </Row>

              {personInfo.VEICULOS?.map((vehicle, index) => {
                return (
                  <Row key={index}>
                    <Typography variant="text" level="medium">
                      {vehicle}
                    </Typography>
                  </Row>
                );
              })}
            </div>

            <Row>
              <Link to={`/people/${PERSON_ID}`}>
                <Typography variant="title" level="small">
                  ver detalhes
                </Typography>
              </Link>
            </Row>
          </Container>
        )}
      </Card>
    </div>
  );
}

CardPerson.propTypes = {
  NOME: PropTypes.string,
  DATA: PropTypes.string,
  ESPECIE: PropTypes.string,
  PLANETA: PropTypes.string,
  ALTURA: PropTypes.string,
  VEICULOS: PropTypes.array,
  PERSON_ID: PropTypes.number
};

export default CardPerson;
