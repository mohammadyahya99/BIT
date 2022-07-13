const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
let people = [];

for (let index in names) {
  let op = {};
  op["name"] = names[index];
  op["age"] = ages[index];

  people.push(op);
}
console.log(people);

for (let all of people) {
  console.log(all.name + " is " + all.age);
}
