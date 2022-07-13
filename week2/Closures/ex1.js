const StringFormatter = function () {
  const capitalizeFirstChar = function (str) {
    return str[0].toUpperCase() + str[1].toLowerCase() + str.slice(1);
  };

  const skewerCaseString = function (str) {
    return str.replace(" ", "-");
  };

  return (modify = {
    capitalizeFirst: capitalizeFirstChar,
    skewerCase: skewerCaseString,
  });
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should print Dorothy
console.log(formatter.skewerCase("blue box")); //should print blue-box
