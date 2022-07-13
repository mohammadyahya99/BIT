const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc = data;
};
let logData = function () {
  console.log();
};
displayData(alert, logData, "I like to party");
