var exec = require('child_process').exec;

var express = require('express');
var router = express.Router();
var multer = require('multer');

router.post('/', (req, res) => {
    var musicurl = req.body.name;
    console.log(req.body.name);

    var arg = musicurl;
    // arg = "http://m10.music.126.net/20171202220728/1a75116d38152f250557bde179cd6de0/ymusic/8741/6df4/9002/78c486a763906a9903f61eabf387aa58.mp3"
    var filename = './router/player.py'
    exec('python'+' '+filename+' '+ arg +' ',function(error,stdout,stderr){
    //  console.log(stdout)
    if(stdout.length >1){
        console.log('you offer args:',stdout);
    } else {
        console.log('you don\'t offer args');
    }
    if(error) {
        console.info('stderr : '+stderr);
    }
    });

    res.send({"name":"success"});
  })

  module.exports = router