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
    
    if (transaction.name && transaction.amount && transaction.date && transaction.category) {
      setTransactions([...transactions, transaction]);
    } else {
      console.error("Incomplete transaction data");
    }
  };

  const editTransaction = (index, updatedTransaction) => {
    const updatedTransactions = [...transactions]; 
    updatedTransactions[index] = updatedTransaction; 
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
            transactions={transactions.filter((t) => t)} 
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
        <h1>👛Masroofy</h1>
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
