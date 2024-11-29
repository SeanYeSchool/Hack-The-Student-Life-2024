import Form from 'react-bootstrap/Form';
import './Contact.css'
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <div className="container">

            <Form className='form'>
                <h3>Please fill out this form to report any issue or get in touch with us.</h3>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter your message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className="button" variant="primary">Submit</Button>
            </Form>
        </div>

    );
}

export default Contact;