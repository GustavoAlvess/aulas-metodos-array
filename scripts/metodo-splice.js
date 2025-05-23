/* Altera o conteúdo do array, removendo ou substituindo
elementos */


let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];

console.log("Antes do splice:", playlist);

// Removendo 2 elementos a partir do índice 2

let elementosRemovidos = playlist.splice(2, 2);
// nomeVariavel.splice(indice inical para remoção,  quantidade de elementos a partir daquela posição)

console.log("Depois do splice:", playlist);

console.log("Elementos removidos:", elementosRemovidos);