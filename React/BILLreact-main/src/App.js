import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Create this file for additional styling

function App() {
  const [units, setUnits] = useState('');
  const [billAmount, setBillAmount] = useState(null);

  const calculateBill = () => {
    const unitsConsumed = parseInt(units, 10);

    if (isNaN(unitsConsumed) || unitsConsumed < 0) {
      alert('Please enter a valid number of units.');
      return;
    }

    let rate = 0;

    if (unitsConsumed <= 50) {
      rate = 3.5;
    } else if (unitsConsumed <= 150) {
      rate = 4.0;
    } else if (unitsConsumed <= 250) {
      rate = 5.2;
    } else {
      rate = 6.5;
    }

    const calculatedAmount = unitsConsumed * rate;
    setBillAmount(calculatedAmount.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Electricity Bill Calculator</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <label htmlFor="units">Enter Units:</label>
              <input
                type="text"
                id="units"
                className="form-control mb-3"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                placeholder="Enter units"
              />

              <button
                className="btn btn-primary"
                onClick={calculateBill}
              >
                Calculate
              </button>

              {billAmount !== null && (
                <p className="mt-3">
                  Electricity Bill Amount: Rs. {billAmount}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
