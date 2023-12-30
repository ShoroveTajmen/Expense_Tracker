const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(
    cors({
      origin: ["http://localhost:5173"],
      credentials: true,
    })
  );
  //access post body and convert into json format
  app.use(express.json());


  //for testing
app.get("/", (req, res) => {
    res.send("expense-tracker server is running");
  });
  
  app.listen(port, () => {
    console.log(`expense-tracker server is running on port ${port}`);
  });
  