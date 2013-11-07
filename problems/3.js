module.exports.title =
    'Largest Prime Factor';

module.exports.description =
    'The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?';

module.exports.solution = function largestPrimeFactor(){
    function getPrimeFactors(number){
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

    return getPrimeFactors(600851475143).reduce(function(a, b){
        return a > b ? a : b;
    }, 0);
};