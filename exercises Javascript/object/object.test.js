describe('Output the books sorted by the percent in descending order which readStatus is true', () => {

   function filterObjectAndSort(obj) {
      const result = obj.filter((val) => {
         return val.readStatus === true

      }).sort((a, b) => {
         return b.percent - a.percent
      })
      return result
   }

   test('Test 1. Given the list of the following readers:', () => {
      expect(filterObjectAndSort([
         {book: "Catcher in the Rye", readStatus: true, percent: 40},
         {book: "Animal Farm", readStatus: true, percent: 20},
         {book: "Solaris", readStatus: false, percent: 90},
         {book: "The Fall", readStatus: true, percent: 50},
         {book: "White Nights", readStatus: false, percent: 60},
         {book: "After Dark", readStatus: true, percent: 70}
      ])).toEqual([
         {book: 'After Dark', readStatus: true, percent: 70},
         {book: 'The Fall', readStatus: true, percent: 50},
         {book: 'Catcher in the Rye', readStatus: true, percent: 40},
         {book: 'Animal Farm', readStatus: true, percent: 20}

      ])
   })

})
