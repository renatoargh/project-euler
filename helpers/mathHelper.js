module.exports.factorial = function(x) {
    if(x === 0) {
        return 1;
    } else if(x < 0) {
        return undefined;
    }

    for(var i = x; --i;) {
        x *= i;
    }

    return x;
};