function capitalize(string) {
  const firstL = string.charAt(0).toUpperCase();
  const restWord = string.slice(1);
  return firstL + restWord;
}

function reverseString(string) {
   const stringToArr = string.split("");
   const reverseArray = stringToArr.reverse();
   const reverseString = reverseArray.join("");

   return reverseString;
}

module.exports = { capitalize, reverseString };