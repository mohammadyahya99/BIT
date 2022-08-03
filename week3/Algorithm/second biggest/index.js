function secondBiggest(arr) {
  let firstNum=Number.NEGATIVE_INFINITY;
  let secondNum=Number.NEGATIVE_INFINITY;

  for (let number of arr) {
    if (number > firstNum) {
      secondNum = firstNum;
      firstNum = number;
    } else if (number > secondNum && number < firstNum) {
      secondNum = number;
    }
  }
  return secondNum
}
 console.log(secondBiggest([24, 3, 4, 7, 23])); 
