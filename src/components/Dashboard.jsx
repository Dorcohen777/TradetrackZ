import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [stockName, setStockName] = useState('');
  const [entryPrice, setEntryPrice] = useState('');
  const [exitPrice, setExitPrice] = useState('');
  const [totalShares, setTotalShares] = useState('');

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // create a new transaction object
    const newTransaction = {
      stockName,
      totalShares,
      entryPrice,
      exitPrice,
    };

    // add the new transaction to the list of transactions
    setTransactions([...transactions, newTransaction]);

    // clear the form inputs
    setStockName('');
    setEntryPrice('');
    setExitPrice('');
    setTotalShares('');
  };

  // calculate the total P/L from all transactions
  const totalPL = transactions.reduce(
    (total, transaction) => {
      const { entryPrice, exitPrice, totalShares } = transaction;
      const pl = (exitPrice * totalShares) - (entryPrice * totalShares);
      return total + pl;
    },
    0
  );

  // calculate the total winrate % from all transactions
  const totalWinRate =
    transactions.length > 0
      ? transactions.reduce((total, transaction) => {
        const { entryPrice, exitPrice, totalShares } = transaction;
        const pl = (exitPrice * totalShares) - (entryPrice * totalShares);
        if (pl > 0) {
          return total + 1;
        } else {
          return total;
        }
      }, 0) / transactions.length
      : null;

  const handleClearTransactions = () => {
    setTransactions([]);
    localStorage.removeItem('transactions');
  };

  return (
    <div className="dashboard-container">
      <h1>Total P/L: {totalPL}$</h1>
      <h2>Total Winrate: {totalWinRate ? (totalWinRate * 100).toFixed(2) + '%' : ''}</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <label htmlFor="stockName">Stock Name:</label>
          <input
            id="stockName"
            type="text"
            value={stockName}
            onChange={(event) => setStockName(event.target.value)}
          />
        </div>

        <div className="form-row">
          <label htmlFor="totalShares">Total Number of shares</label>
          <input
            id="totalShares"
            type="number"
            value={totalShares}
            onChange={(event) => setTotalShares(parseFloat(event.target.value))}
          />
        </div>

        <div className="form-row">
          <label htmlFor="entryPrice">Entry Price:</label>
          <input
            id="entryPrice"
            type="number"
            value={entryPrice}
            onChange={(event) => setEntryPrice(parseFloat(event.target.value))}
          />
        </div>

        <div className="form-row">
          <label htmlFor="exitPrice">Exit Price:</label>
          <input
            id="exitPrice"

            type="number"
            value={exitPrice}
            onChange={(event) => setExitPrice(parseFloat(event.target.value))}
          />
        </div>

        <button type="submit" className="submit-button">Add Transaction</button>
      </form>

      <button onClick={handleClearTransactions} className="clear-button">Clear Transactions</button>

      <table className="transactions-table">
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Total Shares</th>
            <th>Entry Price</th>
            <th>Exit Price</th>
            <th>P/L</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            const { stockName, totalShares, entryPrice, exitPrice } = transaction;
            const pl = (exitPrice * totalShares) - (entryPrice * totalShares);
            return (
              <tr key={index}>
                <td>{stockName}</td>
                <td>{totalShares}</td>
                <td>{entryPrice}$</td>
                <td>{exitPrice}$</td>
                <td>{pl > 0 ? <span className="profit">{pl}$</span> : <span className="loss">{pl}$</span>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;    