function multiplicarArreglo(arr) {
    if (arr.length === 0) {
      return 1;
    } else {
      return arr[0] * multiplicarArreglo(arr.slice(1));
    }
  }
  
  console.log(multiplicarArreglo([4, 1, 2,3])); 
  console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); 
  console.log(multiplicarArreglo([]));
  