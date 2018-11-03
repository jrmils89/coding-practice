function ReverseStr(str) {

  if (!str) {
    console.warn("Trying to reverse an empty string");
    return str;
  }

  if (typeof(str) !== "string")
    throw new TypeError("Param must be a string");

  var len = str.length;

  if (len <= 1)
    return str;

  var newStr = "";

  for (var i = len - 1; i >= 0; i--) {
    newStr += str.charAt(i);
  }

  return newStr;
}

// keep this function call here 
console.log(ReverseStr(""));