function getPrimeFactors(number) {
    var factors = [], factor;

    function getPrimeFactor(number) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if(number % i === 0) {
                return i;
            }
        }

        return number;
    }

    while(factor = getPrimeFactor(number)) {
        factors.push(factor);
        number /= factor;

        if(number === 1) {
            break;
        }
    }

    return factors;
};
module.exports.getPrimeFactors = getPrimeFactors;

function isPrime(number) {
    if(number === 2) {
        return true;
    } else if(number % 2 === 0) {
        return false;
    }

    return getPrimeFactors(number).length === 1;
};
module.exports.isPrime = isPrime;

module.exports.largestPrimeBelow = function(number) {
    for(var i = number - 1; i > 0; i--) {
        if(isPrime(i)) {
            return i;
        }
    }

    return undefined;
};

module.exports.getPrimesBetween = function(min, max) {
    var primes = [];

    while(max > min) {
        max = module.exports.largestPrimeBelow(max);

        if(max) {
            primes.push(max);
        }
    }

    return primes;
};

function getFirst(max){ //should rename this function to getPrimesBelow
    //  +--------------------+
    //  |    RUNNING TIMES   |
    //  +---------+----------+
    //  | 1000    | 5ms      |
    //  | 10000   | 24ms     |
    //  | 100000  | 426ms    |
    //  | 1000000 | 9753ms   |
    //  | 6000000 | 121315ms |
    //  +---------+----------+

    return module.exports.getPrimesBetween(2, max);
};
module.exports.getFirst = getFirst;

module.exports.getFirst2 = function(number){
    var result = [2], i;

    for(i = 3; result.length < number; i += 2) {
        if(isPrime(i)) {
            result.push(i);
        }
    }

    return result;
};