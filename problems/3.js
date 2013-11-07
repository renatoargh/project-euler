module.exports.title =
    'Largest Prime Factor';

module.exports.description =
    'The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?';

module.exports.solution = function largestPrimeFactor(){
    var number = 600851475143, factor, biggestFactor = 0;

    function getPrimeFactor(number) {
        for (var i = 2; i <= number; i++) {
            if(number % i === 0) {
                return i;
            }
        }

        return false;
    }

    while((factor = getPrimeFactor(number))) {
        if(factor > biggestFactor) {
            biggestFactor = factor;
        }

        number = number / factor;
    }

    return biggestFactor;
};