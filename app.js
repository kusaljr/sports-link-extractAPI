const express = require('express');
const app = express();
const scraper = require("../backend/Routes/scraper")
//const scrapeAll = require("../backend/Routes/allLives")

//app.use("/extractall", scrapeAll)

app.use("/extract", scraper)


const port = process.env.PORT || 8000;

app.listen(port, () => 
console.log(`Server running on port ${port} 🔥`));