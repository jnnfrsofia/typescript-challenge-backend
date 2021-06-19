import { MongoClient } from "mongodb";

const dbString = "mongodb+srv://fantastic:7WqU4pSbXQmNsanP@challenge.6i8a4.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const dbName = "sample_airbnb";
const dbCol = "listingsAndReviews";

const client = new MongoClient(dbString, {
  useUnifiedTopology: true,
});

let db: any = "";

// connect is the initial db connection
export async function connect() {
  const connection = await client.connect();
  if (connection === null) {
    console.error("Could not connect to db");
  }
  db = connection.db(dbName);
}

// getDeb is the reusable db connection
export function getDb() {
  const col = db.collection(dbCol);
  if (col === null) {
    console.error("Could not retrieve reusable db connection")
  }
  return col;
}









