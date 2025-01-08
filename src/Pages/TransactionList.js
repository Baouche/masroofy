import React, { useState } from "react";

const TransactionList = ({ transactions, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditClick = (index) => {
    if (transactions[index]) {
      setEditIndex(index);
      setEditData({
        name: transactions[index].name || "", 
        amount: transactions[index].amount || "", 
        date: transactions[index].date || "",
        category: transactions[index].category || ""
      });
    } else {
      console.error("Transaction at index", index, "is undefined");
    }
  };
  

  const handleSaveEdit = () => {
    console.log("Saving data:", editData); // تحقق من البيانات المدخلة
    if (editData.name && editData.amount && editData.date && editData.category) {
      onEdit(editIndex, editData);
      setEditIndex(null);
      setEditData({});
    } else {
      console.error("Incomplete transaction data");
    }
  };
  
  

  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      {transactions.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666", fontSize: "1.2rem" }}>
          No transactions available. Start adding your income and expenses!
        </p>
      ) : (
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount (DZD)</th>
              <th>Date</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                {editIndex === index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editData.name || ""}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={editData.amount || ""}
                        onChange={(e) =>
                          setEditData({ ...editData, amount: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={editData.date || ""}
                        onChange={(e) =>
                          setEditData({ ...editData, date: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editData.category || ""}
                        onChange={(e) =>
                          setEditData({ ...editData, category: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <button onClick={handleSaveEdit}>Save</button>
                      <button onClick={() => setEditIndex(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{transaction.name}</td>
                    <td>{transaction.amount.toLocaleString()}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.category}</td>
                    <td>
                      <button
                        className="action-btn edit-btn"
                        onClick={() => handleEditClick(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => onDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionList;
