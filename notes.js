const fs = require('fs')
const chalk = require('chalk')

// const getNotes = (x) => {
//     console.log(x)
// }

const removeNote = (title) => {
    // 
    
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length < notes.length) {
        console.log(chalk.greenBright("Note with title : " + chalk.bold.yellowBright(title) + " was removed"))
        } else {
            console.log(chalk.redBright("No changes :( :"))
        }

    saveNotes(notesToKeep)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter((note) => note.title == title)
    // const duplicateNotes = notes.filter( function(note) {
    //     return note.title == title
    // })
    const duplicateNote = notes.find( (note) => note.title == title)


    // if (duplicateNotes.length === 0) {
    if (!duplicateNote) {    
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else {
        console.log("Note title take.")
    }
//    console.log(notes)
    
}

const listNotes = () => {
    const notes = loadNotes()
    
    if (notes.length != 0) {
        notes.forEach( (note) => {
            console.log(note.title)
        })
    } else {
        console.log('The list is empty')
    }
}

const readNote = (title) => {

    const notes = loadNotes()

    const matchNote = notes.find( (note) => note.title == title )

    if (matchNote) {
        console.log(chalk.greenBright('Title :' + title))
        console.log(matchNote.body)
    } else {
        console.log('no match')
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try
    { 
        const dataBuffer = fs.readFileSync('notes.json')
        const datajson = dataBuffer.toString()
        return JSON.parse(datajSon)
    } catch (e) {
        return []
    }
}



module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}