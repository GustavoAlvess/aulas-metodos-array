/* Ordena os elementos do array */

// STRINGS

let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];

let playlistOrdenada = playlist.sort();

/* nomeVariavel.sort() */

console.log("Playlist ordenada:", playlistOrdenada);

// Números 

/* Quando usamos o sort() com números, é necessário passar uma função de comparação.

Isso porque o sort() por padrão ordena os números como se fossem strings (alfabeticamente), o que pode dar resultados errados.*/

let numeros = [10, 5, 100, 50, 1]; // criando array de numbers

console.log("Antes do sort:", numeros);

// Ordenando os números de forma crescente

let numerosOrdenadosCrescentes = numeros.sort((a, b) => a - b);

// nomeVariavel.sort(condição);

/*
condição: 
Se retornar um valor negativo: 'a' deve vir antes de 'b' na ordem de classificação.
Se retornar um valor positivo:  'a' deve vir depois de 'b' na ordem de classificação.
Se retornar zero: 'a' e 'b' devem ter a mesma posição na ordem de classificação.
*/

console.log("Números em ordem crescente:", numerosOrdenadosCrescentes);

// Ordenando os números de forma decrescente

let numerosOrdenadosDecrescentes = numeros.sort((a, b) => b - a);

// nomeVariavel.sort(condição);

console.log("Números em ordem decrescente:", numerosOrdenadosDecrescentes);