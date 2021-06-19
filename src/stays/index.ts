import { Request, Response } from 'express'
import express from "express";
import { getDb } from "../db";

const router = express.Router();

// staysReq is the params the user passes through via Postman or Insomnia
interface staysReq {
  bedrooms?: string
  beds?: string
  bathrooms?: string
  amenities?: string
  page?: string
}

// staysQuery is the query we build with the user provided params
interface staysQuery {
  bathrooms?: number
  amenities?: string[]
  bedrooms?: number
  beds?: number
  page?: number
}

// buildQuery converts the query params into a db friendly query struct
const buildQuery = (q: staysReq) => {
  const { bedrooms, bathrooms, amens, beds, page } = q;

  const query: staysQuery = {};

  // set the query values if they exist
  beds && (query.beds = Number(beds))
  bedrooms && (query.bedrooms = Number(bedrooms))
  bathrooms && (query.bathrooms = Number(bathrooms))
  
  // this only seems to work with one amenity passed as a param
  amens && (query.amenities = amens.split(","))
  // grab the skip number 
  const skip = determinePageSkip(Number(page));

  return { query, skip };
}

// determinePageSkip uses the page query param to determine how many results to skip
const determinePageSkip = (p: number) => {
  const limit = 25;
  let skip = 0;

  // if they want to see past the first page, do some math to figure that out
  if (p > 1) {
    skip = (p - 1) * limit
  }

  return skip;
}


router.post("/", async (req: Request, res: Response) => {
  let qry = req.query as unknown

  const q = qry as staysReq;
  // build the query with the req data
  const { query, skip } = buildQuery(q)

  // get the reusable db connection
  const db = getDb();

  // run the query, limit the results to 25, and set the skip value
  const results = await db.find(query, { limit: 25 }).skip(skip).toArray();

  res.json(await results);
  
  if (results.length == 0) {
    console.error("No results found for your query");
  }

});

export { router as Stays };

