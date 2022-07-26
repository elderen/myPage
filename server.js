const express = require("express"),
      parser = require("body-parser"),
      path = require("path"),
      cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(parser.json())
app.use(cors())

app.listen(port, ()=>{
  console.log(`<==== My Page running on port ${port} ===>`)
})