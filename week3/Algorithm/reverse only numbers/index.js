function reverseNumbers(array) {
  let newArray = [];
  for (let item of array) {
    if (!isNaN(item)) newArray.push(item);
  }

  for (let index in array) {
    if (!isNaN(array[index])) {
      array.splice(index, 1, newArray[newArray.length - 1]);
      newArray.pop();
    }
  }
  return array;
}
console.log(reverseNumbers(["a", "b", 1, 4, "sdf", 44, "aaa", 9]));
