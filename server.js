const express = require('express');
const app = express();
const PORT = 8080;

const people = {
    "entertainment": "Kim K. once got asked to leave the stage by Prince. Later reports revealed that he thought the entire family was 'talentless'",
    "sports": "Ghanaians and Nigerians both have bizarre theories/legends on why Indians were banned from football.(They are both funny)", 
    "technology": "Someone is the world's richest man and no it's not Elon"
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');   //__dirname: wherever the current file(server.js) is and find file.
})                                           // next movie quotes api

app.get('/api/:Facts', (req, res)=>{        //: lets us know that Facts is a query param
    const peopleFacts = req.params.Facts.toLowerCase()
    if(people[peopleFacts]){
        res.json(people[peopleFacts])
    }else{
        res.send('Error')
    }
    
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})