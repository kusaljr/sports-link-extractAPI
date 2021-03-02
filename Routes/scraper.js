const request = require("request");
const cheerio = require("cheerio");
const express = require("express")
const router = express.Router()

const LINK = "https://sportsbay.org/sports/football";
var date;
var match;
var link;
var competitionName;
var countryName;

router.get("/", (req, res, next) => {
  
 request(LINK , (err ,res, html) => {
     const $ = cheerio.load(html)
   //  console.log(html);

     const table = $(".filterable")
        console.log(table)


     const text = $(".time").children("span").attr("title")
    // console.log(text)
     date = text

     const matchTitle = $(".play").children("a").attr("title")
    // console.log(matchTitle)
     match = matchTitle.split(' ').slice(1).join(' ')

     const matchLink = $(".play").children("a").attr("href")
   //  console.log(matchLink);
     link = matchLink

     const competition = $('.competition').children('a').attr("title")
     competitionName = competition.split(' ').slice(1).join(' ')

     const country = $('.country').children('a').children('span').attr('title')
     countryName = country


 })
 res.status(200).json({
       Message : "Scraping Started",
       Match_time : date,
       Match_Title : match,
       Competition : competitionName,
       Country : countryName,
       Link : "https://sportsbay.org" + link
     })
});

module.exports = router;