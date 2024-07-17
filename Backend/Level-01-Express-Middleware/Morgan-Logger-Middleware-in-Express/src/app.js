const express = require('express');
const morganMiddleware = require('./morganMiddleware');

const app = express();

// Use Morgan middleware
app.use(morganMiddleware);

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/get-users', (req, res) => {
  res.status(200).send('Users List');
});

app.post('/add-user', (req, res) => {
  res.status(201).send('User added successfully');
});

app.put('/user/:id', (req, res) => {
  res.status(201).send(`User with ID ${req.params.id} updated successfully`);
});

app.delete('/user/:id', (req, res) => {
  res.send(`User with ID ${req.params.id} deleted successfully`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
