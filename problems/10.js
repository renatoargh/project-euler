var primeHelper = require('../helpers/primeHelper'),
    arrayHelper = require('../helpers/arrayHelper');

arrayHelper.register();

module.exports.title =
    'Summation of Primes';

module.exports.description =
    'The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.';

module.exports.solution = function summationOfPrimes(){
    return primeHelper.getFirst(2000000).sum();
};