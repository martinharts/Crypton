const connectDB = require('./startup/database');
const express = require('express');
const app = express();
const cors = require('cors');



connectDB();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server started on port: ${port}`);
})