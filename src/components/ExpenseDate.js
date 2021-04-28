import React from 'react'
import "../styles/ExpenseDate.css";



export default function ExpenseDate({date}) {

    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit"});
    const year = date.getFullYear();

    return (
        <div>
            <div className="expense-date">
                <div>{month}</div>
                <div>{day}</div>
                <div className="expense-date__day">{year}</div>
            </div>
        </div>
    )
}
