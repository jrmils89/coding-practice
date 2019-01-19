/**
 * 1.1 Cracking Code Interview
 */

 // Hash Map Impl, for UTF-16 encoded str
 function bruteForceAllUnique(str) {

  if (typeof(str) !== "string")
    return false; // Do error handling

  
  if (str.length > 65535) // Max number of UTF-16 values
    return false;

  var charMap = {};

  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);

    if (charMap[char])
      return false;

    charMap[char] = true;
  }

  return true;
 }

 /**
  * If we need to optimize for space, can do in O(n^2) time
  * by comparing character in str to all other characters in string.
  * 
  * We could also sort the string and do a linear comparison for repeating
  * characters. Sort is avg O(n log n). To do this in JS you need to implement
  * a custom in place sorting algo, as no native one exists for strings.
  * 
  * 
  * */ 