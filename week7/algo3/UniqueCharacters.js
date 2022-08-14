function unique(str) {
  let chArray = str.split("");
  chArray.sort();
  for (let i = 0; i < chArray.length - 1; i++) {
    if (chArray[i] != chArray[i + 1]) continue;
    else return false;
  }

  return true;
}

unique("msj");
