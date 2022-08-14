var add = function (x) {
  return function (y) {
    return x + y;
  };
};

let a = add(2)(5); // 7;
console.log(a);
