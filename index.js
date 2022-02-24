const notes = require('./notes.js')

const cmd1 = process.argv[2];
const cmd2 = process.argv[3];
const cmd3 = process.argv[4];
const cmd4 = process.argv[5];
if (cmd1 === 'Add note') {
    console.log('creating notes');
    if (cmd2.startsWith('title') && cmd3.startsWith('body')) {
        console.log('Tittle->>>', cmd2.split('=')[1]);
        console.log('Body->>>', cmd3.split('=')[1]);
        notes.newNote(cmd2.split('=')[1], cmd3.split('=')[1])
    }
} else if (cmd1 === 'Remove note') {
    console.log('Deleting Note');
    if (cmd2.startsWith('title')) {
        notes.deleteNotes(cmd2.split('=')[1]);
    }
} else if (cmd1 === 'List notes') {
    console.log('Listing Notes ->>>');
    notes.allNotes();
} else if (cmd1 === 'Read note') {
    console.log('Finding Notes ->>>');
    notes.findNotes();
}