const express = require('express');
const app = express();
const port = 3000;
let message = '';
let counter = 0;

app.use(express.json());//middleware to parse json data to req.body

//exercise 1
app.get('/message', (req, res) => {
  req.body.message = message;
  res.send(req.body);
})

app.post('/message', (req, res) => {
  message = req.body.message;
})

//exercise 2
app.get('/counter', (req, res) => {
  req.body.counter = counter;
  res.send(req.body);
})

app.post('/counter', (req, res) => {
  counter++;
  res.send("counter incremented by 1");
})

app.delete('/counter', (req, res) => {
  counter = 0;
  res.send("counter reset to 0");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})