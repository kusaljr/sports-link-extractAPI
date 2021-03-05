const request = require("request");
const cheerio = require("cheerio");
const express = require("express")
const router = express.Router();
const Matches = require("../Models/matches")

const LINK = "https://sportsbay.org/sports/football";


router.get("/", (req, res, next) => {
  
 request(LINK , (err ,resp, html) => {
     const $ = cheerio.load(html)
   //  console.log(html);

    $(".filterable").children('tbody').each((i , el) => {
     var result = {}
    
     result.date = $(el).find(".time").children("span").attr("title")
     //date = text

     matchTitle = $(el).find(".play").children("a").attr("title")
     result.match = matchTitle.split(' ').slice(1).join(' ')


     result.matchLink = $(el).find(".play").children("a").attr("href")
   //  console.log(matchLink);
     //link = matchLink
     competition = $(el).find('.competition').children('a').attr("title")
     result.competitionName = competition.split(' ').slice(1).join(' ')

     result.matchLinkcountry = $(el).find('.country').children('a').children('span').attr('title')
       res.status(200).json({
       Message : "Match" + " " + (i+1),
       Matchtime : result.date,
       Matchtitle : result.match,
       Competition : result.competitionName,
       Country : result.matchLinkcountry,
       Link : "https://sportsbay.org" + result.matchLink
     }) 
    })
 })
});

module.exports = router;