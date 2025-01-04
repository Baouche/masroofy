import React, { useState } from "react";
import Home from './Pages/Home'; 
import AddTransaction from './Pages/AddTransaction';
import TransactionList from './Pages/TransactionList';
import Reports from './Pages/Reports';

import "./App.css"; 

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const editTransaction = (index, updatedTransaction) => {
    const updatedTransactions = transactions.map((t, i) =>
      i === index ? updatedTransaction : t
    );
    setTransactions(updatedTransactions);
  };

  const deleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "addTransaction":
        return <AddTransaction onAddTransaction={addTransaction} />;
      case "transactionList":
        return (
          <TransactionList
            transactions={transactions}
            onEdit={editTransaction}
            onDelete={deleteTransaction}
          />
        );
      case "reports":
        return <Reports transactions={transactions} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Masroofy</h1>
        <nav>
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("addTransaction")}>
            Add Transaction
          </button>
          <button onClick={() => setCurrentPage("transactionList")}>
            Transaction List
          </button>
          <button onClick={() => setCurrentPage("reports")}>Reports</button>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
};

export default App;
