// Módulo de conversión de unidades

// Privadas (no exportadas)
const factores = {
    longitud: {
        m: 1,
        cm: 0.01,
        km: 1000,
        pulgada: 0.0254
    },
    temperatura: {
        celsius: 1,
        fahrenheit: (c) => (c * 9/5) + 32,
        kelvin: (c) => c + 273.15
    }
};

// Públicas (exportadas)
function longitud(valor, desde, hasta) {
    const enMetros = valor * factores.longitud[desde];
    return enMetros / factores.longitud[hasta];
}

function celsiusAFahrenheit(celsius) {
    return factores.temperatura.fahrenheit(celsius);
}

function celsiusAKelvin(celsius) {
    return factores.temperatura.kelvin(celsius);
}

// Exportación por objeto
module.exports = {
    longitud,
    celsiusAFahrenheit,
    celsiusAKelvin,
    unidadesDisponibles: () => Object.keys(factores.longitud)
};
