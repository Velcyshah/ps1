var fs = require('fs');

//append content at the end of the file:
fs.appendFile('newfile1.txt', ' This is my life', function(err) {
    if (err) throw err;
    console.log('Updated!');
});