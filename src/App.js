import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

import Colors from './components/colors'


function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={12} md={6}>
              <h1 className="text-center mt-5">Simple TODO List App</h1>
              <Colors/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;