var colors = require("colors/safe");

function isPrimeNumber(n) {
  if (n <= 1) return false;
  for (var i = 2; i <= n / 2; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function getPrimeNumbers(from, to) {
  var result = [];
  for (var n = Number(from); n <= Number(to); n++) {
    if (isPrimeNumber(n)) {
      result.push(n);
    }
  }
  return result;
}

function printPrimeNumbers(from, to) {
  if (!isNaN(from) && !isNaN(to)) {
    var primeNumbers = getPrimeNumbers(from, to);
    if (primeNumbers.length > 0) {
      primeNumbers.forEach((numb, index) => {
        var color = colors.red;
        if (index % 3 === 0) {
          color = colors.green;
        } else if (index % 3 === 1) {
          color = colors.yellow;
        }
        console.log(color(`Prime number: ${numb}`));
      });
    } else {
      console.log(colors.red(`Prime numbers not found`));
    }
  } else {
    if (isNaN(from)) {
      console.log(colors.red(`${from} is not a number`));
    }
    if (isNaN(to)) {
      console.log(colors.red(`${to} is not a number`));
    }
  }
}

module.exports = printPrimeNumbers;