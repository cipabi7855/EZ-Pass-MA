import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <input type="text" placeholder="Enter Toll Location" />
      <input type="number" placeholder="Amount" />
      <button>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
