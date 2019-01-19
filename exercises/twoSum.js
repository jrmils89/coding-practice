/**
 * Brute force two sum - more efficient to use a HashMap to store values
 * @param {} target 
 * @param {*} arr 
 */
function TwoSum(target, arr) {
  
  // TODO: Do error handling

  for (var i = 0; i < arr.length-1; i++) {
    var indexTwo = i+1;

    if ((arr[i] + arr[indexTwo]) == target)
      return [arr[i], arr[indexTwo]];

    for (var j = indexTwo; j < arr.length; j++) {
      if ((arr[i] + arr[j]) == target)
        return [arr[i], arr[j]];
    }
  }

  return null;
}