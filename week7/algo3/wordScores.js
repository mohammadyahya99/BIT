function high(x) {
  let result = "",
    value = 0,
    counterValue = 0;

  let splittedArray = x.split(" ");

  splittedArray.map((splitItem) => {
    counterValue = 0;

    let splitItemArray = splitItem.split("");

    splitItemArray.map((splitChar) => {
      counterValue += splitChar.charCodeAt();
    });

    if (counterValue > value) {
      result = splitItem;
      value = counterValue;
    }
  });
  return result;
}
let x = "ksksk aaaaaa xxzzzzz";

high(x);
