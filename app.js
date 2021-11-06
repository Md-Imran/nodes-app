/* const add = require('./utils')
const sum=add(5,6)
console.log(sum) */

const validator=require('validator')
const yargs= require('yargs')

const chalk = require('chalk');


//console.log(validator.isEmail('raze.dsf@gamil.com'))
//console.log(chalk.italic.red('Hello'))

yargs.version('1.1.0')

// add command 
yargs.command({

    command : 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note') 
    }

})
// remove command
yargs.command({

    command : 'remove',
    describe: 'remove a new note',
    handler: function(){
        console.log('Remove a new note') 
    }

})


yargs.command({

    command : 'list',
    describe: 'list command',
    handler: function(){
        console.log('Show the list') 
    }

})


yargs.command({

    command : 'read',
    describe: 'read a value',
    handler: function(){
        console.log('Read the  value from server') 
    }

})

console.log(yargs.argv)
/* if(command==='add')
console.log('Adding note!')
else if (command== 'remove')
console.log('Remove Note') */