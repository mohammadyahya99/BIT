const checkExists = function (arr, number) {
  let flag = false;
  for (let index of arr) {
    if (index === number) {
      flag = true;
    }
  }
  return flag;
};

arrayNum = [5, 10, 12, 17, 2, 8, 66];
let x = 3;
checkExists(arrayNum, x);
