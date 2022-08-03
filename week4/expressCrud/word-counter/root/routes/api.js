const express = require("express");
const router = express.Router();

const wordCounter = { izzat: { count: 4 }, hala: { count: 3 } };

function findWord(words, word) {
  let flag = 0;
  Object.keys(words).find((name) => {
    if (name == word) {
      flag = 1;
    }
  });
  return flag;
}
let flag = 0;

router.get("/word/:word", function (request, response) {
  const parameter = request.params.word;
  const parameterOneWord = parameter.split(" ");
  if (parameterOneWord.length > 1) response.send("Only one word allow to put");
  else {
    flag = findWord(wordCounter, parameter);
    if (flag) response.send(wordCounter[parameter]);
    else response.send({ count: 0 });
  }
});

router.post("/word", function (request, response) {
  const wordValue = request.body["word"];
  let flag = findWord(wordCounter, wordValue);
  if (flag) {
    wordCounter[wordValue].count = wordCounter[wordValue].count + 1;
    response.send({
      text: wordValue,
      currentCount: { count: wordCounter[wordValue].count },
    });
  } else {
    response.send({ text: wordValue, currentCount: { count: 1 } });
  }
});

router.get("/words", function (request, response) {
  const parameter = request.query;
  const keys = Object.keys(parameter);
  counterWordsExest = 0;
  Object.keys(parameter).forEach((word) => {
    let flag = findWord(wordCounter, word);
    if (flag) {
      wordCounter[word].count = wordCounter[word].count + 1;
      counterWordsExest++;
    } else {
      wordCounter[word] = { count: 1 };
    }
  });
  response.send({
    text:
      "Added " +
      keys.length +
      " words, " +
      counterWordsExest +
      " already existed",
    currentCount: Object.keys(wordCounter).length,
  });
});

router.delete("/words/:word", function (req, res) {
  let word = req.params.word;
  let flag = findWord(wordCounter, word);
  if (flag) {
    delete wordCounter[word];
  }
  console.log(wordCounter);
  res.end();
});

module.exports = router;
