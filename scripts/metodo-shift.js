let playlist = ['Funk', 'HipHop', 'Pop']

console.log('Antes do shift');
console.table(playlist);

// removendo o primeiro estilo
let estiloRemovido = playlist.shift();

console.log('Depois do shift');
console.table(playlist);
console.log("Estilo removido: ", estiloRemovido);