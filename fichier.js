//Dans un premier temps, demander au système de fichiers de créer un fichier nommé "welcome.txt" contenant une ligne "Hello Node".
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('Fichier créé !');
});
//Dans un deuxième temps, créer un programme qui lit et console.log les données de hello.txtconst fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
