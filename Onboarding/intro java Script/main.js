/*ejercicio1*/
let miNombre = "Alvaro"
/*ejercicio2*/
let miApellido = "Orquera"
/*ejercicio3*/
let miEdad = "23 años"
/*ejercicio4*/
let miMascota = "Gato"
/*ejercicio5*/
let edadMascota = "2 años"
/*ejercicio6*/
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);
/*ejercico7*/
let nombreCompleto = miNombre + " " + miApellido
/*ejercicio8*/
let textoPresentacion = `Hola, me llamo ${miNombre} ${miApellido} y tengo ${miEdad}, tengo un ${miMascota} y tiene ${edadMascota} de edad`
console.log(textoPresentacion)
/*ejercicio9*/
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota
/*ejercicio10*/
let alumno = {
    Nombre: "Alvaro",
    Apellido: "Orquera",
    Edad: "23 años",
    Altura: "175cm",
    Mascotas: "2"
}

console.table(alumno)
console.log(alumno.Nombre)
console.log(alumno.Apellido)
console.log(alumno.Edad)
console.log(alumno.Altura)
console.log(alumno.Mascotas)
/*ejercicio11*/
let mascota = {
    Nombre: "Kurama",
    Edad: "2 años",
    Color: "dorado",
    Agresividad: "baja",
    Podergatuno: "alto"
}
console.table(mascota)
console.log(mascota.Nombre)
console.log(mascota.Edad)
console.log(mascota.Color)
console.log(mascota.Agresividad)
console.log(mascota.Podergatuno)
/*ejercicio12*/
let frutas = ["manzana", "bananas", "pera", "mandarina", "sandia"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[3])
/*ejercicio13*/
let edad = Number(prompt("Por favor, ingresa tu edad"));
let soyMayorDeEdad = edad >= 18;
alert("Soy mayor de edad: " + soyMayorDeEdad);
/*ejercicio14*/
let numeros = ["1", "2", "3", "4", "5"]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
/*ejercicio15*/
const familia = [{
    nombre: "Juana",
    apellido: "ruperta",
    edad: 63
},
{
    nombre: "Anastacio",
    apellido: "de los Andes",
    edad: 68
},
{
    nombre: "Juan Carlos",
    apellido: "de los Andes",
    edad: 25
},
{
    nombre: "Maximo Meridian",
    apellido: "De la cuarta legion",
    edad: 28
},
{
    nombre: "Alberso",
    apellido: "Fernandez",
    edad: 22
}

];
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])
/*ejercicio16*/
let textoAleatorio = `${familia[0].nombre} fue a la verdulera y compro ${numeros[3]}
${frutas[1]}`

console.log(textoAleatorio)
/*ejercicio17*/
let edad1 = prompt("ingrese su edad")
let edad2 = prompt("ingrese la edad de su compañero")
let edadiguales = edad1 === edad2
alert(`Mi edad es igual a la de mi compañero ${edadiguales}`)
let soyMayor = edad1 > edad2
alert(`Mi edad es mayor a la de mi compañero ${soyMayor}`)
let soyMenor = edad1 < edad2
alert(`Mi edad es menor a la de mi compañero ${soyMenor}`)
/*ejercicio18*/
let Edad = prompt("Por favor, ingresa tu edad");
let Altura = prompt("Por favor, ingresa tu altura en cm");
let requisito = Edad > 6 && Altura >= 120
alert(`Puede subir a la atracción: ${requisito}`)
/*ejercicio19*/
let pase= prompt( `tiene pase vip, normal o limitado?`)
let saldo= Number(prompt(`ingrese su saldo`))
let requisitoDisco= (saldo >= 1000 || pase== "vip" )
alert(`puede pasar: ${requisitoDisco}`)