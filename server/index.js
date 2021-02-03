const express = require("express")
const cors = require("cors");

const app = express();

const PORT = 4000;

app.use(cors())

app.get("/", (req, res) => {
  const responseContent = {
    title: "Hello There!",
    message: "This is a very important message from your local server."
  }
  res.json(responseContent)
})

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
})