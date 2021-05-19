import React, { useState } from 'react'
import ExpenseItems from "./ExpenseItems";
import "../styles/Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses({ items }) {

    const [filteredYear, setFilteredYear] = useState("2019")

    const recievedFilter = (selectedFilter) => {
        setFilteredYear(selectedFilter)
    };

    const filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    return (
        <div>
         
        <Card className="expenses">
            < ExpenseFilter sendFilter = { recievedFilter } selected={filteredYear}/>
            {filteredExpenses.length === 0 ? (<h2>No Expenses For Selected date.</h2>) : 
               (filteredExpenses.map(( item ) => { return <ExpenseItems key = {item.id} title={item.title} amount = {item.amount} date = {item.date} />}))
            }
            
        </Card>
        </div>
    )
}
