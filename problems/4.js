module.exports.title =
    'Largest Palindrome Product';

module.exports.description =
    'A palindromic number reads the same both ways. ' +
    'The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. ' +
    'Find the largest palindrome made from the product of two 3-digit numbers.';

module.exports.solution = function largestPalindromeProduct(){
    function isPalindrome(n) {
        n = n.toString();
        return n === n.split('').reverse().join('');
    }

    var i, j, largest = 0;

    for(i = 999; i > 99; i--) {
        for (j = i; j > 99; j--) {
            var number = i * j;

            if(number <= largest) {
                break;
            }

            if(isPalindrome(number)) {
                largest = number;
            }
        }
    }

    return largest;
};

//Aprendizado:
//Quando você esta fazendo uma busca linear, de qual extremidade o seu número provavelmente está mais próximo?