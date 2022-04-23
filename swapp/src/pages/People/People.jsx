import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import CardPerson from '../../components/CardPerson';
import Loading from '../../components/Loading';
import PageHeader from '../../components/PageHeader';
import Typography from '../../components/Typography';
import { peopleAdapter } from '../../services/personAdapter';

import './People.scss';

function People() {
  const [people, setPeople] = useState([]);
  const [searchPerson, setSearchPerson] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handleUserSearch = (data) => {
    setSearchPerson(data.target.value);
  };

  const handleLoadMore = () => {
    if (people[people.length - 1].NEXT_PAGE !== null) setCurrentPage(currentPage + 1);
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
      setPeople(await peopleAdapter(currentPage));
      setLoading(false);
    };
    getPeople();
  }, []);

  useEffect(() => {
    const getPeople = async () => {
      const newPeople = await peopleAdapter(currentPage);
      setPeople(people.concat(newPeople));
    };
    getPeople();
  }, [currentPage]);

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
      <Row justify="center">
        <Col md={3}>
          <button className="people__button" onClick={handleLoadMore}>
            <Typography variant="title" level="small">
              Carregar mais
            </Typography>
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default People;
