import './App.css';
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses =  [
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
  
   const addExpenseHandler = (expense) => {
     console.log("In App.js")
     console.log(expense)
   }


  return (
    <div className="App">
      <NewExpense onAddExpense={ addExpenseHandler }/>
      <Expenses expense={expenses}/>
    </div>
  );
}

export default App;
