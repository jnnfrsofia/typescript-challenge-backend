import { MongoClient } from "mongodb";

const dbString = "mongodb+srv://fantastic:7WqU4pSbXQmNsanP@challenge.6i8a4.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

const client = new MongoClient(dbString);
let db: any = "";

// connect is the initial db connection
export async function connect() {
  const connection = await client.connect();
  db = connection.db("sample_airbnb");
}

// getDb is the reusable db connection
export function getDb() {
  const col = db.collection("listingsAndReviews");
  return col;
}







