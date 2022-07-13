const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
let people = [];

for (let index in ages) {
  let op = {};
  op["name"] = names[index];
  op["age"] = ages[index];

  people.push(op);
}
console.log(people);
