//créer un serveur  
//Écrire un programme qui s'exécute sur le port 3000 et répond avec 
 //'<h1>Hello Node !!!!</h1>\n' lorsque quelqu'un atteint http://localhost:3000
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Node !!!!</h1>\n');
});

server.listen(3000, () => {
    console.log("Serveur en écoute sur http://localhost:3000");
});
