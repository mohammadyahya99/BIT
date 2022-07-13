const SongsManager = function () {
  var songs = [];
  const addNewSong = function (nameSong, url) {
    var songToAdd = {};
    var part = url.split("=");
    var urlPart = part[1];
    songToAdd[nameSong] = urlPart;
    songs.push(songToAdd);
  };
  const getUrlSong = function (nameSong) {
    let flag = false;

    for (let index of songs) {
      if (index[nameSong] !== undefined) {
        flag = true;
        console.log("the url is :" + index[nameSong]);
      }
    }
    if (!flag) console.log("does not exist");
  };

  return (songFunc = { addSong: addNewSong, getSong: getUrlSong });
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");
songsManager.getSong("how long");
