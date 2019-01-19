/**
 * Best case runtime: O(n log n)
 * Worst case runtime: O(n^2)
 * Average case: O(n log n)
 * 
 * Best case space complexity: O(log n) 
 * Average space complexity: O(n)
 * 
 * There are implementations of this that are stable, but
 * generally it is not considered stable
 */

function quickSort(arr) {
  if (arr.length < 2)
    return arr;

  var left = [];
  var right = [];
  var newArr = [];
  var length = arr.length;
  
  // Use last element as pivot point
  var pivot = arr.pop();
  
  for (var i = 0; i < length; i++) {
    // If the item is less or equal than pivot, add el to left arr
    if (arr[i] <= pivot)
      left.push(arr[i]);
    
    // If the item is greater than pivot, add to right arr 
    if (arr[i] > pivot)
      right.push(arr[i]);
  }

  /**
   * Join the items less than the pivot, 
   * the pivot element itself, 
   * and the items greater then the pivot back into a single
   * array that is sorted. Repeating this process until all
   * elements are sorted
   */ 
  return newArr.concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([5, 4, 123, 6, 623, 1, 123, 1, 31, 1, 3, 41, 4, 23, 52, 11, 1]));