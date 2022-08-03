function renderer(title, GIF) {
  const container = $("#container");
  container.empty();
  container.append(title);
  container.append(`<iframe src=" ${GIF} "></iframe>`);
}

$.get("/randomWord").then(function (word) {
  const bookOfWord = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
  );
  const gifOfWord = $.get(
    `https://api.giphy.com/v1/gifs/search?q=${word}&api_key=kQ13hPpN5hJybgn23q5gpOApOcTIf5qh&limit=1`
  );

  Promise.all([bookOfWord, gifOfWord])
    .then(function (result) {
      let title = result[0].items[0].volumeInfo.title;
      let GIF = result[1].data[0].embed_url;
      renderer(title, GIF);
    })
    .catch(function (error) {
      console.log(error);
    });
});
