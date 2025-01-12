// script to start server with cors enabled
import express from "express";
import cors from "cors";
import orders from "./routes/order.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/order", orders);

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
