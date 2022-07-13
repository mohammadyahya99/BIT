const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};
for (i = 0; i < 10; i++) {
  var input = document.createElement("div");
  let box = "box" + i;

  input.setAttribute("id", box);
  box = input.id;
  console.log(box);
  input.setAttribute("class", "box");

  input.addEventListener("mouseenter", function (e) {
    document.getElementById(e.target.id).style.backgroundColor =
      getRandomColor();
  });
  document.getElementById("container").appendChild(input);
}
