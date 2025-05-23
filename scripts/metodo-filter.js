/* Cria um novo array com elementos que passam em uma
condição */

let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];

let playlistFiltrada = playlist.filter(musica => musica.length > 4);

/* nomeVariavel.filter(novaVariavel => novaVariavel.length > 4) */

console.log("Playlist filtrada (músicas com mais de 4 letras):", playlistFiltrada);