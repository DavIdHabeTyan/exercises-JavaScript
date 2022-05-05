describe('Add up the Numbers from a Single Number', () => {
   function recursion(number) {
      if (number === 0) {
         return 0
      }
      return number + recursion(number - 1);
   }


   test('Test 1. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function', () => {
      expect(recursion(4)).toEqual(10);
   })

   test('Test 2', () => {
      expect(recursion(13)).toEqual(91);
   })

   test('Test 3.', () => {
      expect(recursion(600)).toEqual(180300);
   })
})


describe('Number of Squares in an N * N Grid', () => {
   function calculatNUmber(number) {
      if (numb === 0) {
         return 0
      }
   }

   test('Test 1. Create a function that calculates the number of different squares in an n * n square grid.', () => {
      expect(calculatNUmber(2)).toEqual(5);
   });
})