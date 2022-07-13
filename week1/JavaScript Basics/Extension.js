const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};
for (let outer in dictionary) {
  if (outer === "A") {
    console.log("Words that begin with  A:");
    for (let innerA of dictionary[outer]) {
      console.log(innerA);
    }
  }

  if (outer === "B") {
    console.log("Words that begin with  B:");
    for (let innerB of dictionary[outer]) {
      console.log(innerB);
    }
  }

  if (outer === "C") {
    console.log("Words that begin with C:");
    for (let innerC of dictionary[outer]) {
      console.log(innerC);
    }
  }
}
