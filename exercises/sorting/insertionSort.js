/**
 * Insertion sort is average and worst case O(n^2) runtime
 * using O(1) memory
 * 
 * Algorithm is stable
 */

function insertionSort(arr) {

  if (arr.length < 2)
    return arr;

  for (var i = 0; i < arr.length; i++) {
    
    var value = arr[i];
    
    var testVal = i - 1;

    while (testVal > -1 && arr[testVal] > value) {
      
      arr[testVal + 1] = arr[testVal];
      testVal -= 1;
    }
    
    arr[testVal + 1] = value
  }

  return arr
}

console.log(insertionSort());