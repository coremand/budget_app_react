import React, { useState } from "react";
import './App.css';
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const data =  [
  {
    id:"e1",
    title: "Video Game",
    amount: 500,
    date: new Date(2021, 5, 12)
  },
  {
    id: "e2",
    title: "Furniture",
    amount: 600,
    date: new Date(2021, 4, 26)
  },
  {
    id: "e3",
    title: "Monitor",
    amount: 900,
    date: new Date(2021, 4, 20)
  },
  
  {
    id: "e4",
    title: "Water Case",
    amount: 100,
    date: new Date(2021, 4, 19)
  }
]

function App() {

  const [expenses, setExpenses] = useState(data)

   const addExpenseHandler = (expense) => {
     setExpenses((prevExpenses) => { return [expense, ...prevExpenses]})
   }


  return (
    <div className="App">
      <NewExpense onAddExpense={ addExpenseHandler }/>
      <Expenses items ={expenses}/>
    </div>
  );
}

export default App;
