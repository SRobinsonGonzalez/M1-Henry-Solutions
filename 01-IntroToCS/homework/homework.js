'use strict';

function BinarioADecimal(num) {
      num = num.split('')
   console.log(num);
   let suma = 0;
   for (let i = 0; i < num.length; i++) {
      suma += Math.pow(2, num.length -1 -i) * num[i];
   }
   return suma;  
}
var num = '110100'
console.log(BinarioADecimal(num));

function DecimalABinario(num) {
      let bin = []
   while (num > 0) {
      bin.unshift(num % 2)
      num = Math.floor(num/2)
   }
   return bin.join('')
}
var num = 52
console.log(DecimalABinario(num));

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
