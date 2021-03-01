const express = require('express');
const app = express();
const scraper = require("../backend/Routes/scraper")


app.use("/extract", scraper)


const port = process.env.PORT || 8000;

app.listen(port, () => 
console.log(`Server running on port ${port} 🔥`));