import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalTemplate from "../ModalTemplate";
import './styles.scss';

function ConfirmForm(props) {
    const { total, submitOrder, schoolName, setSchoolName, nameError, schoolAddress, setSchoolAddress, addressError, schoolMobile, setSchoolMobile, mobileError, loading } = props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="confirm_container">
            <div>
                <Button variant="primary" className="confirm_btn" onClick={() => handleShow()}>Place Order</Button>
            </div>
            {total > 0 &&
                <div className="price_calculation">
                    <div><span className="price-label">Total: </span><span className="net-total">₹ {total}</span></div>
                </div>
            }
            <ModalTemplate 
                submitOrder={submitOrder}
                schoolName={schoolName}
                setSchoolName={setSchoolName}
                schoolAddress={schoolAddress}
                setSchoolAddress={setSchoolAddress}
                schoolMobile={schoolMobile}
                setSchoolMobile={setSchoolMobile}
                nameError={nameError}
                addressError={addressError}
                mobileError={mobileError}
                show={show}
                handleClose={handleClose}
                loading={loading}
            />
        </div>
    )
}

export default ConfirmForm;