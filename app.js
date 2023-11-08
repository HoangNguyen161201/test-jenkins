const express = require('express')

const app = express()

app.get('/hello', (req, res )=> {
    return res.send('dfdff')
})

app.listen('4000', ()=> {
    console.log('run success')
})