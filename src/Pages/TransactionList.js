import React from "react";

const TransactionList = ({ transactions, onEdit, onDelete }) => {
  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      {transactions.map((transaction, index) => (
        <div key={index} className="transaction-item">
          <p>
            <strong>{transaction.name}</strong>
            <span>{transaction.amount} DZD</span>
          </p>
          <p>{transaction.date}</p>
          <p>{transaction.category}</p>
          <div className="actions">
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
