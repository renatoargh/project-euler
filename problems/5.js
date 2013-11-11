var primeHelper = require('../helpers/primeHelper'),
    mathHelper = require('../helpers/mathHelper'),
    arrayHelper = require('../helpers/arrayHelper');

arrayHelper.register();

module.exports.title =
    'Smallest Multiple';

module.exports.description =
    '2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?';

module.exports.solution = function smallestMultiple(){

    var value = 20,
        answer = mathHelper.factorial(value),
        ok = true,
        prime = 2,
        lastPrime = prime;

    while(ok){
        answer /= prime;
        for (var i = 1; i <= value; i++) {
            ok = ok && (answer % i === 0);
        }

        if(ok) {
            lastPrime = prime;
        } else {
            answer *= prime;

            if(lastPrime === prime) {
                prime = primeHelper.nextPrime(prime);
                ok = true;
            }
        }
    }

    return answer;
};