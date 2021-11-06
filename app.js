/* const add = require('./utils')
const sum=add(5,6)
console.log(sum) */

const validator=require('validator')
//import validator from 'validator'

const getNotes = require('./node')

console.log(validator.isEmail('raze.dsf@gamil.com'))
console.log(validator.isURL('https://raze.com'))