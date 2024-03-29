const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const CONNECTION_URL = `mongodb+srv://kushagra:kkkk1234@cluster0.qrese.mongodb.net/bankDB?retryWrites=true&w=majority`;
const path = require('path')


const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    
const con = mongoose.connection

con.on('open', () => {
    
    console.log('connected with MongoDB...')
})

const ceoRouter = require('./routes/ceo')
app.use('/api/customers', ceoRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'react-bank-system','build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'react-bank-system', 'build', 'index.html')); // relative path
    });
}

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT} ...`)
})






// process.env.MONGODB_URI || 
// 'mongodb://localhost/VillainsDB'

// .then(() => app.listen(PORT, () => console.log(`Server started at port ${PORT} ...`)))
    // .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
// mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})