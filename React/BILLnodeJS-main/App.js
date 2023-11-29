import React, { useState } from 'react';
import './App.css';

function App() {
  const [units, setUnits] = useState('');
  const [billAmount, setBillAmount] = useState(null);

  const calculateBill = async () => {
    try {
      const response = await fetch('/api/calculate-bill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ units: parseInt(units, 10) }),
      });

      const data = await response.json();
      setBillAmount(data.billAmount);
    } catch (error) {
      console.error('Error calculating bill:', error);
    }
  };

  return (
    <div className="App">
      <h2>Electricity Bill Calculator</h2>
      <div className="calculator">
        <label htmlFor="units">Enter Units:</label>
        <input
          type="text"
          id="units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          placeholder="Enter units"
        />

        <button onClick={calculateBill}>Calculate</button>

        {billAmount !== null && (
          <p>Electricity Bill Amount: Rs. {billAmount}</p>
        )}
      </div>
    </div>
  );
}

export default App;

