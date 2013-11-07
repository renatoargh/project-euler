var primeHelper = require('../helpers/primeHelper'),
    arrayHelper = require('../helpers/arrayHelper');

arrayHelper.register();

module.exports.title =
    'Largest Prime Factor';

module.exports.description =
    'The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?';

module.exports.solution = function largestPrimeFactor(){
    return primeHelper.getPrimeFactors(600851475143).largest();
};