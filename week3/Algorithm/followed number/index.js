function followedNumber(arr) {
  const numbers = new Set();
  for (let element of arr) {
    if (numbers.has(element - 1) || numbers.has(element + 1))
      console.log(`${element} has followed by ${element - 1}`);
    else if (numbers.has(element + 1))
      console.log(`${element} has followed by ${element - 1}`);
    else numbers.add(element);
  }
}
followedNumber([20, 7, 2, 21, 3]);
