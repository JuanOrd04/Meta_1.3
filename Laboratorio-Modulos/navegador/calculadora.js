// Módulo ES6 para navegador
// Exportaciones nombradas y por defecto

export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {
    if (b === 0) throw new Error("No se puede dividir por cero");
    return a / b;
}

export function potencia(a, b) {
    return Math.pow(a, b);
}

export function raiz(a) {
    return Math.sqrt(a);
}

export function porcentaje(valor, porcentaje) {
    return (valor * porcentaje) / 100;
}

export const version = "2.0.0";

// Exportación por defecto
export default {
    sumar,
    restar,
    multiplicar,
    dividir,
    potencia,
    raiz,
    porcentaje,
    version
};
