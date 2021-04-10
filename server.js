// require express
const express = require("express");

// instance express
const app = express();

// require dotenv
require("dotenv").config();

//connect DB
const connectDB = require("./config/connectDB");
connectDB();

//routing
app.use(express.json());

app.use("/api/user", require("./route/user"));
app.use("/api/owner", require("./route/owner"));
app.use("/api/owner/terrain", require("./route/terrain"));

//port
const PORT = process.env.PORT;

// create server
app.listen(PORT, (error) => {
  error
    ? console.error(`Failed to connect to server ${error}`)
    : console.log(`Server is runnig on port${PORT}`);
});
