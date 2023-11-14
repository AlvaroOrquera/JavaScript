//ejercicio 1
let BotonCambiadorDeColor = document.getElementById("BotonCambiadorDeColor");
let bgParaCambiarDeColor = document.getElementById("bgParaCambiarDeColor");
const Colores = ["red", "lightblue", "green", "yellow", "purple", "orange", "gray"];
let indexColor = 0;

BotonCambiadorDeColor.addEventListener("click", () => {
    bgParaCambiarDeColor.style.background = Colores[indexColor];
    bgParaCambiarDeColor.textContent = Colores[indexColor];
    indexColor = (indexColor + 1) % Colores.length;
})
//ejercicio 2
let textoDelInput = document.getElementById("TextoDelInput");
let inputText = document.getElementById("inputText");
let botonDeReset = document.getElementById("BotonDeReset");
let miFormulario = document.getElementById("FormularioDelInput");
let dondeVaElTexto = document.getElementById("DondeVaElTexto");

inputText.addEventListener("input", () => {
    textoDelInput.textContent = inputText.value;
});
botonDeReset.addEventListener("click", () => {
    inputText.value = "";
    textoDelInput.textContent = "";
});
//ejercicio 3
let inputEstatura = document.getElementById('Estatura');
let inputPeso = document.getElementById('Peso');
let botonCalcular = document.getElementById('BotonDeCalcular');
let inputResultado = document.getElementById('inputResultado');
botonCalcular.addEventListener("click", () => {
    let estatura = Number(inputEstatura.value / 100);
    let peso = Number(inputPeso.value);
    let imc = (peso / (estatura * estatura)).toFixed(3);
    inputResultado.value = imc
});
//ejercicio 4
let inputLocal = document.getElementById('MonedaLocal');
let inputDolares = document.getElementById('MondoDolares');
let botonConvertir = document.getElementById('BotonDeConvertir');
let botonBorrar = document.getElementById('BotonParaBorrar');
botonConvertir.addEventListener("click", () => {
    let monedaLocal = Number(inputLocal.value);
    let monedaDolares = monedaLocal / 365;
    inputDolares.value = monedaDolares;
});
botonBorrar.addEventListener("click", () => {
    inputLocal.value = "";
    inputDolares.value = "";
});
//ejercicio 4.1
let inputLocal2 = document.getElementById('MonedaLocal2');
let inputDolares2 = document.getElementById('MondoDolares2');
let BotonConvertir2 = document.getElementById('BotonDeConvertir2');
let BotonBorrar2 = document.getElementById('BotonParaBorrar2');
BotonConvertir2.addEventListener("click", () => {
    let MonedaDolares2 = Number(inputDolares2.value);
    let MonedaLocal2 = MonedaDolares2 * 365;
    inputLocal2.value = MonedaLocal2;
});
BotonBorrar2.addEventListener("click", () => {
    inputLocal2.value = "";
    inputDolares2.value = "";
});
