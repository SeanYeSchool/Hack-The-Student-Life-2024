import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../components/thumbnail.png'

function Home() {
  return (
    <Container>
      <Row>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Meet Counter Conflicts</Card.Title>
              <Card.Text>
                <img src={logo} alt="Logo"/>
                <br/>
                <br/>
                Try out our calendar which resolves scheduling conflicts..!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Home;