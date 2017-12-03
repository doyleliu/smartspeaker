var express = require('express');
var router = express.Router();
var multer = require('multer');

const fs = require('fs');

router.post('/', (req, res) => {
    var op = req.body.operation;
    var txt1 = "pause";
    var txt2 = "continue";
    var txt3 = "stop";
    console.log(req.body.operation);

    // fs.readfile("public/test.txt",'utf-8',function (err) {
    //     if (err) throw err ;
    //     console.log(txt); //文件被保存
    // }) ;
    if(op == "pause"){
        fs.writeFile("public/musicstate.txt",txt1,function (err) {
            if (err) throw err ;
            console.log("File Saved !"); //文件被保存
        }) ;
    }
    else{
        if(op == "continue")
        {
            fs.writeFile("public/musicstate.txt",txt2,function (err) {
                if (err) throw err ;
                console.log("File Saved !"); //文件被保存
            }) ;
        }
        else{
            fs.writeFile("public/musicstate.txt",txt3,function (err) {
                if (err) throw err ;
                console.log("File Saved !"); //文件被保存
            }) ;
        }
        
    }

    

    res.send({"name":"success"});
  })

  module.exports = router