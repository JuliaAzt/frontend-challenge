import { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Typography from '../../components/Typography';
import './Subscribe.scss';

function Subscribe() {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [favoriteCharacter, setFavoriteCharacter] = useState('');
  const [resume, setResume] = useState('');
  const [career, setCareer] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      birthday,
      email,
      phone,
      password,
      confirmPassword,
      favoriteCharacter,
      resume,
      career
    });
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
                    value={birthday}
                    onChange={(e) => {
                      setBirthday(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row className="subscribe__row">
                <Col md={6}>
                  <Input
                    placeholder="Digite seu e-mail"
                    type="email"
                    label="E-MAIL"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    placeholder="Digite seu telefone"
                    type="text"
                    label="TELEFONE"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </Col>
              </Row>

              <Row className="subscribe__row">
                <Col md={6}>
                  <Input
                    placeholder="Digite sua senha"
                    type="password"
                    label="CRIE SUA SENHA"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    placeholder="Repita sua senha"
                    type="password"
                    label="CONFIRME SUA SENHA"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
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
                  <Input
                    label="QUAL SEU PERSONAGEM FAVORITO?"
                    type="text"
                    value={favoriteCharacter}
                    onChange={(e) => {
                      setFavoriteCharacter(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row className="subscribe__row">
                <Col md={8}>
                  <Input
                    label="ANEXE O SEU CURRÍCULO"
                    variant="file"
                    value={resume}
                    onChange={(e) => {
                      setResume(e.target.value);
                    }}
                  />
                </Col>
              </Row>

              <Row className="subscribe__row">
                <Col md={12}>
                  <Input
                    placeholder="Escreva aqui o resumo"
                    variant="textarea"
                    label="UM RESUMO DA SUA CARREIRA ARTISTICA"
                    value={career}
                    onChange={(e) => {
                      setCareer(e.target.value);
                    }}
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
