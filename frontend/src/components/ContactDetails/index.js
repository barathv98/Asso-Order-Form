import { Container, Form } from "react-bootstrap";
import './styles.scss';

function ContactDetails({ setSchoolName, setSchoolAddress, setSchoolMobile, nameError, addressError, mobileError }) {
    return (
        <div className="contact_details_container">
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>School Name</Form.Label>
                        <textarea className="contact_textarea" rows="3"
                            placeholder="Enter school name" 
                            onChange={e => setSchoolName(e.target.value)}>
                        </textarea>
                        {nameError && <span className="error">{nameError}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact Address</Form.Label>
                        <textarea className="contact_textarea" rows="3"
                            placeholder="Enter contact address" 
                            onChange={e => setSchoolAddress(e.target.value)}>
                        </textarea>
                        {addressError && <span className="error">{addressError}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact Mobile</Form.Label>
                        <Form.Control type="tel"
                            placeholder="Enter mobile no" 
                            onChange={e => setSchoolMobile(e.target.value.trim())}
                        />
                        {mobileError && <span className="error">{mobileError}</span>}
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default ContactDetails;