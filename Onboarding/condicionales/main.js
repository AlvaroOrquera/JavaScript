//ejercicio1
let num1 = 4;
let num2 = 5;

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}
//ejercicio2
if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) {
    console.log(num2);
} else {
    console.log("Los números son iguales");
}
//ejercicio3
if (num1 === num2) {
    console.log("Los números son iguales");
} else {
    console.log("Los números no son iguales");
}
//ejercicio4
let fecha1 = "2018-9-2"
let fecha2 = "2023-5-7"
if (fecha1 >= fecha2) {
    console.log(`la fecha ${fecha1} es 
mayor que la ${fecha2}`)
}
else if (fecha1 <= fecha2) {
    console.log(`la fecha ${fecha2} es 
mayor que la ${fecha1}`)
}
else {
    console.log(`las fechas son iguales`)
}
//ejercicio5
fecha1 = "2018-10-7"
fecha2 = "2018-2-17"
if (fecha1 >= fecha2) {
    console.log(`la fecha ${fecha1} es 
mayor que la ${fecha2}`)
}
else if (fecha1 <= fecha2) {
    console.log(`la fecha ${fecha2} es 
mayor que la ${fecha1}`)
}
else {
    console.log(`las fechas son iguales`)
}
//ejercicio6
let dato1 = 5
let dato2 = 7
let dato3 = 9
let datos = (dato1, dato2, dato3)
if (datos) {
    console.log(`el número ${datos} es el mayor`)
}
//ejercicio7
let color = prompt(`ingrese un color`)
switch (color) {
    case "rojo":
        alert(`el color de la pasion`)
        break
    case "azul":
        alert(`el color del mar`)
        break
    case "verde":
        alert(`el color de la naturaleza`)
        break
}
//ejercicio8
let valor1 = Number(prompt(`Ingrese el primer valor del 1 al 100`))
let valor2 = Number(prompt(`Ingrese el segundo valor del 1 al 100`))

if (valor1 >= 1 && valor2 <= 100 || valor2 >= 1 && valor1 <= 100) {
    let operacion = prompt(`ingrese la operacion que desea realizar: suma, resta, multiplicacion o division`)
    switch (operacion) {
        case "suma":
            suma = valor1 + valor2
            alert(`suma: ${valor1} + ${valor2} = ${suma}`)
            break
        case "resta":
            resta = valor1 - valor2
            alert(`resta: ${valor1} - ${valor2} = ${resta}`)
            break
        case "multiplicacion":
            multiplicacion = valor1 * valor2
            alert(`multiplicacion: ${valor1} * ${valor2} = ${multiplicacion}`)
            break
        case "division":
            division = valor1 / valor2
            alert(`division: ${valor1} / ${valor2} = ${division}`)
            break
        default:
            alert(`Datos invalidos`)
    }
}
//ejercicio9
let persona1 = {
    nombre: "Juan",
    edad: "39",
    altura: "180cm"
}
let persona2 = {
    nombre: "Marta",
    edad: "42",
    altura: "165cm"
}
if (persona1.altura >= persona2.altura) {
    console.log(`${persona1.nombre} es la persona más alta.`);
} else if (persona1.altura <= persona2.altura) {
    console.log(`${persona2.nombre} es la persona más alta.`);
} else {
    console.log("Ambas personas tienen la misma altura.");
}
if (persona1.edad >= persona2.edad) {
    console.log(`${persona1.nombre} es la persona de mayor edad.`);
} else if (persona1.edad <= persona2.edad) {
    console.log(`${persona2.nombre} es la persona de mayor edad.`);
} else {
    console.log("Ambas personas tienen la misma edad.");
}
//ejercicio10
let name = prompt("ingrese su nombre")
let age = prompt("ingrese su edad en numeros")
let height = prompt("ingrese su altura en centimetro y numeros")
let vision = prompt("ingrese su nivel de vision del 1 al 10")
if ((age >= 18) && (vision >= 8) && (vision <= 10) && (height >= 150)) {
    alert(`Puede realizar el curso de manejo.`)
}
else {
    alert(`No puede realizar el curso de manejo.`)
}
//ejercicio11
let edades = Number(prompt(`ingrese su edad para ser clasificado`))
if ((edades >= 0) && (edades <= 12)) {
    alert(`eres un infante`)
}
else if ((edades >= 13) && (edades <= 18)) {
    alert(`eres un adolescente`)
}
else if ((edades >= 19 && (edades <= 45))) {
    alert("eres un joven mayor")
}
else if ((edades >= 45) && (edades <= 99)) {
    alert("eres un anciano")
}
else {
    let = prompt("en realidad tiene esa edad?")
    alert("que loco!!")
}

//Ejercicio N12 parte 1
let numero = Number(prompt(`ingrese un numero del 1 al 3: `))
if ((numero >= 1) && (numero <= 3)) {
    alert(`El número ingresado es ${numero}`)
    alert(`el doble del número ingresado es ${numero * 2}`)
    alert(`el tirple del número ingresado es ${numero * 3}`)
} else {
    alert("Ese valor no está permitido");
}
//ejercicio12 parte 2
let numero2 = Number(prompt(`ingrese el numero que desee: `))
if (numero2) {
    alert(`El número ingresado es ${numero2}`)
    alert(`el doble del número ingresado es ${numero2 * 2}`)
    alert(`el tirple del número ingresado es ${numero2 * 3}`)
} else {
    alert("Ese valor no está permitido");
}
//ejercicio13
let nombre13 = prompt(`Laguna del Rey Ingrese su nombre:`);
let pase = prompt(`ingrese el tipo de pase : Vip o Normal`)
let entrada = prompt(`Tiene entradas? Si o No`)
if ((nombre13 === `Alvaro`) || (pase === `vip`)) {
    alert(`Bienvenido a Laguna del Rey ${nombre13}`)
}
else if (entrada === "si") {
    let entrada2 = prompt(`Desea utilizar la entrada? Si o No`)
    if (entrada2 == "si")
        alert(`Bienvenido a Laguna del Rey ${nombre13}`)
    else {
        alert(`Laguna del Rey te despide`)
    }
}
else {
    let comprarntrada = prompt(`Quiere comprar una entrada? Si o No`)
    if (comprarntrada === "si") {
        let dinero = Number(prompt(`Ingrese su dinero Disponible en Laguna del Rey`))
        if (dinero >= 1000) {
            alert(`Compra Exitosa que tenga una linda noche en Laguna del Rey`)
        }
        else {
            alert(`Compra Rechazada`)
        }
    }
}
//ejercicio14
let numeroIncoginito = Number(prompt(`ingrese un número del 1 al 10`))
if ((numeroIncoginito >= 1) && (numeroIncoginito <= 10)) {
    if (numeroIncoginito === 7)
        alert(`Ganaste has adivinado el número`)
    else if (numeroIncoginito > 7) {
        alert(`el número ingresado es mayor, vuelva a intentarlo`)
    }
    else {
        alert(`el número ingresado es menor, vuelva a intentarlo`)
    }
} else {
    alert(`número incorrecto`)
}

