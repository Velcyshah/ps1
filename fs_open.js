var fs = require('fs');

//create an empty file named newfile2.txt:
fs.open('newfile2.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
});