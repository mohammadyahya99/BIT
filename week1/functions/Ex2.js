const isEven = function (number) {
  if (number % 2 == 0) {
    return true;
  } else return false;
};

const arrayFunc = function (arr) {
  for (let index of arr) {
    if (!isEven(index)) console.log(index);
  }
};
arrayNum = [5, 10, 12, 17, 2, 8, 66];
arrayFunc(arrayNum);
