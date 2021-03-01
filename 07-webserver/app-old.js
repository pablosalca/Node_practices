const http = require("http");

http.createServer((request, response) => {

        // response.writeHead(200, { 'content-type': 'application/json' });
        // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
        // response.writeHead(200, { 'content-type': 'application/csv' });
        // response.write(JSON.stringify(person));
        response.write('Hola mundo');
        // response.write('1, pablo\n');
        // response.write('2, maria\n');
        // response.write('3, juan\n');
        // response.write('4, pedro\n');
        response.end();

    })
    .listen(8080);

console.log('escuchando en el puerto, 8080');