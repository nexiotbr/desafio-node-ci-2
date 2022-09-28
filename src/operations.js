
function sum(a, b) {
    return a + b;
}

function subs(a, b) {
    return a - b;
}

function times(a, b) {
    return a * b;
}

function div(a, b) {
    if (b===0) throw new Error('div by zero')
    return a / b;
}

function expo(a, b) {
    return a ** b;
}

export  { sum, subs, times, div, expo }
