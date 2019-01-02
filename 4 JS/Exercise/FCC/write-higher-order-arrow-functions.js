const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
"use strict";
  // change code below this line


  arr = realNumberArray.filter((arr) => arr % 1 === 0 && arr > 0 )
  const arr2 = arr.map((ele) => ele **2);
  const squaredIntegers = arr2;
  // change code above this line
  return squaredIntegers;

};

// test your code

const squaredIntegers = squareList(realNumberArray);

console.log(squaredIntegers);
