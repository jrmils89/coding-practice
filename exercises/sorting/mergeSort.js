/**
 * Merge Sort Has A Stable Runtime of O(n log n)
 * using O(n) memory
 * 
 * Algorithm is stable
 */

function sortMerge(arr) {

  // If there's 1 or fewer members of the array, the array is sorted
  if (arr.length < 2) {
    return arr;
  }

  // Find the midpoint of the array to divide the array into two parts
  let midpoint = Math.floor(arr.length / 2);

  // Divide the array into left and right halves
  var left = sortMerge(arr.slice(0, midpoint));
  var right = sortMerge(arr.slice(midpoint));

  return mergeArrays(left, right)

}

function mergeArrays(left, right) {
  var result = [];
  /**
   * While each array has values, compare the first item of the left 
   * and right array and add the smaller one to the end of the result arr
   */
  while (left.length > 0 && right.length > 0) {
    
    var itemToAdd;
    if (left[0] < right[0]) {
      itemToAdd = left.shift();
    } else {
      itemToAdd = right.shift();
    }
    result.push(itemToAdd)
  }

  /**
   * Add the remainder of whichever array still has values
   * in it to the end of the resulting array
   */
  if (left.length)
    result = result.concat(left) 
  else
    result = result.concat(right);

  return result;
}


/**
 * Prints [ 1, 1, 1, 1, 3, 4, 4, 5, 6, 11, 23, 31, 41, 52, 123, 123, 623 ]
 */
console.log(sortMerge([5,4,123,6,623,1,123,1,31,1,3,41,4,23,52,11,1]));