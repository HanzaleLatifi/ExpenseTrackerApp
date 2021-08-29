import React,{useState} from 'react'
import OverView from './OverView';
import Transaction from './Transaction';

function ExpenseApp() {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transaction, setTransaction] = useState([]);

    return (
        <section className='app-container'>
            <OverView income={income} expense={expense}/>
            <Transaction/>            
        </section>
    )
}

export default ExpenseApp
