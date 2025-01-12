// set up server API endpoints, allows for CRUD functionalities
import express from "express";
import db from "../db/connections.js"; // helps connect to database
import { ObjectId } from "mongodb"; // converts id from string to ObjectId for the _id

// instance of express router used to define routes
const router = express.Router();

// helps to get list of all records
router.get("/", async (req, res) => {
  let collection = await db.collection("orders");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// helps to get single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("orders");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  // exception handling
  if (!result) res.status(404).send("Not found");
  else res.send(result).status(200);
});

// helps create new record
router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      product_types: req.body.product_types,
      order_details: req.body.order_details,
    };

    let collection = await db.collection("orders");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding order");
  }
});

// helps update record by id
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        product_types: req.body.product_types,
        order_details: req.body.order_details,
      },
    };

    let collection = await db.collection("orders");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating order");
  }
});

// helps delete record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("orders");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting order");
  }
});

export default router;
