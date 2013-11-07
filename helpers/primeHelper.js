module.exports.getPrimeFactors = function(number) {
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

module.exports.isPrime = function(number) {
    return module.exports.getPrimeFactors(number).length === 1;
};

module.exports.largestPrimeBelow = function(number) {
    for(var i = number - 1; i > 0; i--) {
        if(module.exports.isPrime(i)) {
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

module.exports.getFirst = function(max){
    //  +--------------------+
    //  |    RUNNING TIMES   |
    //  +---------+----------+
    //  | 1000    | 5ms      |
    //  | 10000   | 24ms     |
    //  | 100000  | 426ms    |
    //  | 1000000 | 9753ms   |
    //  | 6000000 | 121315ms |
    //  +---------+----------+

    return module.exports.getPrimesBetween(0, max);
};