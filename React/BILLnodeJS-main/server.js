const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint to calculate electricity bill
app.post('/api/calculate-bill', (req, res) => {
  const units = req.body.units;
  let billAmount = 0;

  if (units <= 50) {
    billAmount = units * 3.5;
  } else if (units <= 150) {
    billAmount = 50 * 3.5 + (units - 50) * /* Updated rate for next 100 units */ 4.5;
  } else {
    // Handle additional conditions as needed
    // ...
  }

  res.json({ billAmount });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
