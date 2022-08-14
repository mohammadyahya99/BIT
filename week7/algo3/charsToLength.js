function countDuplicate(str) {
  let returnString = "";
  let counter = 1;
  let char = str[0];
  for (let index = 1; index < str.length; index++) {
    if (str[index] == char) {
      counter++;
    } else {
      returnString += char + counter;
      counter = 1;
      char = str[index];
    }
  }
  return returnString;
}
let result = countDuplicate("aaabbcb");
console.log(result);
