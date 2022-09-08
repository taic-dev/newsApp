const express = require("express");
const app = express();
const port = 3001;

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

app.get('/', (req,res)=>{
    res.send("Hello World");
});

app.post('/',(req,res)=>{
    res.send("Got a POST request");
});

app.listen(port,() => {
    console.log(`port ${port}`);
});