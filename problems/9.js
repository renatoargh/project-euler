var primeHelper = require('../helpers/primeHelper'),
    mathHelper = require('../helpers/mathHelper'),
    arrayHelper = require('../helpers/arrayHelper');

arrayHelper.register();

module.exports.title =
    'Special Pythagorean Triplet';

module.exports.description =
    'A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2 For example, 32 + 42 = 9 + 16 = 25 = 52. There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.';

module.exports.solution = function specialPythagoreanTriplet(){

    var a, b, c, stop;

    for(a = 1; a < 1000; a++) {
        for(b = a + 1; b < 1000; b++) {
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

            if(c % 1 !== 0 || c <= b)
                continue;
            else if(a + b + c === 1000 && b > a && c > b){
                stop = true;
                break;
            }
        }

        if(stop) break;
    }

    return a * b * c;
};