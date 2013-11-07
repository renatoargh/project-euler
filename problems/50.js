var primeHelper = require('../helpers/primeHelper'),
    arrayHelper = require('../helpers/arrayHelper');

arrayHelper.register();

module.exports.title =
    'Consecutive Prime Sum';

module.exports.description =
    'The prime 41, can be written as the sum of six consecutive primes: 41 = 2 + 3 + 5 + 7 + 11 + 13 This is the longest sum of consecutive primes that adds to a prime below one-hundred. The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953. Which prime, below one-million, can be written as the sum of the most consecutive primes?';

module.exports.solution = function largestPrimeFactor(){

    var i,
        j,
        prime,
        longestSequence = [],
        sequence = [],
        sequenceToPrime = [],
        primes = primeHelper.getFirst(3944),
        ok = false;
        total = 0;

    for (j = 2; j < primes.length; j++) {
        sequence = [];
        sequenceToPrime = [];
        total = 0;

        for (i = primes.length - j; i >= 0; i--) {
            prime = primes[i];

            total = total + prime;
            sequence.push(prime);

            if(total > 1000000) {
                ok = true;
                break;
            }

            if(primeHelper.isPrime(total)) {
                sequenceToPrime = sequence.slice();
            }
        }

        if(sequenceToPrime.length > longestSequence.length) {
            longestSequence =  sequenceToPrime;
        }
    }

    if(!ok) {
        throw new Error('You need more primes!');
    }

    return longestSequence.sum();
};