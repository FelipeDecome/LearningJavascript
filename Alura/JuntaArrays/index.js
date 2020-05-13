let nomes1 = ["Sunshine", "KuschKusch", "Forever"];
let nomes2 = ["Carlos", "Junior", "Magda"];

/* let nomes = joinArrays(nomes1, nomes2); */

exibeLog([].concat(nomes1, nomes2));

function exibeLog(array) {
  array.forEach(item => console.log(item));
}

/* function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
} */
