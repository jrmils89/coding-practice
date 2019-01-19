function fib(n, memo) {
  if (!memo)
    memo = {};

  if (memo[n])
    return memo[n];

  if (n == 0)
    return 0
  
  if (n === 1 || n === 2)
    return 1;
  
  let result = fib(n - 1, memo) + fib(n - 2, memo)

  memo[n] = result;

  return result;

}

function maxSumNonAdjacent(arr) {
  var incl = arr[0];
  var excl = 0;

  for (var i = 1; i < arr.length; i++) {
    var temp = incl;
    incl = Math.max(excl + arr[i], incl, arr[i]);
    excl = temp;
  }

  console.log(incl);
}

maxSumNonAdjacent([-2,1,3,-4,5])
maxSumNonAdjacent([2,1,5,8,4])
maxSumNonAdjacent([3,7,4,6,5])
maxSumNonAdjacent([3,5,-7,8,10])