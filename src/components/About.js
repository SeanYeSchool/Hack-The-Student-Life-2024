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
                <b>Here's some background about "Counter Conflict".</b>
                <br/>
                <br/>
                All of us face scheduling conflicts in our day-to-day lives.
                And that is what inspired our team to build a project which focuses on implementing a calendar with a goal to help resolve scheduling conflicts.
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