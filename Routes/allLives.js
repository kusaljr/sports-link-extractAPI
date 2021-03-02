const cheerio = require('cheerio');
const request = require('request');

const LINK = "https://sportsbay.org/sports/football";
request(LINK , (err, res, html) => {
    if(!err && res.status(200)){
        const $ = cheerio.load(html)

        const table = $(".filterable")
        console.log(table)
    }
})