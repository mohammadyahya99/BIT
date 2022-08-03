function fetch() {
  let input = $("#inputName1").val();

  $.get(`priceCheck/${input}`, function (price) {
    $("#content").append(`<div> for ${input} the price: ${price.price}`);
  });
  $("#inputName1").val("");
}

function introduce() {
  let input = $("#inputName2").val();

  $.get(`buy/${input}`, function (item) {
    if (item.name == undefined || item == "") {
      $("#content").append(
        `<div>for ${input} the process didnt complete successfully.`
      );
    } else {
      $("#content").append(
        `<div>you’ve just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store.`
      );
    }
  });
  $("#inputName2").val("");
}
