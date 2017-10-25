
var playlist = { "artist1" : "song 1"}

function updatePlaylist(playlist, artist, song) {
  Object.assign(playlist, {artist:song})
}