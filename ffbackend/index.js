const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
const monk = require('monk')
const MongoClient = require('mongodb').MongoClient

const url ='mongodb+srv://hanshherd:<password>@firstcluster-3kte1.mongodb.net/test?retryWrites=true'
const db = monk(url)
db.then(() => {

    console.log('connected')
    
    })
    
const timeSheets= db.get('')

app.use(cors())
app.use(bodyParser.json)

app.get('/',async function (req, res) {

    const results = await timeSheets.find()
    res.status(200).send(results)
    })
    
    app.post('/',async function (req, res) {
    
    const results = await timeSheets.insert(req.body)
    res.status(200).send(results)
    })
    
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))