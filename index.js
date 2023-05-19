const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')
const categories = require('./data/news.json')


app.use(cors());


app.get('/', (req, res) => {
    res.send('News is running');
}) 

app.get('/categories' , (req,res) => {
res.send(categories);
})


app.listen(port, () => {
    console.log(`News API Is Running on Port : ${port}`)
});