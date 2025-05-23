let playlist = ["Funk", "HipHop", "Pop"];

console.log("Antes do pop\n");
console.table(playlist);

//removendo o último estilo
let estiloRemovido = playlist.pop("Pop");

console.log("Depois do pop");
console.table(playlist);
console.log("Estilo removido: ", estiloRemovido);
