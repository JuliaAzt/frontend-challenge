import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';
import Typography from '../Typography';
import Input from '../Input';
import './PageHeader.scss';

function PageHeader(props) {
  const { title, search, handleUserSearch } = props;
  return (
    <Container>
      <Row justify="center" className="header__title">
        <Col md={3}>
          <Typography variant="title" level="xlarge">
            {title}
          </Typography>
        </Col>
      </Row>
      <Row justify="center">
        <Col md={8}>
          <Input
            className="header__search"
            placeholder="FILTRE POR NOME DO PERSONAGEM"
            value={search}
            onChange={handleUserSearch}
            variant="search"
          />
        </Col>
      </Row>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
  search: PropTypes.string,
  handleUserSearch: PropTypes.func
};

export default PageHeader;
