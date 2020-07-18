const notes = require('./notes')
// const thing = notes.getNotes("Your note ..")
const chalk = require('chalk')
const yargs = require('yargs')


//customize yargs version
yargs.version('1.1.1')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a note.',
    builder: {
        title: {
            describe: 'Note title.',
            type: 'string',
            demandOption: true
        },

        body: {
            describe: 'Note body.',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        // console.log('Title :' + argv.title)
        // console.log('Body :' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note title.',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes.',
    handler(){
        notes.listNotes()
    }
})

// Create reading command
yargs.command({
    command: 'read',
    describe: 'Reading note.',
    builder: {
        title: {
            describe: 'The title to search',
            type: 'string',
            demandOption: true 
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// console.log(process.argv)
// console.log(yargs.argv)
debugger
yargs.parse()