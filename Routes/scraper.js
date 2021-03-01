const request = require("request");
const cheerio = require("cheerio");
const express = require("express")
const router = express.Router()

const LINK = "https://sportsbay.org/sports/football";
var date;
var match;
var link;

router.get("/", (req, res, next) => {
  
 request(LINK , (err , res, html) => {
     const $ = cheerio.load(html)
   //  console.log(html);
     const text = $("time dtstart").children("span").attr("title")
     console.log(text)
     date = text

     const matchTitle = $("play").children("a").attr("title")
     console.log(matchTitle)
     match = matchTitle

     const matchLink = $(".play").children("a").attr("href")
     console.log(matchLink);
     link = matchLink
 })
 res.status(200).json({
       Message : "Scraping Started",
       Date : date,
       Match : match,
       Link : link
     })
});

module.exports = router;