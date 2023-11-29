import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('usd');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const exchangeRates = {
    usd: 0.014,  // 1 INR = 0.014 USD
    eur: 0.012,  // 1 INR = 0.012 EUR
    gbp: 0.011,  // 1 INR = 0.011 GBP
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
          <option value="usd">USD</option>
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
