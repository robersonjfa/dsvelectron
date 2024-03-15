const fs = require("fs");

fs.readFile("teste.txt", function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("fim do programa com a biblioteca FS");