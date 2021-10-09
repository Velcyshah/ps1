var fs = require('fs');

//Replace the file with a new one:
fs.writeFile('newfile3.txt', 'This is my life', function(err) {
    if (err) throw err;
    console.log('Replaced!');
});