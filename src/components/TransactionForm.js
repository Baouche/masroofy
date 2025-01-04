import React, { useState } from "react";

const TransactionForm = ({ onSubmit }) => {
  const [transaction, setTransaction] = useState({
    name: "",
    amount: "",
    date: "",
    category: "",
    type: "income", // Default type
    notes: "",
  });

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(transaction);
    setTransaction({
      name: "",
      amount: "",
      date: "",
      category: "",
      type: "income",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Transaction Name"
        value={transaction.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount (DZD)"
        value={transaction.amount}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={transaction.date}
        onChange={handleChange}
        required
      />
      <select
        name="category"
        value={transaction.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option value="Groceries">Groceries</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="notes"
        placeholder="Notes (optional)"
        value={transaction.notes}
        onChange={handleChange}
      ></textarea>
      <div className="type-buttons">
        <button
          type="button"
          className={transaction.type === "income" ? "active" : ""}
          onClick={() => setTransaction({ ...transaction, type: "income" })}
        >
          Income
        </button>
        <button
          type="button"
          className={transaction.type === "expense" ? "active" : ""}
          onClick={() => setTransaction({ ...transaction, type: "expense" })}
        >
          Expense
        </button>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
