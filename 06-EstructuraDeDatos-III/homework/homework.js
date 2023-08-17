'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
   let nuevoArbol = new BinarySearchTree(value)
   if (value < this.value) {
      if (this.left) {
         this.left.insert(value);
      } else {
         this.left = nuevoArbol;
      }
   } else {
      if (this.right) {
         this.right.insert(value);
      } else {
         this.right = new BinarySearchTree(value);
      }
   }
}

BinarySearchTree.prototype.size = function () {
   let suma = 1;
   if (this.left) {
      suma += this.left.size()
   }
   if (this.right) {
      suma += this.right.size()
   } 
   return suma
}

BinarySearchTree.prototype.contains = function (value) {
   if (this.value === value) {
      return true;
   }
   if (this.left && this.left.contains(value)) return true;
   if (this.right && this.right.contains(value)) return true;
   return false
   // if (this.value === value) return true;

   // if (value > this.value){
   //    if(!this.right) return false;
   //    return this.right === null? false: this.right.contains(value);
   // }
   // if (value < this.value){
   //    if(!this.left) return false;
   //    return this.value === null? false: this.left.contains(value);
   // }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   // if (order === 'pre-order') {
   //    cb(this.value);
   //    if (this.left && this.left.depthFirstForEach(cb, order));
   //    if (this.right && this.right.depthFirstForEach(cb, order));
   // } else if (order === 'post-order') {
   //    if (this.left && this.left.depthFirstForEach(cb, order));
   //    if (this.right && this.right.depthFirstForEach(cb, order));
   //    cb(this.value);
   // } else {
   //    this.left && this.left.depthFirstForEach(cb, order);
   //    cb(this.value);
   //    this.right && this.right.depthFirstForEach(cb, order);
   // }

   switch(order) {
      case 'pre-order':// ➡ root, left, right
         cb(this.value)
         this.left && this.left.depthFirstForEach(cb, order);
         this.right && this.right.depthFirstForEach(cb, order)
         break;
      case 'post-order': // ➡ left, right, root
         this.left && this.left.depthFirstForEach(cb, order);
         this.right && this.right.depthFirstForEach(cb, order);
         cb(this.value);
         break;
      default:
         this.left && this.left.depthFirstForEach(cb, order);
         cb(this.value);
         this.right && this.right.depthFirstForEach(cb, order);
         break;
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
   if (this.left) {
      array.push(this.left);
   }
   if (this.right) {
      array.push(this.right)
   }
   cb(this.value)

   if (array.length) {
      array.shift().breadthFirstForEach(cb, array)
   }
}

function pushArray() {
   let arr = []
   arr.push()
}

let myBinadySearchTree = new BinarySearchTree(8);
console.log(myBinadySearchTree);
myBinadySearchTree.insert(5);
myBinadySearchTree.insert(12);
myBinadySearchTree.insert(2);
myBinadySearchTree.insert(10);
console.log(myBinadySearchTree);
console.log(myBinadySearchTree.depthFirstForEach(pushArray));
console.log(myBinadySearchTree.size());
console.log(myBinadySearchTree.contains(12));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
