/* recebe dois parâmetros: o índice inicial (inclusivo) e o índice
final (exclusivo).
*/

let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz', 'Reggae', 'Classical', 'Indie'];

console.log(playlist);


console.log("Parte da playlist (índices 2 a 5):", playlist.slice(2, 6));  // ['Pop', 'Rock', 'Jazz', 'Reggae']

console.log("Parte da playlist (índices 0 a 3):", playlist.slice(0, 4)); // ['Funk', 'Hip-Hop', 'Pop', 'Rock' ]

// nomeVariavel.slice(indice inicial, indice final)