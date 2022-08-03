function deepClone(obj) {
  let newObj = {};
  for (let keys of Object.keys(obj)) {
    newObj[keys] = obj[keys];
  }
  return newObj;
}
let obj = { name: "izzat", age: "22" };
let z = deepClone(obj);
obj.age = 23;
obj.name = "aaaa";
console.log(z);
console.log(obj);
