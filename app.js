const http = require('http');
const fs = require('fs');

const artArr = [
    'art00',
    'art01',
    'art02',
    'art03',
    'art04',
];

let artid = 3;

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('HOME PAGE');
    } else if(req.url === '/articles') {
        //const { id } = req.params;
        //res.end(`Це стаття ${id}`)
        //console.log(req.params);
        res.end('Бібліотека');
    } else if(req.url === `/articles:${artid}`) {
            let id = parseInt(req.url.match(/\d+/));
            res.end(`${artArr[id]}`); 
    } else if (req.url === "/cat.jpg") {
            //res.end(`<img src="${req.url}">`); - так виведе тільки текст
            //res.end(`${req.url}`); - так теж

            res.setHeader("Content-Type", "image/jpeg");  
            fs.readFile("./cat.jpg", (err, image) => {
              res.end(image);
            });
        }
    else {
        res.statusCode=404;
        res.end('Page not found!');}
});


server.listen(3000);
console.log('Server is run!')