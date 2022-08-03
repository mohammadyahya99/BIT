const handlers = require("./complaintsHandler");
const complaintType = require("./consts");

let complaint1 = {
  text: "I'm not getting enough money",
  type: complaintType.WEATHER,
};

let complaint2 = {
  text: "My salary hasn't come in yet",
  type: complaintType.FINANCE,
};

let complaint3 = {
  text: "I'm always full of energy",
  type: complaintType.EMOTIONS,
};

handlers.handleComplaint(complaint1);
handlers.handleComplaint(complaint2);
handlers.handleComplaint(complaint3);
