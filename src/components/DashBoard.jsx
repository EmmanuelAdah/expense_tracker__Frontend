// pages/Dashboard.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../styles/dashBoard.module.css";
import AddExpensePopup from "./AddExpensePopup";

export default function DashBoard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const categories = ["Food", "Transport", "Utilities", "Entertainment"];
  
  const handleSaveExpense = (expense) => {
    console.log("New Expense:", expense);
    // You can add your API call or Redux action here
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className={styles.heading}>Expense Tracker Dashboard</h2>
      <div className={styles.grid}>
        <button className={styles.card}
        onClick={() => setIsPopupOpen(true)}
        >
          ➕ Add Expense
        </button>
        <Link to="/view-expenses" className={styles.card}>📋 View Expenses</Link>
        <Link to="/add-income" className={styles.card}>💰 Add Income</Link>
        <Link to="/search-expenses" className={styles.card}>🔍 Search Expenses</Link>
        
        <AddExpensePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSave={handleSaveExpense}
        categories={categories}
      />
      </div>
    </motion.div>
  );
}
