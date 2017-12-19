//Naive algorithm:
//For each array, iterate and compare against a min and max.  If the next value is smaller than the min, relace min.
//If the next value is larger than the max, replace max.  Store the result in a new array.  When complete, sum the values
//of the resulting array.

module.exports.checkSum = function checkSum(input) {
  var diffs = input.map((x) => {
    min = x[0];
    max = x[0];
    for (i = 0; i < x.length; i++) {
      min = (x[i] < min) ? x[i] : min;
      max = (x[i] > max) ? x[i] : max;
    }
    return max - min;
  });

  return diffs.reduce((a, b) => a + b);
};