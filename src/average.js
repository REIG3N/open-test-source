// export default function average(array){
//   if (  !Array.isArray(array) && !Array.every(Number.isInteger)){
//     return console.error("Le paramètre n'est pas un tableau");
//   }
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//   }

//   const calcul = sum/array.length
//   console.log(`Result : ${calcul}`)
//   return calcul
// }

/**
 * Calculates the average of a series of numbers.
 *
 * @param {number[]} data An array of numbers.
 * @returns {number} The average of the numbers in the array.
 */
export default function average(data) {
  if (!Array.isArray(data) || !data.every(Number.isFinite)) {
    return NaN;
  }
  const sum = data.reduce((a, b) => a + b, 0);
  return sum / data.length;
}