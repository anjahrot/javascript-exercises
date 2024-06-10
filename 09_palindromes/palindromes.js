const palindromes = function (str) {
    const arr = Array.from(str.toLowerCase());
    const filteredArr = arr.filter((item)=> /^[A-Za-z0-9]+$/.test(item));
    const reverse = [...filteredArr].reverse();  //spreadoperator klonar arrayen før reverse()
    console.log(reverse);
    return filteredArr.join('') === reverse.join('');
   };

// Do not edit below this line
module.exports = palindromes;
