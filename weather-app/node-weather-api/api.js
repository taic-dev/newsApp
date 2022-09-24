const express = require("express");
const app = express();
const router = express.Router();
const port = 3001;
const axios = require("axios");
const { decycle, encycle } = require('json-cyclic');

// jsonの受け取り
app.use(express.json());

// cors対策
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTION"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.get('/', async (req,res)=>{
    const URL = "https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&current_weather=true&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia%2FTokyo&current_weather"
    await axios.get(URL).then(result=>{
        res.json(result.data);
    })
});

app.get('/prefectures', async (req,res)=>{
    const URL = "https://geoapi.heartrails.com/api/json?method=getPrefectures";
    await axios.get(URL).then(result=>{
        res.json(result.data);
    });
});


app.get('/city', async (req,res)=>{
    const URL = "http://geoapi.heartrails.com/api/json?method=getCities&prefecture=%E6%9D%B1%E4%BA%AC%E9%83%BD";
    await axios.get(URL).then(result=>{
        res.json(result.data);
    });
});

app.post('/change-city', async (req,res)=>{
    let prefecture = req.body.prefecture;
    let URL = encodeURI(`http://geoapi.heartrails.com/api/json?method=getCities&prefecture=${prefecture}`);
    await axios.get(URL).then(result=>{
        res.json(result.data);
    })
})


app.post('/',(req,res)=>{
    res.send("Got a POST request");
});

app.listen(port,() => {
    console.log(`port ${port}`);
});