import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const App = () => {

    const [countries, setCountries] = useState([]) //데이터를 불러옴(담는 모양)

    const getDataFromBackEnd = async () => {
        try{
            const result = await axios.get("http://localhost:8500/country/")
            console.log(result.data)
            setCountries(result.data)
        } catch (err){
            console.log(err)
        }
    }

    //자동실행함수
    useEffect(() => {
        getDataFromBackEnd()
    }, [])

  return (
      <Container>
          <Row>
        <h1>Hello World</h1>
          <h1>{countries.length}</h1>
          {countries && countries.map(country => (
              <Col>
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                      <Card.Title>{country.name}</Card.Title>
                      <Card.Text>
                          {country.introduce1}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>
              </Col>
          ))}
          </Row>
      </Container>
  );
};

export default App;
