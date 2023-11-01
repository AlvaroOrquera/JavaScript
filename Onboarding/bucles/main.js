//ejercicio 1
/* let numerosIngresados = Number(prompt(`Ingrese un numero del 1 al 100`));
for (let i = 0; i <= numerosIngresados; i++) {
    console.log(i)
} */

//ejercicio 2
/* let numerosIngresados2 = Number(prompt(`Ingrese un numero del 1 al 10`))
for (let i1 = 0; i1 <= 10; i1++) {
    console.log(`${i1} * ${numerosIngresados2} = ${i1 * numerosIngresados2}`)
} */
//ejercicio 3
/* let sumandoNumero1 = []
let numero1 = Number(prompt("Ingrese un numero"))
sumandoNumero1.push(numero1)

while (numero1 > 0) {
    numero1 = Number(prompt("Ingrese un numero o 0 para finalizar"))
    sumandoNumero1.push(numero1)
}

let suma = sumandoNumero1.reduce((total, num) => {
    return total + num
})

console.log(suma) */
//ejercicio 4
let numeroSumar = Number(prompt(`Ingrese un numero`))
let totalNumeros = []
let numeroAux = 0
do {
    totalNumeros.push(numeroSumar)
    numeroAux = numeroAux + numeroSumar
    console(`la suma de los numeros es ${numeroAux}`)
} while (numeroSumar !== 0) {
    console.log(totalNumeros)
    alert(numeroAux)
    alert(totalNumeros)
}
//ejercicio 5
/* let numero3 = 20
let numeroIngresados5 = Number(prompt(`Ingresa un numero campeon`))
let intentos = 1
while (numeroIngresados5 !== 0) {
    numeroIngresados5 = Number(prompt(`Ingresa un numero campeon`))
    if (numero3 === numeroIngresados5) {
        console.log(`Ganaste!!!`)
        break;
    } else if (numero3 > numeroIngresados5) {
        console.log(`El numero es menor, estuviste cerca!`)
    } else {
        console.log(`El numero es mayor, estuviste cerca!`)
    };
}
intentos = ++intentos
console.log(`La cantida de intentos realizados es: ${intentos}`) */
//ejercicio 6
/* let numeroIngresados6 = Number(prompt(`Ingrese un numero N6`))
for (i = 0; i < numeroIngresados6; i++) {
    if (numeroIngresados6 % 2 === 0) {
        console.log(i)
    }
} */
//ejercicio 7
/* t ruidosCampanas = "Ding Dong";

function sonarCampanas() {
    for (let i = 0; i < 5; i++) { 
        console.log(ruidosCampanas);
    }
    return "Ding Dong";
}

sonarCampanas();*/
//ejercicio 8

const fechaLimite = "1987-10-7"
const fechas = ["1984-10-2", "1990-3-2", "1973-15-7", "2024-10-8", "2011-1-9"]
for (let fechaLimite of fechas) {
    if (fechaLimite >= fechas) {
        console.log(`fecha mayor o igual ${fechaLimite}`)
    } else {
        console.log(`fecha menor o igual ${fechaLimite}`)
    }
}

//ejercicio 9
let coloress = ["amarillo", "azul", "rojo", "verde", "naranja", "rosa", "violeta", "marron"]

for (let colores of coloress) {

    console.log(colores)
}

//ejercicio 10

function colors(coloress) {

    for (let props of coloress) {
        console.log(`${props}`)
    }

}
colors(coloress)

//ejercicio 11

const numeros = [1, 2, 3, 4, 5]
for (const props of numeros) {

    console.log(`el numero es ${props} y su doble es ${props * 2}`)
}

//ejercicio 12

let padre = {
    nombre: "Oscar",
    apellido: "Perez",
    altura: 1.85,
    edad: 60
}
let madre = {
    nombre: "Laura",
    apellido: "Perez",
    altura: 1.60,
    edad: 60
}
let hijo1 = {
    nombre: "Lautaro",
    apellido: "Perez",
    altura: 1.70,
    edad: 15
}
let hijo2 = {
    nombre: "Bruno",
    apellido: "Perez",
    altura: 1.75,
    edad: 25
}

let familia = [padre, madre, hijo1, hijo2]

function PresentacionFamiliar() {

    for (let props of familia) {

        console.log(`hola soy ${props.nombre} ${props.apellido} y tengo ${props.edad} años `)

    }
}
PresentacionFamiliar()

//ejercicio 13

let auto = {
    marca: "ford",
    modelo: "Ka",
    puertas: "3 puertas",
    color: "gris",
    año: 2013
}
for (const key in auto) {
    console.log(key)
}

//ejercicio 14

let auto1 = {
    marca: "ford",
    modelo: "Ka",
    puertas: "3 puertas",
    color: "gris",
    año: 2013
}
for (const key in auto1) {

    console.log(`${auto1[key]}`)

}

//ejercicio 15

let IngresarNumero = Number(prompt(`ingrese un numero`))
let sumaPar = 0
let sumaImpar = 0

while (IngresarNumero !== 0) {
    if (IngresarNumero % 2 === 0) {
        sumaPar = sumaPar + IngresarNumero
    } else {
        sumaImpar = sumaImpar + IngresarNumero
    }
    IngresarNumero = Number(prompt(`ingrese un numero`))
}
console.log(`Pares: ${sumaPar} Impares: ${sumaImpar}`)

//ejercicio 16

let numeros16 = [1, 2, 3, 4, 5, 14, 7, 8, 9, 10]
let numeroMasGrande = 0;

for (let numero of numeros16) {

    if (numeroMasGrande < numero)
        numeroMasGrande = numero;

}

console.log(numeroMasGrande);
