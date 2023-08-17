'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:     //! El orden de los factores no altera el resultado
/*

180|2
 90|2
 45|3
 15|3
  5|5
  1|1

      num|menor num primo divisor ✔ se cumple
resultado|menor num primo divisor

let factor = [2, 2, 3, 3, 5, 1]; ⬅.push()
tiene que ordenarse a ➡ [1, 2, 2, 3, 3, 5]

- num / menor num primo divisor
*/

// let numPrimos = [1];
// let div = 2;
// while (num > 1) {
//     if (num % div === 0){
//         numPrimos.push(div)
//         num = num/div
//         console.log(num);
//     } else{
//         div ++
//     }
//     console.log(div);
// }
// return numPrimos
// }

  let numPrimos = [1];
  for (let div = 2; div <= num; div++) {
    while (num % div === 0) {
      numPrimos.push(div)
      num/=div
      console.log(num);
      console.log(div);
    }
  }
  return numPrimos
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
// doble for => 1° > recorre el array desde 0; 2 > recorre el array desde una posicion delante de i >> j = i + 1;
// si posicion i es mayor a j, cambio las posiciones.
/*
      [3, 2, 5, 8, 1, 9]
       i
                   j
*/  
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = i + 1; j < array.length; j++) {
  //     let aux = array[j]
  //     if (array[i] > array[j]) {
  //       array[j] = array[i]
  //       array[i] = aux;
  //     }
  //   }
  // }
  // return array
  var swapp = false;
  while (!swapp) {
    swapp = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i+1]) {
        var aux = array[i + 1];
        array[i + 1] = array[i];
        array[i] = aux;
        swapp = false;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  /*
      [9, 3, 2, 5, 8, 1]
                i
            -j
  */

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i]
    while (j >= 0 && aux < array[j]) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = aux;
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
//  i    
// [3, 44, 48, 5, 47, 15, 36, 26, 2, 27, 38, 65];
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    } 
    if (i !== minIndex) {
      let aux = array[i]
      array[i] = array[minIndex]
      array[minIndex] = aux      
    }
    // [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
