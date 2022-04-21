import { Container, Row, Col } from 'react-grid-system';
import Link from '../Link';
import './Navbar.scss';
function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <Row align="center" justify="between">
          <Col md={1} sm={2}>
            <h1 className="navbar__logo">
              star <br /> wars
            </h1>
          </Col>
          <Col md={2}>
            <h2 className="navbar__description">casting</h2>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6} sm={6} className="navbar__link active">
                <a>Personagens</a>
              </Col>
              <Col md={6} sm={6} className="navbar__link">
                <a>Filmes</a>
              </Col>
            </Row>
          </Col>
          <Col md={2} sm={6}>
            <Link>cadastrar-se</Link>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
