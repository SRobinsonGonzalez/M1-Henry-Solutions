function mergeSort(array) {
    if (array.length <= 1) return array;

  let half = Math.round(array.length / 2)
  let left = array.slice(0, half);
  let right = array.slice(half);
  
  let arrayOrdenado = [];

  left = mergeSort(left);
  right = mergeSort(right);
  
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arrayOrdenado.push(left.shift())
      } else {
          arrayOrdenado.push(right.shift())
      }
    }
    return arrayOrdenado.concat(left).concat(right)
}
let array = [5, 46, 9, 35, 5, 10, 2, 97, 8, 6, 24, 12];
console.log(mergeSort(array));