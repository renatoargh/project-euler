var primeHelper = require('../helpers/primeHelper'),
    arrayHelper = require('../helpers/arrayHelper');

arrayHelper.register();

module.exports.title =
    '10001st Prime';

module.exports.description =
    'By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.' +
    'What is the 10001st prime number?';

module.exports.solution = function largestPalindromeProduct(){
    var primes = primeHelper.getFirst2(10001);

    return primes.last();
};