
module.exports.captchaSum = function captchaSum(input) {
  //Read the input into an array
  var arr = input.split('').map((x) => Number(x));
  //iterate each character
  //if the next character is the same as the current character, add to sum accumulator
  var sum = arr.reduce((acc, curr, idx, arr) => {
    if (curr == arr[(idx + 1) % arr.length])
      return acc + curr;
    return acc;
  }, 0);

  return sum;
}