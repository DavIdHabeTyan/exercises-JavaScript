function sortString(str, numb) {
   let result = ''
   let character = ''
   str = str.toUpperCase()
   for (let i = 0; i < str.length; i++) {
      if (str[i] === "-") continue;
      result += str[i]
   }
   let tempString = '';
   for (let j = 0; j < result.length; j++) {
      tempString += result[j]

      if ((tempString.length % numb === 0)) {
         if (result.length - 1 !== j) tempString += '-';
         character += tempString;
         tempString = '';
      }

   }
   return character;

}

console.log(sortString("k3h4-hj-5j-kjgr", 4))