import React, { useState } from "react";

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css';

const Expenses = (props) => {
  const [FilteredYear , setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });

  return (
    <div>
        <Card className='expenses'>
            <ExpensesFilter
              selected ={FilteredYear}
              onChangeFilter={filterChangeHandler} 
            />
            <ExpensesChart expenses = {filteredExpenses} />
            <ExpensesList items= {filteredExpenses} />
        </Card>
    </div>
  )
}

export default Expenses