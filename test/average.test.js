import average from "../src/average";
// const average = require('./average');

// try {
//   const result = avg;
//   console.log("Test réussi - Le résultat de average([1, 2, 3]) est :", result);
// } catch (error) {
//   console.error("Test échoué -", error.message);
// }

// try {
//   average([1, 2, "trois"]);
// } catch (error) {
//   console.log(
//     "Test réussi - Le tableau contient des valeurs non entières :",
//     error.message
//   );
// }



// describe('sum module', () => {
//   it('avg = 2', () => {
//     avg = [1, 2, 3];
//     expect(average(avg)).toBe(2);
//   });
// });

describe('average()', () => {
  it('should return NaN if the data is not an array', () => {
    const data = 'foo';
    expect(average(data)).toBeNaN();
  });

  it('should return NaN if the data is not an array of finite numbers', () => {
    const data = ['foo', 1, 2];
    expect(average(data)).toBeNaN();
  });

  it('should return the average of an array of numbers', () => {
    const data = [1, 2, 3];
    expect(average(data)).toBe(2);
  });
});