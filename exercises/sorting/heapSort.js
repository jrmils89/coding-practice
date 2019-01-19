/**
 * Heap sort is best/average/worst case O(n log n) with and 
 * O(1) space complexity as sorting is done in place
 * 
 * Downside here is sort is not stable (equal elements not guaranteed
 * to be in same place on all passes)
 */
function heapRoot(arr, i, arrLen) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < arrLen && arr[left] > arr[max]) {
        max = left;
    }

    if (right < arrLen && arr[right] > arr[max])     {
        max = right;
    }

    if (max != i) {
        swap(arr, i, max);
        heapRoot(arr, max, arrLen);
    }
}

function swap(arr, indexA, indexB) {
    var temp = arr[indexA];

    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

function heapSort(arr) {
    
    var arrLen = arr.length;

    for (var i = Math.floor(arrLen / 2); i >= 0; i -= 1)      {
        heapRoot(arr, i, arrLen);
      }

    for (i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        arrLen--;
      
      
        heapRoot(arr, 0, arrLen);
    }

    return arr;
}

console.log(heapSort([5,4,123,6,623,1,123,1,31,1,3,41,4,23,52,11,1]));