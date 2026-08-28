// Módulo ES6 para navegador

// Factores de conversión
const FACTORES_LONGITUD = {
    m: 1,
    cm: 0.01,
    km: 1000,
    pulgada: 0.0254,
    pie: 0.3048,
    yarda: 0.9144
};

export function convertirLongitud(valor, desde, hasta) {
    const enMetros = valor * FACTORES_LONGITUD[desde];
    return (enMetros / FACTORES_LONGITUD[hasta]).toFixed(4);
}

export function celsiusAFahrenheit(celsius) {
    return ((celsius * 9/5) + 32).toFixed(2);
}

export function fahrenheitACelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5/9).toFixed(2);
}

export function celsiusAKelvin(celsius) {
    return (celsius + 273.15).toFixed(2);
}

export const UNIDADES_LONGITUD = Object.keys(FACTORES_LONGITUD);

// Exportación agrupada
export {
    convertirLongitud as longitud,
    celsiusAFahrenheit,
    fahrenheitACelsius,
    celsiusAKelvin
};
