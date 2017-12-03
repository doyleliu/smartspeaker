
var test = window.location.href;
var result = test.split("+");
// console.log(result);
console.log(decodeURIComponent(result[2]));
musicname = decodeURIComponent(result[1]);
musicauthor = decodeURIComponent(result[3]);
musicid = result[5];
musicid = "../music/url?id=" + musicid;
console.log(musicid);
(function name() {
    $.getJSON(musicid,(data)=>{
        console.log(data["data"][0]);
    })
})

var ap1 = new APlayer({
    element: document.getElementById('player1'),
    narrow: false,
    autoplay: true,
    showlrc: 3,
    mutex: true,
    theme: '#615754',
    preload: 'metadata',
    mode: 'circulation',
    music: {
        title: musicname,
        author: musicauthor,
        url: result[2],
        pic: result[4],
        lrc: "1.lrc"
    }
});
ap1.on('play', function () {
    console.log('play');
});
ap1.on('play', function () {
    console.log('play play');
});
ap1.on('pause', function () {
    console.log('pause');
});
ap1.on('canplay', function () {
    console.log('canplay');
});
ap1.on('playing', function () {
    console.log('playing');
});
ap1.on('ended', function () {
    console.log('ended');
});
ap1.on('error', function () {
    console.log('error');
});