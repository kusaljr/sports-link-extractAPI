const express = require('express');
const app = express();
const scraper = require("../backend/Routes/scraper")
const mongoose = require("mongoose")
//const scrapeAll = require("../backend/Routes/allLives")

//app.use("/extractall", scrapeAll)



// mongoose.connect("mongodb+srv://firstapi:" 
//   + process.env.ATLAS_MONGO_PW + 
//   "@firstapi.ypomx.mongodb.net/matches?retryWrites=true&w=majority" , 
// {
//     useNewUrlParser: true,
//     useUnifiedTopology : true,
// })

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use("/extract", scraper)



const port = process.env.PORT || 8000;

app.listen(port, () => 
console.log(`Server running on port ${port} 🔥`));