import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import FormLogin from "./FormLogin";

function App() {
  return (
    <div className="App">
      <Container className="d-flex vertali">
        <Row className="pad1 border border-yellow rowback">
          <p>Inside PARA</p>
          <FormLogin />
        </Row>
      </Container>
    </div>
  );
}

export default App;
