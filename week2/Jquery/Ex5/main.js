const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" },
];
const addDiv = function () {};
for (let fruit of fruits) {
  const divTag = `<div class='${fruit.color}'></div>`;
  const divAdd = $(divTag);
  $("#basket").append(divAdd);
  $(`.${fruit.color}`).text(`${fruit.name}`);
}
