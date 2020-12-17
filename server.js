const express = require('express')
const mongoose = require('mongoose')
const url = process.env.MONGODB_URI || 'mongodb://localhost/VillainsDB'
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

PORT = process.env.PORT || 5000;

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {

    console.log('connected with MongoDB...')
})

const ceoRouter = require('./routes/ceo')
app.use('/api/customers', ceoRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./react-bank-system/build'));
}

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT} ...`)
})

