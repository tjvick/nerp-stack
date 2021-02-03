import express from "express";
import cors from "cors";
import {PORT} from "./config.js";
import {pool} from "./database/pool.js";
import {readMyTable} from "./database/queries.js";

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/messages", async (req, res) => {
  const {rows} = await pool.query(readMyTable);
  res.json(rows);
})

app.get("/", (req, res) => {
  const responseContent = {
    title: "Hello There!",
    message: "This is a very important message from your local server."
  }
  res.json(responseContent)
})

const server = app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
})

const shutdown = () => {
  server.close(() => {
    console.log("Server closed.");
    pool.end()
      .then(() => {
        console.log("Database connection pool closed.");
        process.exit(0);
      })
  })
}

process.on("SIGINT", shutdown)