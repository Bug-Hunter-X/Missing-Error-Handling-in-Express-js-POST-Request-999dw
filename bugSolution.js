const express = require('express');
const app = express();
app.use(express.json());
const {body, validationResult} = require('express-validator'); //add express-validator

app.post('/users', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const user = req.body; 
  console.log('Received user:', user);
  res.status(201).send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));