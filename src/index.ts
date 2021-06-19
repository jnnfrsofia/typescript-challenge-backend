import express from "express";
import { Stays } from "./stays";
import { Reviews } from "./reviews";
import { connect } from "./db";

const port = 3000;
const app = express();

app.use("/stays", Stays);
app.use("/reviews", Reviews);

// this is where we initialize the db connection
connect();

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

