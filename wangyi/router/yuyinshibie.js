var express = require('express');
var router = express.Router();
var multer = require('multer');
var i=0;


const fs = require('fs')

var AipSpeechClient = require("baidu-aip-sdk").speech
var APP_ID = "10351777"
var API_KEY = "sLRTG0sSxBLOTe0XFhkPqymg"
var SECRET_KEY = "f495151fd2219106151f7d8cc5a054ba"
var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY)
var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
       destination: __dirname + '../public/uploads/',
    //给上传文件重命名，获取添加后缀名
     filename: function (req, file, cb) {
         var fileFormat = (file.originalname).split(".");
         cb(null,"1.wav");
     }
});  
    //添加配置文件到muler对象。
    var upload = multer({
         storage: storage
   });

router.post('/', upload.single("audioData"),function(req, res) {
	
	console.log(i)
	console.log(req.file);
    // 还可以接收一并过来的body数据，multer其实包含了之前的解析post里body的功能
    console.log(req.body);
  
    let voice = fs.readFileSync('./router../public/uploads/1.wav');
    i++;
    let voiceBuffer = new Buffer(voice)

    // 识别本地文件
    client.recognize(voiceBuffer, 'wav', 16000,{lan: 'zh', ptc: 1}).then(function(result) {
        console.log('<识别>: ' + JSON.stringify(result));
        // console.log('<输出>: ' + JSON.stringify(result["result"][0]));
        var txt = result["result"][0] ;
        var txt1 = "pause";
        var txt2 = "continue";
        //写入文件
        if(txt[0] == "暂"){
            fs.writeFile("public/musicstate.txt",txt1,function (err) {
                if (err) throw err ;
                console.log("暂停 !"); //文件被保存
            }) ;
        }
        if(txt[0] == "继"){
            fs.writeFile("public/musicstate.txt",txt2,function (err) {
                if (err) throw err ;
                console.log("继续 !"); //文件被保存
            }) ;

        }
        fs.writeFile("public/test.txt",txt,function (err) {
            if (err) throw err ;
            console.log("File Saved !"); //文件被保存
        }) ;

        
    }, function(err) {
        console.log('err', err)
    })
    res.send("OK")
    
    
    
})
   
module.exports = router