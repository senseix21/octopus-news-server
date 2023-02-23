
const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

const catagories = require('./Data/catagories.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/news-catagories', (req, res) => {
    res.send(catagories)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})