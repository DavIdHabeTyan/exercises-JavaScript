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


describe('Create a function called transform which takes an array of objects of this form:', () => {
   function transform(arr) {
      return arr.filter((val) => {
         return val.gender === "female"
      }).map((val) => {
         return{
            firstName: val.fn,
            lastName: val.ln,
            phone: val.ph,
            gender: val.gender
         }
      })
   }

   test('Test 1. The function should filter the list down to only those whose gender value is “female” and return an array with those objects transformed into the following form:', () => {
      expect(transform([
         {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
         {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
         {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
         {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
      ])).toEqual([
            {
               firstName: 'Jane',
               lastName: 'Karapetyan',
               phone: '039 323 233',
               gender: 'female'
            },
            {
               firstName: 'Jill',
               lastName: 'Isahakyan',
               phone: '039 323 233',
               gender: 'female'
            }
         ]
      )

   })

})
