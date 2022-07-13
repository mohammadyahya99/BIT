$("#m2").on("click", function () {
  const datam = $("#m1").val();
  const newli = `<li class="u2">${datam}</li>`;
  const addli = $(newli);
  $("#u1").append(addli);
  $("#m1").val("");
});

$("#u1").on("click", ".u2", function () {
  $(this).remove();
});
