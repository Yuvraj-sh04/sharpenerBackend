const express = require('express')
const app = express()

const admin = require('./routes/admin');

const shop = require('./routes/shop');

const port = 3000
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',admin);

app.use('/shop',shop);


app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})