import { useState } from "react";
import { isMobile } from 'react-device-detect';
import "./styles.scss";

function BookRow({book, modifyOrders, costsList}) {
    const [quants, setQuants] = useState(0);
    const [cd, setCd] = useState(false);
    const [question, setQuestion] = useState(false);
    return (
        <div className="book_row" key={book.id}>
            <div className="row_title">
                <span>{book.title}</span>
                <span>{book.sub_title}</span>
            </div>
            <div className="row_price">₹ {book.price + (cd && book.cd_price) + (question && book.question_price)}</div>
            <div className="row_quantity">
                <input type="number" className="quantity_form" id={book.id}
                    value={quants}
                    onChange={e => {
                        let count = isNaN(e.target.value) ? 0 : parseInt(e.target.value)
                        setQuants(count);
                        modifyOrders(book.id, count, cd, question, book)
                    }}
                    onFocus={e => {
                        if(isNaN(e.target.value) || e.target.value == 0)
                            e.target.value = ""
                    }}
                    onBlur={e => {
                        if(isNaN(parseInt(e.target.value)))
                            e.target.value = 0
                    }}
                />
                {book.cd
                    ? (<div className={`extra_quants ${isNaN(quants) || quants == 0 ? "disabled" : ""}`}>
                        <input type="checkbox" className="checkbox"
                            onChange={e => { 
                                setCd(e.target.checked);
                                modifyOrders(book.id, quants, e.target.checked, question, book)
                            }}
                        />
                        {isMobile ? "CD" : "Include CD"}
                        </div>
                    )
                    : ""
                }
                {book.question
                    ? (<div className={`extra_quants ${isNaN(quants) || quants == 0 ? "disabled" : ""}`}>
                        <input type="checkbox" className="checkbox"
                            onChange={e => { 
                                setQuestion(e.target.checked);
                                modifyOrders(book.id, quants, cd, e.target.checked, book)
                            }} 
                        />
                        {isMobile ? "Question" : "Include Question"}
                        </div>
                    )
                    : ""
                }
            </div>
            <div className="row_cost">{!isNaN(costsList.get(book.id)) && costsList.get(book.id) !== 0 ? <>₹ {costsList.get(book.id)}</> : ""}</div>
        </div>
    )
}

export default BookRow;