const express = require('express')
const router = express.Router()
const CEO = require('../models/ceomodel')

router.get('/', async (req, res) => {
    try{
        const ceoData = await CEO.find()
        res.json(ceoData)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async (req, res) => {
    try{
        const ceoData = await CEO.find({id: req.params.id})
        res.json(ceoData)
    }
    catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async (req, res) => {
    const resArr = []
    console.log(req.body)
    req.body.map(obj => {
            const ceoData = new CEO({
            name: obj.name,
            balance: obj.balance,
            id: obj.id,
            img: obj.img
        })

        try{
            const c1 = ceoData.save()
            resArr.push(ceoData)
        }catch(err){
            res.send('Post Error')
        }
    })
    res.send(resArr)
})

router.patch('/:id', async(req, res) => {
    try{
        const {x, add} = req.body;
        const y = parseInt(x)

        const ceoData = await CEO.find({id: req.params.id})

        var b = ceoData[0].balance
        if(add){
            b = b + y;
        }

        if(!add){
            b = b - y;
        }
        const updatedCEO = await CEO.updateOne({id: req.params.id}, { $set: {balance: b}});
        
        res.json(updatedCEO)
    }
    catch(err){
        res.send('Error in patch')
    }
})

module.exports = router









