/**
 * Created by clucke on 14.12.16.
 */

var writeStream = require('fs').createWriteStream('utf8-out.dic', 'utf-8');


var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('utf8-in.dic', 'utf-8')
});

var i=0, removed=0;




lineReader.on('line', function (line) {
    if (! line.includes('/hij')) {
        writeStream.write(line + "\n");
    }

});


lineReader.on('close', function() {
    writeStream.end( function () { console.log('done!'); })
});


