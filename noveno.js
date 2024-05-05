function sumarArreglo(arr) {
    if (arr.length === 0) {
      return 0;
    } else {
      return arr[0] + sumarArreglo(arr.slice(1));
    }
  }
  
  console.log(sumarArreglo([3, 1, 2])); 
  console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
  console.log(sumarArreglo([]));
  