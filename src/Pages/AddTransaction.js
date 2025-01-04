import React from "react";
import TransactionForm from "../components/TransactionForm"; 

const AddTransaction = ({ onAddTransaction }) => {
  return (
    <div className="add-transaction">
      <h2>Add New Transaction</h2>
      <TransactionForm onSubmit={onAddTransaction} />
    </div>
  );
};

export default AddTransaction;
