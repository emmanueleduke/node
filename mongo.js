const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

// Connect to MongoDB
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.error('Failed to connect to the database');
    return;
  }

  const db = client.db('mydatabase');

  app.post('/create', (req, res) => {
    // Insert data into the database
    const data = req.body; // Assuming you have data in the request body
    db.collection('mycollection').insertOne(data, (err, result) => {
      if (err) {
        res.status(500).send('Error creating data');
      } else {
        res.status(201).send('Data created');
      }
    });
  });

  app.get('/read', (req, res) => {
    // Retrieve data from the database
    db.collection('mycollection').find({}).toArray((err, data) => {
      if (err) {
        res.status(500).send('Error reading data');
      } else {
        res.json(data);
      }
    });
  });

  // Add routes for updating and deleting data as needed.

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

