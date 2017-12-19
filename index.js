const fs = require('fs');
const Day1 = require("./lib/day1.js");
const Day2 = require("./lib/day2.js");

//Day1

//Day2
function day2(){
  var input = fs.readFileSync("./inputs/day2").toString();
  arr = input.split('\n').map((x) => x.split("\t").map((x) => Number(x)));
  console.log("Day 2 Checksum: ", Day2.checkSum(arr));
}

day2();