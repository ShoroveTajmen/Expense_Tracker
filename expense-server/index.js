const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

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

let availableFund = 100;

async function run() {
  try {
    //create a database and database collection
    const expensetCollection = client
      .db("expenseTracker")
      .collection("expense");
    const fundCollection = client.db("expenseTracker").collection("fund");

    //get available fund
    app.get("/fund", async (req, res) => {
      const result = await fundCollection.find().toArray();
      res.send(result);
    });
     //get all expense report
    app.get("/expenseReport", async (req, res) => {
      const result = await expensetCollection.find().toArray();
      res.send(result);
    });

    //get data by date
    app.get("/filterExpense", async(req, res) => {
      const fromDate = req.query.fromDate;
      const toDate = req.query.toDate;
      console.log(fromDate, toDate);

      //create a filter object based on the date range
      const dateFilter = {};
      if(fromDate && toDate){
        dateFilter.anotherFormattedDate = {
          $gte: fromDate,
          $lte: toDate,
        }
      }

      const result = await expensetCollection.find(dateFilter).toArray();
      res.send(result);

    })

    //using post method to store available fund
    app.post("/fund", async (req, res) => {
      const availableFund = req.body;
      console.log(availableFund);
      const result = await fundCollection.insertOne(availableFund);
      res.send(result);
    });

    //patch method for update fund
    app.patch("/updateFund/:id", async (req, res) => {
      const item = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          availableFund: item.updateAvailabeFund,
        },
      };
      const result = await fundCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

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
