
///Tuck in List
describe('Create a function that takes two arrays and insert the second array in the middle of the first array.', () => {
   function takesTwoArray(first, second) {

      for(let i = 0; i < first.length/2; i++) {
         second.unshift(first[i])
         second.push(first[first.length - 1 - i])
      }
      return second
   }

   test('test 1.', () => {
      expect(takesTwoArray([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
   })

   test('test 2.', () => {
      expect(takesTwoArray([15, 150], [45, 75, 35])).toEqual([15, 45, 75, 35, 150])
   })

   test('test 3.', () => {
      expect(takesTwoArray([[1, 2], [5, 6]], [[3, 4]])).toEqual([[1, 2], [3, 4], [5, 6]])
   })
})