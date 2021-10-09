var fs = require('fs');

//create a file named newfile1.txt:
fs.appendFile('newfile1.txt', 'Hello World!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});