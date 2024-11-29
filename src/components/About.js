import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){
    return (
    <Container>
      <Row>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
                Here's some background about our team.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    );
}

export default About;