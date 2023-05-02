const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, ()=>{
    console.log(`Listening to Port ${PORT}`)
})