module.exports.title =
    'Multiples of 3 and 5';

module.exports.description =
    'If we list all the natural numbers below 10 ' +
    'that are multiples of 3 or 5, we get 3, 5, 6' +
    ' and 9. The sum of these multiples is 23. ' +
    'Find the sum of all the multiples of 3 or 5 below 1000.';

module.exports.solution = function multiplesOf3And5(){
    var i,
        acumulator = 0,
        isMultipleOf5,
        isMultipleOf3;

    for (i = 0; i < 1000; i++) {
        isMultipleOf3 = i % 3 === 0;
        isMultipleOf5 = i % 5 === 0;

        if(isMultipleOf3 || isMultipleOf5) {
            acumulator += i;
        }
    }

    return acumulator;
};