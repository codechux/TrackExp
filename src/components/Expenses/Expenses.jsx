import ExpenseItem from "./ExpenseItem";
import "./expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2019");
  const addFiltervalue = (filterValue) => {
    setFilter(filterValue);
  };

  const filtered = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filteredYear={filter} addFiltervalue={addFiltervalue} />
        <ExpenseChart expenses={filtered} />
        <ExpensesList filtered={filtered} />
      </Card>
    </div>
  );
};

export default Expenses;
