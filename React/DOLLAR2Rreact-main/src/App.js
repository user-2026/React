import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Example exchange rates as of January 2022
  const exchangeRates = {
    inr: 83.33,  // 1 USD = 75 INR
    eur: 0.91,  // 1 USD = 0.85 EUR
    gbp: 0.79,  // 1 USD = 0.75 GBP
  };

  const handleConvert = () => {
    const converted = amount * exchangeRates[currency];
    setConvertedAmount(converted);
  };

  return (
    <div className="App">
      <h2>Currency Converter</h2>
      <div className="converter">
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        
        <label htmlFor="currency">Currency:</label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </select>

        <button onClick={handleConvert}>Convert</button>

        {convertedAmount !== null && (
          <p>Converted amount: {convertedAmount.toFixed(2)} {currency}</p>
        )}
      </div>
    </div>
  );
}

export default App;
