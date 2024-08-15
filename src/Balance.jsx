import React from 'react';

const Balance = () => {
    return(
        <div class="wallet-container">
        <div class="wallet-balance">
            <h3>Wallet Balance: ₹4500</h3>
            <button class="income-button">+ Add Income</button>
        </div>
        <div class="expenses-balance">
            <h3>Expenses: ₹500</h3>
            <button class="expense-button">+ Add Expense</button>
        </div>
    </div>
    
    );
};

export default Balance;