var fs = require('fs');

//Delete the file newfile2.txt:
fs.unlink('newfile2.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!');
});