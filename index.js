const express = require('express');
const app = express();
const port = 3000;
let message = '';

app.use(express.json());//middleware to parse json data to req.body


app.get('/message', (req, res) => {
  req.body.message = message;
  res.send(req.body)
})

// use curl in terminal to post some data:
// curl -XPOST http://localhost:3000/message -H 'content-type: application/json' -d '{ "message": "Hello, Makers" }'
app.post('/message', (req, res) => {
  message = req.body.message
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})