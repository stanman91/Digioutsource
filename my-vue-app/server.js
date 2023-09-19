// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const message = {
    register: 'Register',
    money: '$1,600',
    deposit: 'Deposit Bonus',
    sign: 'Sign up',
};

//REST API endpoint
app.get('/api/page', (req, res) => {
  res.json({ message });
});

//API test
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
