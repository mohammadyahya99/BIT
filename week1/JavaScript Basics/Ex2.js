function firstRepeating(str) {
  let h = new Set();

  for (let i = 0; i <= str.length - 1; i++) {
    let c = str[i];

    if (h.has(c)) return c;
    else h.add(c);
  }

  return "\0 ";
}
const x = "mmdss";
firstRepeating(x);
