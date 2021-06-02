var unirest = require("unirest");
const express = require('express')

const app = express()
const port = process.env.PORT || 3000


var req = unirest("GET", "https://ytstream-download-youtube-videos.p.rapidapi.com/dl");

req.query({
	"id": "SzOl5f4U_v0",
	"geo": "DE"
});

req.headers({
	"x-rapidapi-key": "8307fab07cmsh40ea579e7331fa8p14e058jsna77b65ffe71c",
	"x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
	"useQueryString": true
});

app.get('/data', (request,res) => {
    req.end((response) => {
        const data = response.body
        res.send(data)
    });
})

app.listen(port, () => {
    console.log('server is up on port ' + port)
})