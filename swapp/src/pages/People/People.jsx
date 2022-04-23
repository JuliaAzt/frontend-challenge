import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import CardPerson from '../../components/CardPerson';
import Loading from '../../components/Loading';
import PageHeader from '../../components/PageHeader';
import { peopleAdapter } from '../../services/personAdapter';

import './People.scss';

function People() {
  const [people, setPeople] = useState([]);
  const [searchPerson, setSearchPerson] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handleUserSearch = (data) => {
    setSearchPerson(data.target.value);
  };

  useEffect(() => {
    if (searchPerson === '') setSearchResults(people);
    else {
      console.log(searchPerson);
      const filteredPeople = people.filter((el) =>
        el.NOME.toLowerCase().includes(searchPerson.toLowerCase())
      );
      setSearchResults(filteredPeople);
    }
  }, [searchPerson, people]);

  useEffect(() => {
    const getPeople = async () => {
      setLoading(true);
      setPeople(await peopleAdapter());
      setLoading(false);
    };
    getPeople();
  }, []);

  return (
    <Container className="people">
      <Row>
        <Col md={12}>
          <PageHeader
            title="Personagens"
            search={searchPerson}
            handleUserSearch={handleUserSearch}
          />
        </Col>
        {isLoading ? (
          <Loading />
        ) : (
          searchResults.map((result, index) => {
            return (
              <Col md={3} key={index}>
                <CardPerson {...result} />
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
}

export default People;
