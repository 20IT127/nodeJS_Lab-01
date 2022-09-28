const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[0]
const operator1 = parseInt(argv[1])
const operator2 = parseInt(argv[2])

if (operation=='add')
{
    add(operator1,operator2);
}

if (operation=='subtract')
{
    subtract(operator1,operator2);
}

if (operation=='multiply')
{
    multiply(operator1,operator2);
}

if (operation=='divide')
{
    divide(operator1,operator2);
}

function add(operator1,operator2)
{
    console.log(operation + ' is ' + (operator1 + operator2))
}

function subtract(operator1,operator2)
{
    console.log(operation + ' is ' + (operator1 - operator2))
}

function multiply(operator1,operator2)
{
    console.log(operation + ' is ' + (operator1 * operator2))
}

function divide(operator1,operator2)
{
    console.log(operation + ' is ' + (operator1 / operator2))
}
