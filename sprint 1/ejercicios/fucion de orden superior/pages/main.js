//ejericio 1
function imprimirMensaje(mensaje) {
    console.log(mensaje);
}
imprimirMensaje(`mensaje 1`)
const imprimirmensaje2 = (mensaje) => console.log(mensaje)
imprimirmensaje2(`mensaje 2`)
//ejercicio 2
function crearMultiplicacion(numero1, numero2) {
    let resultado = numero1 * numero2
    return resultado
}
const crearMultiplicacion2 = (numero1, numero2) => numero1 * numero2

console.log(crearMultiplicacion(2, 3))
//ejercicio 3
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(crearMultiplicacion)
console.log(array)

//ejercicio 4
function cervezasMasAlcohol(beers) {
    const resultado = beers.filter(beers => beers.abv)
        .toSorted((a, b) => b.abv - a.abv)
        .map(beers => beers.abv)
        .slice(0, 10)
    console.log(resultado)
}
cervezasMasAlcohol(beers)
//ejercicio 5
function cervezasMasAmargas(beers) {
    const resultado = beers.filter(beers => beers.ibu)
        .toSorted((a, b) => a.ibu - b.ibu)
        .map(beers => beers.ibu)
        .slice(0, 10)
    console.log(resultado)
}
cervezasMasAmargas(beers)
//ejercicio 6
function nombreCerveza(nombre) { return beers.find(beer => beer.name == nombre) }
console.log(nombreCerveza("Trashy Blonde"))
//ejercicio 7
let valorIngresado = 200
function EcontrarValor(beers, valor) {
    const Comparacion = beers.find(beers => beers.ibu == valor)
    if (Comparacion) {
        return Comparacion
    }
    console.log(`no existe cerveza con ibu de ese ${valor}`)
}
EcontrarValor(beers, valorIngresado)
//ejercicio 8
function encontrarPosicionCerveza(beers, nombre) {
    const posicion = beers.findIndex(function (beers) {
        return beers.nombre === nombre;
    });
    if (posicion !== -1) {
        return posicion;
    } else {
        console.log(`${nombre} no existe.`);
    }
}
encontrarPosicionCerveza(beers, "Trashy Blonde")
//ejericicio 9
function CervezasARecibir(beers, alcohol) {
    const resultado = beers.filter((beers) => beers.abv <= alcohol)
    const resultado2 = resultado.map((beers) => ({
        nombre: beers.name,
        alcohol: beers.abv,
        amargor: beers.ibu,

    }))
    return resultado2
}
const ValorDelAlcohol = 6
const cervezaFiltradas = CervezasARecibir(beers, ValorDelAlcohol)
console.log(cervezaFiltradas)
//ejercicio 10
function ordenarCervezasPorPropiedad(beers, propiedad, ascendente) {
    const copiaCervezas = beers.toSorted(function (beersA, beersB) {
        if (ascendente) {
            return beersA[propiedad] - beersB[propiedad];
        } else {
            return beersB[propiedad] - beersA[propiedad];
        }
    });

    const cervezasOrdenadas = copiaCervezas.slice(0, 10);

    return cervezasOrdenadas;
}
const cervezasOrdenadas = ordenarCervezasPorPropiedad(beers, "abv", true);
console.log(cervezasOrdenadas);
//ejerciocio 11
function rellenarTabla(beers, id) {
    const buscartable = document.getElementById(id)
    function crearFila(beer) {
        let fila = `<tr>
            <td>${beer.name}</td>
            <td>${beer.abv}</td>
            <td>${beer.ibu}</td>
        </tr>`
        return fila
    }
    beers.forEach(beer => {
        let fila2 = crearFila(beer)
        buscartable.innerHTML += fila2
    });
}
rellenarTabla(ordenarCervezasPorPropiedad(beers, "name", true), "tbody",)  
