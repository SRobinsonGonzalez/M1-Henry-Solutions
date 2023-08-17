'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 /*
2. Caso base
1. Seleccionar un pivote
3. Definir un arreglo para la izquierda
4. Definir un arreglo para la derecha
5. Recorrer el arreglo
6. Comparar el valor [i] si es mayor o menor al pivote
7. Si es menor .push() izquierda
8. Si es mayor .push() derecha
9. Aplicamos recursion
*/
  if (array.length <= 1) return array;
  let pivot = array[Math.floor(Math.random()* array.length)]; // Es lo mismo que decir array[0] o array[array.lenght] //* 10
  console.log(pivot);
  let equal = []; // [10]
  let left = []; // 
  let right = []; // [46, 35]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
      left = quickSort(left)
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }
  return quickSort(left).concat(equal).concat(quickSort(right));
}
// let array = [5, 46, 9, 35, 5, 10, 2, 97, 8, 6, 24, 12];
console.log(quickSort(array));


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: [5]
  // [5]
  if (array.length <= 1) return array;

  let half = Math.round(array.length / 2)
  let left = array.slice(0, half); // [5]                   [5, 46, 9]
  let right = array.slice(half); //  [46,9]                  [35, 5, 10]
  
  let arrayOrdenado = [];

  left = mergeSort(left);
  right = mergeSort(right);
  
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arrayOrdenado.push(left.shift())
      } else {
          arrayOrdenado.push(right.shift())
      }

  // while (left.length) {
  //     arrayOrdenado.push(left.shift())
  // }
  // while (right.length) {
  //     arrayOrdenado.push(right.shift())
  }
  return arrayOrdenado.concat(left).concat(right)
  // return arrayOrdenado
  // //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
