function convert(s) {
  var n = s.length;
  var str = "";
  for (var i = 0; i < n; i++) {
    if (s[i] == " ") {
      str += s[i + 1].toUpperCase();
      i++;
    } else {
      str += s[i];
    }
  }
  return str;
}

var str = "mohammad yahya";
convert(str);
