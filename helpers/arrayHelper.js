module.exports.register = function(){
    Array.prototype.sum = function(){
        return this.reduce(function(a, b){
            return a + b;
        });
    };

    Array.prototype.largest = function(){
        return this.reduce(function(a, b){
            return a > b ? a : b;
        }, Number.MIN_VALUE);
    };

    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};