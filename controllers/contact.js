const path = require('path');

exports.getFile = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views', 'contact.html'));
};

exports.postFile = (req,res)=>{
    let name = req.body.name;
    console.log(name);
    let email = req.body.email;
    console.log(email);
    res.redirect('../');
};