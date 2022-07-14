$(".generator").click(function () {
  let arrayData = [];
  let objectData = {};
  let processId = $(this).parent(".processor").attr("id");
  console.log("The process id is: " + processId);
  let computerData = $(this).parent("div").parent("div").data();
  objectData.cpm_id = computerData;
  arrayData.push(objectData);
  console.log("Id data is : " + objectData);
  let computerBus = $(this).parent("div").parent("div").find(".BUS").text();
  console.log("The BUS is : " + computerBus);
});
$(".validator").click(function () {
  let generatorText = $(this).closest(".computer").find(".generator").text();
  console.log("The generator’s text " + generatorText);

  let MB = $(this).closest(".computer").find(".MB").text();
  console.log("The MB: " + MB);

  let QR1 = $(this).closest(".computer").find(".QR").first().text();
  let QR2 = $(this).closest(".computer").find(".QR:nth-child(2)").text();
  console.log("QRs: " + QR1 + " " + QR2);
});
