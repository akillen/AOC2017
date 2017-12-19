var Day2 = require('../../lib/day2.js');

describe("Day2", function() {
  it("returns zero for a single value array", function() { 
    var sum = Day2.checkSum([[0]]);
    expect(sum).toBe(0);
  });

  it("can handle one row with two values", function () {
    var sum = Day2.checkSum([[0, 1]]);
    expect(sum).toBe(1);
  });

  it("can handle two rows", function() {
    var sum = Day2.checkSum(
      [[0, 1],
       [0, 1]]
      );
    expect(sum).toBe(2);
  });

  it("works with 3x3", function() {
    var sum = Day2.checkSum(
      [[5, 1, 3],
       [3, 9, 7],
       [40, 2, 99]]
      );
    expect(sum).toBe(107);
  });
});