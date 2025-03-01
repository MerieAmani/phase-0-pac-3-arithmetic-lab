function add(a, b) {
    return a + b;
}

add()

function subtract(a, b) {
    return a - b;
}

subtract(a, b)

function multiply(a, b) {
    return a * b;
}

multiply(a, b)

function divide(a, b) {
    return a / b;
}

divide(a, b)

function increment(a) {
    return a += 1;
}

function decrement(a) {
    return a -= 1;
}

function makeInt(a) {
    parseInt("a", 10)
    return a
}

makeInt(a)

function makeInt(b) {
    const result = parseInt(b, 10);
    if (isNaN(result)) {
        return 0;
    }
    return result;
}

makeInt(b)

function makeInt(c) {
    const result = parseInt(c, 10);
    if (isNaN(result)) {
        return NaN;
    }
    return result;
}

makeInt(c)

function preserveDecimal(n) {
    return parseFloat(n);
}