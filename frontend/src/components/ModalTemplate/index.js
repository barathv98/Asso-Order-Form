import { Modal, Button } from 'react-bootstrap';
import ContactDetails from '../ContactDetails';
import Spinner from 'react-bootstrap/Spinner';

function ModalTemplate(props) {
    const {submitOrder, schoolName, setSchoolName, nameError, schoolAddress, setSchoolAddress, addressError, schoolMobile, setSchoolMobile, mobileError, show, handleClose, loading } = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Enter school information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactDetails
                    schoolName={schoolName}
                    setSchoolName={setSchoolName}
                    schoolAddress={schoolAddress}
                    setSchoolAddress={setSchoolAddress}
                    schoolMobile={schoolMobile}
                    setSchoolMobile={setSchoolMobile}
                    nameError={nameError}
                    addressError={addressError}
                    mobileError={mobileError} 
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={()=>submitOrder()}>
                    {loading ? <Spinner animation="border" /> : "Confirm Order"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalTemplate;