export function findLongestPalindrome(str) {
  let maxLenPalindrome = ""
  for (let i = 0; i < str.length; i++) {
    for (i; j < str.length; j++) {
      let string = str.slice(i, j);
      if (string == string.split("").reverse().join("")) {
        if (maxLenPalindrome.length < string.length) {
          maxLenPalindrome = string;
        }
      }
    }
  }
  return maxLenPalindrome;
};