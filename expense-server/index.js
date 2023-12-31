const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;
const { MongoClient, ServerApiVersion } = require("mongodb");

// //middleware
// app.use(
//   cors({
//     origin: ["http://localhost:5173"],
//     credentials: true,
//   })
// );
// //access post body and convert into json format
// app.use(express.json());

//middleware
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
//access post body and convert into json format
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.es62grd.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    //create a database and database collection
    const expensetCollection = client.db("expenseTracker").collection("expense");

    //using post method to store contact info in the database
    app.post("/expense", async (req, res) => {
      const allExpense = req.body;
      console.log(allExpense);
      const result = await expensetCollection.insertOne(allExpense);
      res.send(result);
    });

    console.log("DB successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);

//for testing
app.get("/", (req, res) => {
  res.send("expense server is running");
});

app.listen(port, () => {
  console.log(`expense server is running on port ${port}`);
});
