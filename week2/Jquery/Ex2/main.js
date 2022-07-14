const button = "<input type='button' id='btn' value='Add Human'>";
const toInsertButton = $(button);
const input = "<input type='text' id='inputText'>";
const toInsertInput = $(input);
$("body").append(toInsertInput);
$("body").append(toInsertButton);

$("#btn").click(function () {
  let value = $("#inputText").val();
  if (value) {
    const newItemList = `<li class='item'>${value} </li>`;
    const toInsertInput = $(newItemList);
    $(".list").append(toInsertInput);
  } else alert("text missing");
});
$(".list").on("click", ".item", function () {
  $(this).remove();
});
