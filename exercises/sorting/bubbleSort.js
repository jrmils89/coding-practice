/**
 * Best case runtime: O(n)
 * Worst case runtime: O(n^2)
 * Average case: O(n^2)
 * 
 * Space complexity: O(1)
 */

function bubbleSort(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 4, 123, 6, 623, 1, 123, 1, 31, 1, 3, 41, 4, 23, 52, 11, 1]));