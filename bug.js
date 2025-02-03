const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling if user object is incomplete or invalid
  console.log('Received user:', user); 
  res.status(201).send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));