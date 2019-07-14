const http = require('http')
const server = http.createServer();
server.on('request', (req, res) => {
    res.writeHead (200, {'Contant-Type': 'text/html'});
    res.end( `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        

    </head>
    <body>
    <h1>"Hello World!!!"</h1>
       
    </body>
    </html>
    `);
    console.log(req.method, req.url);
}).listen(3000, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${3000}`)
    return console.log('ok!!!');
});
