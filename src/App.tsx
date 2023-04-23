import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant='secondary' className='text-center'>
            CRM
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default App
