import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact(){
    return (
    <Container>
      <Row>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                Please fill out the form below to reach us or report any problems.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    );
}

export default Contact;