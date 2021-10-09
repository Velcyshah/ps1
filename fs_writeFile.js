var fs = require('fs');

//create a file named newfile3.txt:
fs.writeFile('newfile3.txt', 'Hello World!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});