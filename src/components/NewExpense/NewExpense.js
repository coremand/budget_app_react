import React, { useState } from 'react';
import ExpenseForm from "./ExpenseForm";
import "../../styles/NewExpense.css";

export default function NewExpense({ onAddExpense }) {

    const [IsEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
        setIsEditing(false)
    };

    const startEditingHandler = () => {
        return setIsEditing(true)
    }

    const stopEditingHandler = () => {
       return setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!IsEditing ? <button onClick={startEditingHandler}>Add New Expense</button> :
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} editCancel={stopEditingHandler}/>
            }
        </div>
    )
}
