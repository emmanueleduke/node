const express = require('express');
const app = express();
const port = 3000; // You can change this to the desired port number

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

