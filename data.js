const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/', (req, res) => {

  const referrer = req.body.referrer;

  const time_spent = req.body.time_spent;

  const user_agent = req.body.user_agent;

  

  console.log("Referrer: " + referrer);

  console.log("Time spent: " + time_spent);

  console.log("User agent: " + user_agent);

  

  const mysql = require('mysql');

  

  const connection = mysql.createConnection({

    host: 'db4free.net',

    user: 'abhinavd',

    password: 'qwerty12345',

    database: 'deeznuts'

  });

  

  connection.connect();

  

  const sql = "INSERT INTO visits (referrer, time_spent, user_agent) VALUES (?, ?, ?)";

  const values = [referrer, time_spent, user_agent];

  

  connection.query(sql, values, (error, results) => {

    if (error) {

      console.log("Error: " + error);

    } else {

      console.log("New record created successfully");

    }

    connection.end();

  });

});

app.listen(3000, () => {

  console.log("Server running at port 3000");

});

