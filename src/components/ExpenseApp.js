import React,{useState} from 'react'
import OverView from './OverView';
import Transaction from './Transaction';

function ExpenseApp() {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transaction, setTransaction] = useState([]);

    const addTransaction=(formValues)=>{
        const newObj={...formValues , id:Date.now()};
        setTransaction([...transaction , newObj]);

    }

    return (
        <section className='app-container'>
            <OverView income={income} expense={expense} addTransaction={addTransaction}/>
            <Transaction transaction={transaction}/>            
        </section>
    )
}

export default ExpenseApp
