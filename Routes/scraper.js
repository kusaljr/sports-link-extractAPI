const request = require("request");
const cheerio = require("cheerio");
const express = require("express")
const router = express.Router();

const LINK = "https://sportsbay.org/sports/football";


router.get("/", (req, res, next) => {
  
 request(LINK , (err ,resp, html) => {
     const $ = cheerio.load(html)

     var list = []

     $("tbody> tr").each(function (index, element) {
      var league = $(element).find('.competition > a').text()
      var date = $(element).find('.time > span').text()
      var game = $(element).find('.event > a.summary').text()
      var link = $(element).find('.event > a').attr('href')

      list.push({
          Matchtitle: game,
          Matchtime: date,
          Competition: league,
          MatchLink: "https://sportsbay.org"+link
      })
    });

    res.status(200).json({
      list
    })

 })
});

module.exports = router;
