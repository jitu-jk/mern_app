
const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db");
app.use((req, res, next) => {
  res.setHeader("Access-control-Allow-Origin", "http://localhost:3000");
  res.header("Access-control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type,Accept");
  next()

})
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});