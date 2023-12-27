const http = require('http');

const server = http.createServer((req, res) => {
    
    if (req.url === '/'){
        res.end('<b>Welcome to our home page</b>');
        return
    }
    if (req.url === '/about'){
        res.end('<b>Here is our short history</b>');
        return
    }
    res.write(`<h1>Oops! Go Gack <a href="/">Home</a></h1>`);
    
} 
)

server.listen(5000);