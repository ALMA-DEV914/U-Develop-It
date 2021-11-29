const mysql = require(mysql2);
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
//use middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'Alma Braun',
      // Your MySQL password
      password: 'Almita3758',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

app.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    });
});
//Default response for any other request(Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
})