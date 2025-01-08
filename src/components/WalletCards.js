import React from "react";

const WalletCards = () => {
  const totalIncome = 0; 
  const totalExpenses = 0; 
  const balance = totalIncome - totalExpenses;
  

  return (
    <div className="wallet-cards">
      <div className="card income-card">
        <h3>Total Income</h3>
        <p>{totalIncome} DZD</p>
      </div>
      <div className="card expense-card">
        <h3>Total Expenses</h3>
        <p>{totalExpenses} DZD</p>
      </div>
      <div className="card balance-card">
        <h3>Balance</h3>
        <p>{balance} DZD</p>
      </div>
    </div>
  );
};

export default WalletCards;
