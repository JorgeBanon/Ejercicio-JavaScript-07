// Ejercicio 2

const persona = {
    nombre: "Jorge",
    apellido: "Bañón",
    edad: 62,
    estatura: 1.72,
    eresDesarrollador: true
};

let miEdad = persona.edad;
console.log(miEdad)

const arrayPersona = new Array(persona);
console.log(arrayPersona)

const amigos = [{
    nombre: "Carlos",
    edad: 50
}, 
{
    nombre: "Luis",
    edad: 47
}]

amigos.push(persona)
console.log(amigos)

console.log(amigos.sort((a, b) => a.edad  - b.edad))