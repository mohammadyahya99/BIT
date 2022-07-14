const addDiv = function () {
  const divTag = '<div class="box"></div>';
  const divCreate = $(divTag);
  $("body").append(divCreate);
};
addDiv();
addDiv();

$("body").on("mouseenter", ".box", function () {
  $(".box").css("background", "red");
  $(this).css("background", "#8e44ad");
});
