// Módulo ES6 - Múltiples formas de exportación

// Constantes privadas (no exportadas)
const FACTORES_LONGITUD = {
    m: 1,
    cm: 0.01,
    km: 1000,
    pulgada: 0.0254,
    pie: 0.3048,
    yarda: 0.9144
};

// Exportación directa de funciones
export function longitud(valor, desde, hasta) {
    const enMetros = valor * FACTORES_LONGITUD[desde];
    return enMetros / FACTORES_LONGITUD[hasta];
}

// Exportación múltiple al final
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusAKelvin(celsius) {
    return celsius + 273.15;
}

// Exportar varias funciones a la vez
export { celsiusAFahrenheit, fahrenheitACelsius, celsiusAKelvin };

// Exportación con alias
export { longitud as convertirLongitud };

// Exportar constante
export const UNIDADES_LONGITUD = Object.keys(FACTORES_LONGITUD);
