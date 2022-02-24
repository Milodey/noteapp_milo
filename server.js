const fs = require('fs');
const writeAndappend = function() {


    fs.writeFileSync('notepad.txt', 'i am milo3');
    fs.appendFileSync('notepad.txt', '\ni am milo3 rewrite');
}
module.exports = writeAndappend;