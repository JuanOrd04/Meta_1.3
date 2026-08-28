// Archivo principal ES6
// Diferentes estilos de importación

// Importación por defecto (sin llaves)
import CalculadoraAvanzada from './calculadora.js';

// Importación nombrada (con llaves)
import { 
    sumar, 
    restar, 
    multiplicar, 
    dividir, 
    version 
} from './calculadora.js';

// Importación con alias
import { 
    longitud, 
    celsiusAFahrenheit, 
    celsiusAKelvin,
    UNIDADES_LONGITUD 
} from './conversor.js';

// Importación de todo el módulo como objeto
import * as conversorCompleto from './conversor.js';

console.log("🧪 PRUEBA DE MÓDULOS ES6 EN NODE.JS\n");
console.log("=".repeat(50));

// Usar importaciones nombradas
console.log("📐 CALCULADORA BÁSICA:");
console.log(`15 + 7 = ${sumar(15, 7)}`);
console.log(`25 - 13 = ${restar(25, 13)}`);
console.log(`8 * 9 = ${multiplicar(8, 9)}`);
console.log(`100 / 4 = ${dividir(100, 4)}`);

console.log("\n" + "=".repeat(50));

// Usar exportación por defecto
console.log("🔬 CALCULADORA AVANZADA:");
console.log(`2^10 = ${CalculadoraAvanzada.potencia(2, 10)}`);
console.log(`√144 = ${CalculadoraAvanzada.raiz(144)}`);
console.log(`20% de 500 = ${CalculadoraAvanzada.porcentaje(500, 20)}`);

console.log("\n" + "=".repeat(50));

// Usar conversor con importaciones directas
console.log("🔄 CONVERSOR (importaciones directas):");
console.log(`1.5 km a m = ${longitud(1.5, 'km', 'm')} m`);
console.log(`36°C a °F = ${celsiusAFahrenheit(36)}°F`);
console.log(`100°C a K = ${celsiusAKelvin(100)}K`);

console.log("\n" + "=".repeat(50));

// Usar conversor con importación namespace
console.log("🔄 CONVERSOR (importación namespace):");
console.log(`3 yardas a m = ${conversorCompleto.longitud(3, 'yarda', 'm')} m`);
console.log(`6 pies a cm = ${conversorCompleto.longitud(6, 'pie', 'cm')} cm`);
console.log(`68°F a °C = ${conversorCompleto.fahrenheitACelsius(68)}°C`);

console.log("\n" + "=".repeat(50));

// Mostrar metadatos
console.log("📦 INFO DE MÓDULOS:");
console.log(`Versión calculadora: ${version}`);
console.log(`Unidades disponibles: ${UNIDADES_LONGITUD.join(', ')}`);

// DEMO: Importación dinámica (ES2020+)
console.log("\n" + "=".repeat(50));
console.log("📥 IMPORTACIÓN DINÁMICA:");

const importarModulo = async (nombre) => {
    try {
        const modulo = await import(`./${nombre}.js`);
        console.log(`✅ Módulo '${nombre}' cargado dinámicamente`);
        console.log(`   Exportaciones: ${Object.keys(modulo).join(', ')}`);
    } catch (error) {
        console.error(`❌ Error al cargar '${nombre}': ${error.message}`);
    }
};

// Ejecutar importación dinámica
await importarModulo('calculadora');
await importarModulo('conversor');
