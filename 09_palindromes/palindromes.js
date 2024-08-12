const palindromes = function (string) {

    const str = string.toLowerCase().split('').filter((char) => char.match(/[a-z0-9]/i)).join('');
    return str === str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
