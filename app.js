var url = require('url');
var fs = require('fs');

function renderHTML(path, response){
    fs.readFile(path, null, function(error, data){
        if (error){
            response.writeHead(404);
            response.write('Sorry, this is not a page.');
        } else{
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequest: function(request, response){
        response.writeHead(200, {'Content-Type': 'text/html'});

        var path = url.parse(request.url).pathname;
        switch (path){
            case '/':
                renderHTML('./html/home.html', response);
                break;
            case '/dashboard':
                renderHTML('./html/dashboard.html', response);
                break;
            case '/register':
                renderHTML('./html/signin.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined.');
                response.end();
        }
    }
}