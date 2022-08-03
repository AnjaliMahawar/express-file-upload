//console.log("ghjmjuytrfdcvbhyt5rdcvbgyt5rdcv")
//const something =require (some lib)
const express =require('express');
const app =express();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log(req.file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Math.floor(Math.random()*100000)+file.originalname)
    }
  })
const upload = multer({ storage: storage })
require('dotenv').config();
//app.post('routeName),MW,cbfn()
app.post('/',upload.single('myfile'),function(req,res){
    console.log(req.file)
    res.json({
        msg:"file uploaded successfully"
    })
})

let port =process.env.port
app.listen(port,()=>{
    console.log('servwer is running on port '+port)
})