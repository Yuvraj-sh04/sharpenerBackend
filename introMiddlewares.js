const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

// app.use('/add-product', (req, res, next)=>{
//     console.log('In another Middlewares');
//     res.send('<h1>Hello World Middleware</h1>')
// })

app.use(bodyParser.urlencoded({extended: false}));


app.use('/add-product', (req, res, next)=>{
    console.log('In another Middlewares');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.use('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');

})

app.use('/', (req, res, next)=>{
    console.log('In the Middlewares');
    res.send('<h1>Hello World</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})