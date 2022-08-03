function duplicateArray(array) {
  let newArray = [];
  for (let i=0; i<array.length*2;i++) {
   newArray.push(array[i%array.length])
  }

  return newArray;
}
console.log(duplicateArray([1, 2, 3]));
