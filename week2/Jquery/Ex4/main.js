$(".item").on("click", function () {
  if ($(this).data().instock) {
    let divTag = `<div class=cart-item> ${$(this).text()}</div>`;
    let divAdd = $(divTag);
    $("#cart").append(divAdd);
  }
});
