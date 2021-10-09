var fs = require('fs');

//Rename the file "newfile1.txt" into "renamedfile.txt":
fs.rename('newfile1.txt', 'renamedfile.txt', function(err) {
    if (err) throw err;
    console.log('File Renamed!');
});