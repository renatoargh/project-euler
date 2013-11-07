var primeHelper = require('../helpers/primeHelper'),
    arrayHelper = require('../helpers/arrayHelper');

arrayHelper.register();

module.exports.title =
    'Prime Permutations';

module.exports.description =
    'The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another. ' +
    'There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence. ' +
    'What 12-digit number do you form by concatenating the three terms in this sequence? ';

module.exports.solution = function primePermutations(){
    function isPermutation(a, b) {
        a = a.toString().split('').sort().join('');
        b = b.toString().split('').sort().join('');

        return a === b;
    }

    function extractArithmeticSequence(sequence){
        sequence.sort();

        for (var i = 2; i < sequence.length; i++) {
            if((sequence[i] - sequence[i - 1]) === (sequence[i - 1] - sequence[i - 2])) {
                return sequence.splice(i - 2, 3);
            }
        }

        return false;
    }

    var primes = primeHelper.getPrimesBetween(1000, 9999),
        i, j,
        a, b,
        currentSequence,
        arithmeticSequence,
        knownSequence = [1487, 4817, 8147];

    for(i = 0; i < primes.length; i++) {
        a = primes[i];
        if(knownSequence.indexOf(a) !== -1) {
            continue;
        }

        currentSequence = [a];

        for(j = i; j < primes.length; j++) {
            b = primes[j];

            if(i == j || knownSequence.indexOf(b) !== -1) {
                continue;
            }

            if(isPermutation(a, b)) {
                currentSequence.push(b);
            };
        }

        if(currentSequence.length >= 3 && (arithmeticSequence = extractArithmeticSequence(currentSequence))) {
            return arithmeticSequence.join('');
        }
    }
};