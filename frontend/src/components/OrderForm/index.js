import { useState } from "react";
import axios from "axios";
import ConfirmForm from "../ConfirmForm";
import { Container } from "react-bootstrap";
import { booksList } from "../../data/list";
import { sectionList, subSectionList } from "../../data/section";
import "./styles.scss";
import BookRow from "../BookRow";
var costsList = new Map();

function OrderForm() {
    const [schoolName, setSchoolName] = useState("");
    const [schoolAddress, setSchoolAddress] = useState("");
    const [schoolMobile, setSchoolMobile] = useState("");
    const [nameError, setNameError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [mobileError, setMobileError] = useState("")
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    const calculateTotal = () => {
        let tot = 0;
        for(const value of costsList.values()) {
            tot += value;
        }
        setTotal(tot)
    }
    
    const modifyOrders = (id, quantity, cd, question, book) => {
        let temp = [...orders];
        const index = temp.findIndex(ele => ele.id === id)
        if (!isNaN(parseInt(quantity)) && parseInt(quantity) !== 0) {
            const obj = {
                id: id,
                quantity: 0,
                cd: false,
                question: false,
                terms: "all",
                neededTerms: [],
                cost: 0
            }
            obj["quantity"] = quantity;
            obj["cd"] = cd;
            obj["question"] = question
            let cost = 0;
            cost = quantity * book.price;
            if (cd)
                cost += quantity * book.cd_price;
            if (question)
                cost += quantity * book.question_price;
            console.log(cost)
            obj["cost"] = cost;
            if (index === -1)
                temp.push(obj);
            else {
                temp[index]["quantity"] = quantity;
                temp[index]["cd"] = cd;
                temp[index]["question"] = question;
                temp[index]["cost"] = cost;
            }
            costsList.set(id, cost);
        }
        else {
            if (index !== -1) {
                temp.splice(index, 1);
                costsList.delete(id);
            }
        }
        setOrders(temp)
        calculateTotal();
    }
    const submitOrder = () => {
        setLoading(true)
        let errorFlag = false;
        if(schoolName.length === 0) {
            setNameError("School name is missing");
            errorFlag = true
        }
        if(schoolAddress.length === 0) {
            setAddressError("School address is missing");
            errorFlag = true
        }
        if(schoolMobile.length === 0) {
            setMobileError("Contact mobile is missing");
            errorFlag = true
        }
        else if(!schoolMobile.match(/^\d{10,11}$/)) {
            setMobileError("Enter a valid mobile number")
            errorFlag = true
        }
        if(!errorFlag)
            callOrderApi();
        setLoading(false)
    }
    const callOrderApi = async() => {
        const data = await axios({
            method: "post",
            url: "/api/confirm-order",
            data: {
                orders: orders,
                total: total,
                schoolInfo: {
                    name: schoolName,
                    address: schoolAddress,
                    mobile: schoolMobile
                }
            },
            responseType: 'blob'
        })
        // if(data.status === 200)
        //     window.location.replace("/success");
        // else
        //     alert("Order creation is failed. Please try after some time")
        // const url = window.URL.createObjectURL(new Blob([data.fileStream]));
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', 'file.pdf'); //or any other extension
        // document.body.appendChild(link);
        // link.click();
    }
    return (
        <>
        <div className="order_form">
            <span className="form_title">Order Form</span>
            <Container>
                <div className="sections_container">
                {sectionList.map(section => {
                    return (
                        <div className="indl_section">
                            <h3>{section.title}</h3>
                            {section.subSections.map((sb) => {
                                return (
                                    subSectionList.map(sub => {
                                        return (
                                            <>
                                                {sb === sub.id 
                                                ? (
                                                    <>
                                                        {sub.title.length > 0 ? <div className="sub_section_title">{sub.title}</div> : ""}
                                                        {sub.booksId.map(bk => {
                                                            return (
                                                                booksList.map(book => {
                                                                    return (
                                                                        <>
                                                                            {bk === book.id
                                                                            ? ( 
                                                                                <BookRow book={book} modifyOrders={modifyOrders} costsList={costsList} />
                                                                            )
                                                                            : ""
                                                                            }
                                                                        </>
                                                                    )
                                                                })
                                                            )
                                                        })}
                                                    </>
                                                )
                                                : ""}
                                            </>
                                        )
                                    })
                                )
                            })}
                        </div>
                    )
                })}
                </div>
            </Container>        
        </div>
        {orders.length > 0 &&
            <ConfirmForm
                schoolName={schoolName}
                setSchoolName={setSchoolName}
                schoolAddress={schoolAddress}
                setSchoolAddress={setSchoolAddress}
                schoolMobile={schoolMobile}
                setSchoolMobile={setSchoolMobile}
                nameError={nameError}
                addressError={addressError}
                mobileError={mobileError}
                total={total} 
                submitOrder={submitOrder}
                loading={loading}
            />
        }
        </>
    )
}

export default OrderForm;