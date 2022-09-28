import {sum, subs, times, div, expo} from './src/operations.js';

const args = process.argv;

function doError() {
    process.stdout.write( 'usage: <number> "+" | "-" | "*" | "/" | "^" <number>\n');
    process.exit(1)
}

if ( (isNaN(args[2])) || (isNaN(args[4])) ) doError()

if ((args[3] !== '+') && 
    (args[3] !== '-') && 
    (args[3] !== '*') && 
    (args[3] !== '/') && 
    (args[3] !== '^')) doError()

let op = args[3]
let a = parseFloat(args[2])
let b = parseFloat(args[4])

let res = 0
if  ( op === '+') {
    res = sum(a, b)
} else
if  ( op === '-') {
    res = subs(a, b)
} else
if  ( op === '*') {
    res = times(a, b)
} else
if  ( op === '/') {
    try {
        res = div(a, b)        
    } catch (error) {
        res = error.message
    }
} else
if  ( op === '^') {
    res = expo(a, b)
}

process.stdout.write(  res + '\n');
