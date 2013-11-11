var primeHelper = require('../helpers/primeHelper'),
    mathHelper = require('../helpers/mathHelper'),
    arrayHelper = require('../helpers/arrayHelper');

arrayHelper.register();

module.exports.title =
    'Sum Square Difference';

module.exports.description =
    'The sum of the squares of the first ten natural numbers is, 12 + 22 + ... + 102 = 385 The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)2 = 552 = 3025 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640. Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.';

module.exports.solution = function sumSquareDifference(){

    var until = 100, sumOfTheSquares, squareOfTheSum;

    sumOfTheSquares = (until * (until + 1) * ((2 * until) + 1))/6;
    squareOfTheSum = Math.pow((until * (until + 1))/2, 2);

    return squareOfTheSum - sumOfTheSquares;
};