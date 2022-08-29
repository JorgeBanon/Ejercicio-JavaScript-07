// Ejercicio 3

let hoy = new Date();
console.log(hoy);

let cumple = new Date("august 11, 1960");
console.log(cumple);

console.log(hoy.getDate() > cumple.getDate())

let dia = cumple.getDate();
console.log(dia);

let mes = cumple.getMonth() + 1;
console.log(mes);

let anyo = cumple.getFullYear();
console.log(anyo);