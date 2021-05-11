import React, { useState } from 'react'
import ExpenseItems from "./ExpenseItems";
import "../styles/Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2019")

    const recievedFilter = (selectedFilter) => {
        setFilteredYear(selectedFilter)
    }

    return (
        <div>
         < ExpenseFilter sendFilter = { recievedFilter } selected={filteredYear}/>
        <Card className="expenses">
            <ExpenseItems title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date}/>
            <ExpenseItems title={props.expense[1].title} amount={props.expense[1].amount} date={props.expense[1].date}/>
            <ExpenseItems title={props.expense[2].title} amount={props.expense[2].amount} date={props.expense[2].date}/>
            <ExpenseItems title={props.expense[3].title} amount={props.expense[3].amount} date={props.expense[3].date}/>
        </Card>
        </div>
    )
}
