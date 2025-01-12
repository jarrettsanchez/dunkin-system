// script to connect client to server
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // connect client to server
  await client.connect();

  // ping server to confirm successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. Successfully connected to MongoDB.");
} catch (err) {
  console.error(err);
}

let db = client.db("orders");

export default db;
