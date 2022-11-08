import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  return (
    <ul className="expenses-list">
      {props.filtered.length === 0 && (
        <p className="expenses-list__fallback">No record found</p>
      )}
      {props.filtered.length > 0 &&
        props.filtered.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  );
};

export default ExpensesList;
