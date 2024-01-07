const isPalindrome = (str) => {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
};
const array = ["racecar", "hello", "level", "world", "deified"];
const palindromes = array.filter(isPalindrome);
console.log(palindromes); 