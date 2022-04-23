import { Container, Row } from 'react-grid-system';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import Typography from '../Typography';
import Link from '../../components/Link';
import './CardFilm.scss';
function CardFilm(props) {
  const { NOME, EPISODIO, LANCADO, DIRIGIDO, filmId } = props;
  return (
    <div className="card__film">
      <Card title={NOME} subtitle={`Episódio ${EPISODIO}`}>
        <Container>
          <div className="card__information">
            <Row>
              <Typography variant="subtitle" level="medium" className="card__subtitle">
                informações
              </Typography>
            </Row>
            <Row>
              <Typography variant="text" level="medium">
                LANÇADO EM: {LANCADO}
              </Typography>
            </Row>
            <Row>
              <Typography variant="text" level="medium">
                DIRIGIDO POR: {DIRIGIDO}
              </Typography>
            </Row>
          </div>
          <Row>
            <Link to={`/films/${filmId}`}>
              <Typography variant="title" level="small">
                ver detalhes
              </Typography>
            </Link>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

CardFilm.propTypes = {
  NOME: PropTypes.string,
  EPISODIO: PropTypes.number,
  LANCADO: PropTypes.string,
  DIRIGIDO: PropTypes.string,
  filmId: PropTypes.number
};

export default CardFilm;
