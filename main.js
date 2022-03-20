function somme(num1, num2) {
    return console.log(num1 + num2)
}

function tare7(num1, num2) {
    returnconsole.log(num1 - num2)
}

function dareb(num1, num2) {
    return console.log(num1 * num2)
}

function kesma(num1, num2) {
    return console.log(num1 / num2)
}

function tosawi(num1, num2, operation) {
    num1 = prompt("choice num")
    operation = prompt("choice 3amaliya")
    num2 = prompt("choice num")
    num1 = Number(num1)
    num2 = Number(num2)
    if (operation == "+") {
        return somme(num1, num2)
    } else if (operation == "-") {
        return tare7(num1, num2)
    } else if (operation == "*") {
        return dareb(num1, num2)
    } else if (operation == "/") {
        if ( num2 === Number(0)) {
            return alert("math error")
        }
        return kesma(num1, num2)
    }
}
tosawi()