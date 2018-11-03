function FirstFactorial(num) {

  if (num < 1)
    throw new Error("Num must be >= 1");

  if (num <= 2)
    return num;

  var res = num;

  while (num > 1) {
    num--;

    res = res * num
  }

  return res;
}