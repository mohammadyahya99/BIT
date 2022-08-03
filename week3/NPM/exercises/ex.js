var faker = require("node_modules/@faker-js/faker");
var validator = require("validator");

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(validator.isEmail("shoobert@dylan"));
//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone("786-329-9958", "en-US"));

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
//Ultimately, it should print "im so excited"
console.log(
  validator
    .blacklist("I'M SO EXCITED!!!~!", ["!", "?", ".", "@", "~", ",", "'"])
    .toLowerCase()
);

const makeHuman = function (number) {
  let people = [];
  for (let i = 0; i < number; i++) {
    let name = faker.name.firstName();
    // let companyName=
    // let image=
    // let newHuman ={}
    people.push(name);
  }
};
console.log(makeHuman(3));
