const notes = require('./notes.js')

const cmd1 = process.argv[2];
const cmd2 = process.argv[3];
const cmd3 = process.argv[4];
const cmd4 = process.argv[5];
if (cmd1 === 'Addnote') {
    console.log('New Note created!');
    if (cmd2.startsWith('title') && cmd3.startsWith('body')) {
        console.log('Tittle->>>', cmd2.split('=')[1]);
        console.log('Body->>>', cmd3.split('=')[1]);
        notes.newNote(cmd2.split('=')[1], cmd3.split('=')[1])
    }
} else if (cmd1 === 'Removenote') {
    console.log('Deleting Note');
    if (cmd2.startsWith('title')) {
        notes.deleteNotes(cmd2.split('=')[1]);
    }
} else if (cmd1 === 'Listnotes') {
    console.log('Your Notes ->>>');
    notes.allNotes();
} else if (cmd1 === 'Readnote') {
    console.log('Notes ->>>');
    notes.findNotes();
}