const path = require('path');

exports.error = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views', '404.html'))
};
