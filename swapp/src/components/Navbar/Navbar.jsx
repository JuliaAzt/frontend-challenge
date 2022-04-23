import { Container, Row, Col } from 'react-grid-system';
import Link from '../Link';
import Typography from '../Typography';
import './Navbar.scss';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Container>
        <Row align="center" justify="between">
          <Col md={1} sm={2}>
            <Typography variant="title" level="large">
              star <br /> wars
            </Typography>
          </Col>
          <Col md={2}>
            <Typography variant="title" level="medium">
              casting
            </Typography>
          </Col>
          <Col md={6}>
            <Row>
              <Col
                md={6}
                sm={6}
                className={`navbar__link ${pathname.includes('/people') && 'active'}`}>
                <a href="/people">
                  <Typography variant="subtitle" level="small">
                    Personagens
                  </Typography>
                </a>
              </Col>
              <Col
                md={6}
                sm={6}
                className={`navbar__link ${pathname.includes('/films') && 'active'}`}>
                <a href="/films">
                  <Typography variant="subtitle" level="small">
                    Filmes
                  </Typography>
                </a>
              </Col>
            </Row>
          </Col>
          <Col md={2} sm={6}>
            <Link to={'/subscribe'}>
              <Typography variant="subtitle" level="small">
                cadastrar-se
              </Typography>
            </Link>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;
