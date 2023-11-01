//ejercicio 1 
function suma() {
    console.log(100 * 20)
}
suma()
//ejercicio 2
function suma1() {
    console.log(100 * 20)
}
suma1()
//ejercicio 3
function suma2(parametro1, parametro2) {
    console.log(`los parametros son: ${parametro1 + parametro2}`)
}
suma2(100, 20)
//erjercicio4
let numeroA = 100;
let numeroB = 20;
function suma3(numeroA, numeroB) {
    console.log(`la suma es: ${numeroA + numeroB}`)
}
suma3(numeroA, numeroB)
//ejercicio 5
function multiplicacion(base, altura) {
    const area = base * altura
    return area
}
console.log(multiplicacion(100, 20))
//ejercicio 6
const multipplicaciondelejercicio6 = function multi() {
    console.log(100 * 20)
}
multipplicaciondelejercicio6()
//ejercicio 7
const ejercicio7 = (base, altura) => {
    const area = base * altura
    return area
}
console.log(ejercicio7(100, 20))
//ejericio 8
function saludar(nombre) {
    console.log(`Hola ${nombre} que haces maquina maquiavelica del mal?`)
}
saludar("Alvaro")
//ejercicio 9
const ejericio8 = (num1, num2) => {
    const multipli = num1 * num2
    return multipli
}
console.log(ejericio8(20, 40))
//ejercicio 10
function area(base2, altura2) {
    return (1 / 2 * base2 * altura2)
}
const base2 = 10;
const altura2 = 20;
function perimetro(lado1, lado2, lado3) {
    return (lado1 + lado2 + lado3)
}
const lado1 = 15;
const lado2 = 15;
const lado3 = 15;
const areaDelTriangulo = area(base2, altura2);
const perimetroDelTriangulo = perimetro(lado1, lado2, lado3);

console.log(`El área del triángulo es: ${areaDelTriangulo}`);
console.log(`El perímetro del triángulo es: ${perimetroDelTriangulo}`);
//ejercicio 11
const calcularPrecioTotal1 = (precio, cantidad) => {
    return (0.9 * precio * cantidad)
}
const calcularPrecioTotal2 = (precio2, cantidad2) => {
    return (0.8 * precio2 * cantidad2)
}
const precio = 100;
const cantidad = 10;
const precio2 = 50;
const cantidad2 = 20;
const totalCompra1 = calcularPrecioTotal1(precio, cantidad);
const totalCompra2 = calcularPrecioTotal2(precio2, cantidad2);
console.log(`El total es: $${totalCompra1} con el 10% de descuento`);
console.log(`El total es: $${totalCompra2} con el 20% de descuento`);
//ejercicio 12
function esMayordeEdad(edad) {
    if (edad >= 18) {
        return `Eres mayor de edad tiene ${edad}.`;
    } else {
        return `Eres menor de edad tiene ${edad}.`;
    }
}
console.log(esMayordeEdad(20));
console.log(esMayordeEdad(15));
//ejercicio 13
function impuesto(ingresoAnual) {
    if (ingresoAnual <= 10000) {
        let descuento=(ingresoAnual*0.1)
        console.log(`el impuesto del 10% de su ingreso anual es de: ${descuento}`)
    }
    else if ((ingresoAnual > 10000) && (ingresoAnual <= 20000)) {
        let descuento2=(ingresoAnual*0.15)
        console.log(`el impuesto del 15% de su ingreso anual es de: ${descuento2}`)
    }
    else {
        let descuento3=(ingresoAnual*0.2)
        console.log(`el impuesto del 20% de su ingreso anual es de: ${descuento3}`)
    }
}
impuesto(13500)
//ejercicio 14
function verificarDiaLaboral(dia) {
    switch (dia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es un día laboral.";
        case 6:
        case 7:
            return "Es fin de semana.";
    }
}
console.log(verificarDiaLaboral(1));
console.log(verificarDiaLaboral(6)); 
