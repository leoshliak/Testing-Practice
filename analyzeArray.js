function analyzeArray(array) {
   const sortedArray = array.sort((a, b) => {return a - b});
   const sum = array.reduce((total, amount) => total + amount); 
   const average = sum / array.length;
   const min = sortedArray[0];
   const max = sortedArray[array.length - 1];
   const length = array.length;

   return {
      average: average,
      min: min,
      max: max,
      length: length
   }
}

module.exports =  analyzeArray;