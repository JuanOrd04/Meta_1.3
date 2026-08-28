// Módulo de operaciones matemáticas básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) throw new Error("No se puede dividir por cero");
    return a / b;
}

// Exportación múltiple de funciones y propiedades
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
    version: "1.0.0",
    potencia: (a, b) => Math.pow(a, b),
    raiz: (a) => Math.sqrt(a)
};
