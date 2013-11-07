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

module.exports.getFirst = function(max){
    return module.exports.getPrimesBetween(0, max);
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

module.exports.largestPrimeBelow = function(number) {
    for(var i = number - 1; i > 0; i--) {
        if(module.exports.isPrime(i)) {
            return i;
        }
    }

    return undefined;
};
