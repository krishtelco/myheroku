import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import FormLogin from "./FormLogin";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Container className="d-flex vertali">
        <Row className="border border-yellow rowback">
          <FormLogin />
        </Row>
      </Container>
    </div>
  );
}

export default App;
