import { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Typography from '../../components/Typography';
import './Subscribe.scss';

function Subscribe() {
  const [name, setName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="subscribe">
      <Row justify="center" align="center">
        <Col md={8} align="center" className="subscribe__title">
          <Typography variant="title" level="xlarge">
            Participe do próximo filme
          </Typography>
        </Col>
        <Col md={8}>
          <Card title="Digite suas informações">
            <form onSubmit={handleFormSubmit}>
              <Row className="subscribe__section">
                <Col md={12}>
                  <Typography variant="subtitle" level="medium">
                    Participe do próximo filme
                  </Typography>
                </Col>
              </Row>
              <Row className="subscribe__row">
                <Col md={6}>
                  <Input
                    placeholder="Digite seu nome"
                    type="text"
                    label="NOME"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    placeholder="Digite sua data de nascimento"
                    type="date"
                    label="DATA DE NASCIMENTO"
                  />
                </Col>
              </Row>
              <Row className="subscribe__row">
                <Col md={6}>
                  <Input placeholder="Digite seu e-mail" type="email" label="E-MAIL" />
                </Col>
                <Col md={6}>
                  <Input placeholder="Digite seu telefone" type="text" label="TELEFONE" />
                </Col>
              </Row>

              <Row className="subscribe__row">
                <Col md={6}>
                  <Input placeholder="Digite sua senha" type="password" label="CRIE SUA SENHA" />
                </Col>
                <Col md={6}>
                  <Input
                    placeholder="Repita sua senha"
                    type="password"
                    label="CONFIRME SUA SENHA"
                  />
                </Col>
              </Row>
              <Row className="subscribe__section">
                <Col md={12}>
                  <Typography variant="subtitle" level="medium">
                    Sobre o seu contato com Star Wars
                  </Typography>
                </Col>
              </Row>
              <Row className="subscribe__row">
                <Col md={6}>
                  <Input label="QUAL SEU PERSONAGEM FAVORITO?" type="text" />
                </Col>
              </Row>
              <Row className="subscribe__row">
                <Col md={8}>
                  <Input label="ANEXE O SEU CURRÍCULO" variant="file" />
                </Col>
              </Row>

              <Row className="subscribe__row">
                <Col md={12}>
                  <Input
                    placeholder="Digite seu nome"
                    variant="textarea"
                    label="UM RESUMO DA SUA CARREIRA ARTISTICA"
                  />
                </Col>
              </Row>

              <Row justify="center">
                <Col md={8}>
                  <button type="submit" className="subscribe__button">
                    <Typography variant="title" level="small">
                      Enviar
                    </Typography>
                  </button>
                </Col>
              </Row>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Subscribe;
