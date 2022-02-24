const fs = require('fs');
const {
    title
} = require('process');

const newNote = function(title, body) {
    const notes = uploadNotes();
    notes.push({
        title,
        body
    });
    fs.writeFileSync('notepad.json', JSON.stringify(notes));

    console.log('From notes.js -->', title, '--', body);

}
const uploadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notepad.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}
const deleteNotes = function() {
    const notes = uploadNotes();
    const remaining = notes.filter(note => note.title !== title);
    fs.writeFileSync('notepad.json', JSON.stringify(remaining));
}
const allNotes = () => {
    const notes = uploadNotes();
    notes.forEach(note => console.log(note.title));
}
const findNotes = title => {
    const notes = uploadNotes();
    const note = notes.find(note => note.title === title);
    debugger;
    if (note) {
        console.log(`Title:${note.title}`);
        console.log(`Body:${note.body}`);
    } else {
        console.log('Note not found');
    }
}

module.exports = {
    newNote,
    deleteNotes,
    allNotes,
    findNotes
};