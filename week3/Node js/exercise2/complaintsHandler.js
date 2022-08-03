const complaintTypes = require("./consts");
const handleComplaint = function (complaint) {
  if (complaint.type == complaintTypes.EMOTIONS) {
    console.log("It’ll pass, as all things do, with time.");
  } else if (complaint.type == complaintTypes.WEATHER) {
    console.log("It is the way of nature. Not much to be done.");
  } else if (complaint.type == complaintTypes.FINANCE)
    console.log("“Money doesn’t grow on trees, you know.");
};
module.exports.handleComplaint = handleComplaint;
