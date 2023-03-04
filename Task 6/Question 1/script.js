function isPrime(n) {
    var divisor = 3;
    var limit = Math.sqrt(n);

    if (n === 2 || n === 3) { // if the number is 2 or 3, then we know it's prime
        return true;
    }
    if (n % 2 === 0 || n === 1) { // if the number can be divided by 2, ot if it's 1, then we know it's not prime
        return false;
    }
    while (divisor <= limit) {
        if (n % divisor === 0) {
            return false;
        } else {
            divisor += 2;
        }
    }
    return true;
};

function handleFunction() {
    var arg = parseInt(document.getElementById('numberToCheck').value, 10);
    var result = isPrime(arg);

    if (arg == 0) {
        document.getElementById('the-result').innerHTML = `${arg} is Neither Prime nor composite Number`;
    } else if (arg < 0) {
        document.getElementById('the-result').innerHTML = `${arg} is Not Consider Number For Prime`;
    } else {
        document.getElementById('the-result').innerHTML = `${arg} is ${result ? 'prime' : 'not prime'}`;
    }
};