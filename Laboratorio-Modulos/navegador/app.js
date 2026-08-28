// Archivo principal - Entry point del navegador
// Importa y coordina todos los módulos

import calculadora, { 
    version as calcVersion,
    sumar, restar, multiplicar, dividir,
    potencia, raiz, porcentaje
} from './calculadora.js';

import { 
    longitud, 
    celsiusAFahrenheit, 
    fahrenheitACelsius, 
    celsiusAKelvin,
    UNIDADES_LONGITUD
} from './conversor.js';

// También importar todo como namespace
import * as conversorCompleto from './conversor.js';

console.log("🧪 Laboratorio de Módulos ES6 en Navegador");
console.log("📦 Módulos cargados exitosamente");
console.log("📐 Calculadora versión:", calcVersion);
console.log("📏 Unidades disponibles:", UNIDADES_LONGITUD);

// ============ MANEJADORES DE EVENTOS ============

// Función para mostrar resultados
function mostrarResultado(elementId, mensaje) {
    const elemento = document.getElementById(elementId);
    elemento.textContent = mensaje;
    console.log(`[${elementId}]:`, mensaje);
}

// CALCULADORA
document.getElementById('btnSuma').addEventListener('click', () => {
    const resultado = sumar(5, 3);
    mostrarResultado('resultadoCalc', `✅ 5 + 3 = ${resultado}`);
});

document.getElementById('btnResta').addEventListener('click', () => {
    const resultado = restar(10, 4);
    mostrarResultado('resultadoCalc', `✅ 10 - 4 = ${resultado}`);
});

document.getElementById('btnMultiplica').addEventListener('click', () => {
    const resultado = multiplicar(7, 6);
    mostrarResultado('resultadoCalc', `✅ 7 × 6 = ${resultado}`);
});

document.getElementById('btnDivide').addEventListener('click', () => {
    try {
        const resultado = dividir(20, 5);
        mostrarResultado('resultadoCalc', `✅ 20 ÷ 5 = ${resultado}`);
    } catch (error) {
        mostrarResultado('resultadoCalc', `❌ ${error.message}`);
    }
});

document.getElementById('btnPotencia').addEventListener('click', () => {
    const resultado = potencia(2, 8);
    mostrarResultado('resultadoCalc', `✅ 2⁸ = ${resultado}`);
});

document.getElementById('btnRaiz').addEventListener('click', () => {
    const resultado = raiz(81);
    mostrarResultado('resultadoCalc', `✅ √81 = ${resultado}`);
});

document.getElementById('btnPorcentaje').addEventListener('click', () => {
    const resultado = porcentaje(500, 20);
    mostrarResultado('resultadoCalc', `✅ 20% de 500 = ${resultado}`);
});

// CONVERSOR LONGITUD
document.getElementById('btnCmAM').addEventListener('click', () => {
    const resultado = longitud(100, 'cm', 'm');
    mostrarResultado('resultadoLongitud', `✅ 100 cm = ${resultado} m`);
});

document.getElementById('btnKmAM').addEventListener('click', () => {
    const resultado = longitud(5, 'km', 'm');
    mostrarResultado('resultadoLongitud', `✅ 5 km = ${resultado} m`);
});

document.getElementById('btnPulgACm').addEventListener('click', () => {
    const resultado = longitud(10, 'pulgada', 'cm');
    mostrarResultado('resultadoLongitud', `✅ 10" = ${resultado} cm`);
});

document.getElementById('btnYardaAM').addEventListener('click', () => {
    // Usando el namespace import
    const resultado = conversorCompleto.longitud(3, 'yarda', 'm');
    mostrarResultado('resultadoLongitud', `✅ 3 yardas = ${resultado} m`);
});

document.getElementById('btnPieACm').addEventListener('click', () => {
    const resultado = longitud(6, 'pie', 'cm');
    mostrarResultado('resultadoLongitud', `✅ 6 pies = ${resultado} cm`);
});

// CONVERSOR TEMPERATURA
document.getElementById('btnCelsiusF').addEventListener('click', () => {
    const resultado = celsiusAFahrenheit(25);
    mostrarResultado('resultadoTemp', `✅ 25°C = ${resultado}°F`);
});

document.getElementById('btnFahrenheitC').addEventListener('click', () => {
    const resultado = fahrenheitACelsius(68);
    mostrarResultado('resultadoTemp', `✅ 68°F = ${resultado}°C`);
});

document.getElementById('btnCelsiusK').addEventListener('click', () => {
    const resultado = celsiusAKelvin(0);
    mostrarResultado('resultadoTemp', `✅ 0°C = ${resultado}K`);
});

// MOSTRAR INFORMACIÓN DE MÓDULOS
function mostrarInfoModulos() {
    const info = {
        calculadora: {
            version: calcVersion,
            funciones: Object.keys(calculadora),
            tipo: 'import default + nombradas'
        },
        conversor: {
            unidades: UNIDADES_LONGITUD,
            funciones: ['longitud', 'celsiusAFahrenheit', 'fahrenheitACelsius', 'celsiusAKelvin'],
            tipo: 'import nombrado + namespace'
        }
    };
    
    document.getElementById('infoModulos').innerHTML = `
📦 <strong>Módulo Calculadora</strong><br>
   • Versión: ${info.calculadora.version}<br>
   • Funciones: ${info.calculadora.funciones.length}<br>
   • Importación: ${info.calculadora.tipo}<br>
<br>
📏 <strong>Módulo Conversor</strong><br>
   • Unidades: ${info.conversor.unidades.join(', ')}<br>
   • Funciones: ${info.conversor.funciones.length}<br>
   • Importación: ${info.conversor.tipo}<br>
<br>
✅ <strong>Estado:</strong> Módulos cargados correctamente<br>
📅 <strong>Timestamp:</strong> ${new Date().toLocaleTimeString()}
    `;
}

// Cargar info inicial
setTimeout(mostrarInfoModulos, 100); // Esperar a que todo cargue

// Demo de importación dinámica
console.log("📥 Probando importación dinámica...");
import('./calculadora.js').then(modulo => {
    console.log("✅ Importación dinámica exitosa:", Object.keys(modulo));
}).catch(error => {
    console.error("❌ Error en importación dinámica:", error);
});
