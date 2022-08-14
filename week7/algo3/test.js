// 10,8,15 => 15
// 8,15,10=>15
// 15,10,8=>15
// 15,15,15=>15
// []=>false

function max(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  }
  if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}

let x = 30;
let y = 16;
let z = 15;
let result = max(x, y, z);
console.log(result);
