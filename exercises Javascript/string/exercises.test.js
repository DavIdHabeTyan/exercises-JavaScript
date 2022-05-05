// function sortString(str, numb) {
//    let result = ''
//    let charector = ''
//
//    for(let i = 0; i < str.length;i++) {
//       if(str[i] === "-") continue;
//       result+= str[i]
//    }
//    for(let j = 0; j < result.length; j++) {
//       charector+= result[j]
//       if(charector.length === numb){
//          charector+= '-'
//       }
//    }
//    return charector
// }
// console.log(sortString("k3h4-hj-5j-kjgr", 4))

// function generatStr(str, numb) {
//    str = str.replaceAll("-", '').split('').map((item, index) => {
//          if (((index + 1) % numb === 0) &&
//             (index !== str.length - 1)) {
//             return `${item}-`;
//          }
//          return item;
//       });
//    str = str.join('');
// return str
// }
//
// console.log(generatStr("k3h4-hj-5j-kjgr", 4));

//




describe('generate string length to 4 and letters tweak upperCase ', () => {
   function sortString(str, numb) {
      str = str.toUpperCase()
      str = str.replace(/-/gi, '');
      str = str.split('');
      str = str.map((item, index) => {
         if (((index + 1) % numb === 0) &&
            (index !== str.length - 1)) {
            return `${item}-`;
         }
         return item;
      });
      str = str.join('');
      return str;
   }

   test('Test 1. generate', () => {
      expect(sortString("k3h4-hj-5j-kjgr", 4))
         .toEqual("K3H4-HJ5J-KJGR")
   })

   // test('Test 2. generate', () => {
   //    expect(sortString())
   // })
})