const express = require('express');
const app = express();

const request = require('request');
const port = 3000;

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("search");
});

app.get("/results", (req, res) => {
    let query = req.query.search;

    let url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";


    request(url, (error, response, body) => {
       if(!error && response.statusCode == 200){
           let data = JSON.parse(body);
           res.render('results', {data: data});
       }
    });
});
// app.get("/results",(req, res) => {
//     res.send("Hello it works");
// });

app.listen(port, () => {
    console.log("Movie app started");
});

