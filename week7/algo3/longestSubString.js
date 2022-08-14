function Camelcase(str) {
  let returnString = "";
  for (let index = 0; index < str.length; index++) {
    if (str[index] == " ") {
      returnString += str[index + 1].toUpperCase();
      index += 2;
    }
    returnString += str[index];
  }
  return returnString;
}
let result = Camelcase("camel case word");
console.log(result);
