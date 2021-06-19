import { Request, Response } from 'express'
import express from "express";
import { getDb } from "../db";

const router = express.Router();

// revReq contains the id param a user passes via Postman or Insomnia
interface revReq {
  id: string
}

router.get("/:id", async (req: Request, res: Response) => {
  let qry = req.query as unknown

  // set the query
  const q = qry as revReq;

  // get the reusable db connection
  const db = getDb();

  // run the query to find listing for the id
  const results = await db.findOne(q);

  res.json(await results);

});

export { router as Reviews };


