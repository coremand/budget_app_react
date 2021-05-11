import React, { useState } from 'react';
import "../../styles/ExpenseForm.css";


export default function ExpenseForm({onSaveExpenseData}) {

    const [TitleInput, setTitleInput] = useState("");
    const [AmountInput, setAmountInput] = useState("");
    const [DateInput, setDateInput] = useState("");

    const titleChangeHandler = (event) => {
        setTitleInput(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmountInput(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDateInput(event.target.value)
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: TitleInput,
            amount: AmountInput,
            date: new Date(DateInput)
        }
        onSaveExpenseData(expenseData);
        setTitleInput("");
        setAmountInput("");
        setDateInput("");
    };

    return (
        <form onSubmit= { submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange= { titleChangeHandler } value={ TitleInput }/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.00" step="0.01" onChange={ amountChangeHandler } value={ AmountInput }/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="01-01-2019" max="12-31-2022" onChange={ dateChangeHandler } value={ DateInput }/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
