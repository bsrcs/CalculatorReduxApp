import React from "react"
import Calculation from "./Calculation"
import { Container, Row, Col } from "reactstrap"

function App() {
  return (
    <Container>
      <h3>Calculation App</h3>
      <Row>
        <Col xs="6">
          <Calculation />
        </Col>
      </Row>
    </Container>
  )
}

export default App
