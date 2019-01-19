function makeAnagram(a, b) {
  var lengthA = a.length;
  var lengthB = b.length;

  var char = {}
  var keys = [];
  var count = 0;

  if (lengthA >= lengthB) {

    for (var i = 0; i < lengthA; i++) {
      var thisCharA = a.charAt(i);

      if (!char[thisCharA] && char[thisCharA] != 0) {
        keys.push(thisCharA);
        char[thisCharA] = 0;
      }

      char[thisCharA] += 1;

      if (i < lengthB) {

        var thisCharB = b.charAt(i);

        if (!char[thisCharB] && char[thisCharB] != 0) {
          keys.push(thisCharB);
          char[thisCharB] = 0;
        }

        char[thisCharB] -= 1;
      }

    }

  } else {
    for (var i = 0; i < lengthB; i++) {
      var thisCharA = b.charAt(i);

      if (!char[thisCharA] && char[thisCharA] != 0) {
        keys.push(thisCharA);
        char[thisCharA] = 0;
      }

      char[thisCharA] += 1;

      if (i < lengthA) {

        var thisCharB = a.charAt(i);

        if (!char[thisCharB] && char[thisCharB] != 0) {
          keys.push(thisCharB);
          char[thisCharB] = 0;
        }

        char[thisCharB] -= 1;
      }

    }
  }

  for (var j = 0; j < keys.length; j++) {

    var key = keys[j];
    var charCount = char[key];

    if (charCount < 0) {
      count -= charCount;
    }

    if (charCount > 0) {
      count += charCount;
    }
  }

  console.log(count)

}

makeAnagram('abccb', 'ab');
makeAnagram('ab', 'abb');