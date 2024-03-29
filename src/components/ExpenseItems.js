import React from 'react';
import "../styles/ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card"

export default function ExpenseItems({title, amount, date}) {

    
    return (
        <Card className="expense-item">
            <ExpenseDate date = {date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>

        </Card>
    )
}
