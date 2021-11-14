/* const add = require('./utils')
const sum=add(5,6)
console.log(sum) */

const validator = require('validator')
const yargs = require('yargs')
const notes = require('./note.js')

const chalk = require('chalk');
//const { string } = require('yargs');


//console.log(validator.isEmail('raze.dsf@gamil.com'))
//console.log(chalk.italic.red('Hello'))

yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)   
    }
})
// remove command
yargs.command({


    command: 'remove',
    describe: 'remove a new note',

    builder:{
        title :{
            describe: 'Note title',
            demandOption: true,
            type: 'string'  
        }
    },
    handler: function (argv) {
        notes.removeNote (argv.title)
       
    }

})


yargs.command({

    command: 'list',
    describe: 'list command',
    handler () {
        notes.listNotes()
    }

})


yargs.command({

    command: 'read',
    describe: 'read a note',
    handler(argv) {
        notes.readNotes(argv.title)    
    }

})

yargs.parse()
//console.log(yargs.argv)
/* if(command==='add')
console.log('Adding note!')
else if (command== 'remove')
console.log('Remove Note') */