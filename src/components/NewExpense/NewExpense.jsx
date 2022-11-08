import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [edit, setEdit] = useState(false);

  const expensesDataH = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };

  const confirmEdit = () => {
    setEdit(true);
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  return (
    <div className="new-expense">
      {!edit && <button onClick={confirmEdit}>Add Expenses</button>}
      {edit && (
        <ExpenseForm saveExpenseData={expensesDataH} cancelEdit={cancelEdit} />
      )}
    </div>
  );
};

export default NewExpense;
