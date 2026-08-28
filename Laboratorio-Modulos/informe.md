# Laboratorio de Módulos JavaScript

## Datos del Estudiante
**Nombre:** Juan Roberto Orduña López
**Fecha:** 27 de agosto de 2026
**Tiempo de desarrollo:** 2 horas de laboratorio

## 1. Comparativa CommonJS vs ES6

| Característica | CommonJS | ES6 Modules |
| :--- | :--- | :--- |
| **Sintaxis de importación** | `require()` | `import` |
| **Sintaxis de exportación** | `module.exports` / `exports` | `export` / `export default` |
| **Carga (síncrona/asíncrona)** | Síncrona (bloqueante) | Asíncrona (fase de parseo previa) |
| **Se puede usar en Node.js** | Sí (por defecto) | Sí (requiere `"type": "module"`) |
| **Se puede usar en el navegador** | No (requiere un bundler) | Sí (con `<script type="module">`) |
| **Importación dinámica** | Sí (`require()` en cualquier bloque) | Sí (usando `import()` que retorna Promesa) |
| **Alcance del módulo (scope)** | Encapsulado en función wrapper local | Nivel de módulo estricto (strict mode) |
| **Cacheo de módulos (si/no)** | Sí | Sí |

## 2. Análisis de Errores

*   **Error 1:** `const { sumar } = require('./calculadora.js');`
    *   **Causa:** Si el proyecto o el archivo están configurados para usar ES6 (por ejemplo, tienen `"type": "module"` en el `package.json`), no se puede usar `require()`. Node.js espera sintaxis `import`.
    *   **Solución:** Cambiar a importación ES6 (`import { sumar } from './calculadora.js';`) o renombrar el archivo importado a `.cjs` si se desea mantener CommonJS.
*   **Error 2:** `export function miFuncion() {} module.exports = { miFuncion };`
    *   **Causa:** Se están mezclando dos sistemas de módulos diferentes en el mismo archivo. `export` pertenece a ES6 y `module.exports` a CommonJS.
    *   **Solución:** Usar exclusivamente sintaxis ES6 quitando la segunda línea, o usar exclusivamente CommonJS cambiando la primera a `function miFuncion() {}`.
*   **Error 3:** `<script src="app.js"></script>`
    *   **Causa:** En el navegador, los scripts regulares no soportan la sintaxis de módulos (`import`/`export`) por defecto.
    *   **Solución:** Añadir el atributo específico: `<script type="module" src="app.js"></script>`.
*   **Error 4:** `import * from './modulo.js';`
    *   **Causa:** Error de sintaxis ES6. Al importar todo el contenido de un módulo como un namespace, es obligatorio asignar un alias.
    *   **Solución:** Agregar el alias: `import * as miModulo from './modulo.js';`.

## 3. Respuestas a Reflexión

1.  **¿Por qué CommonJS es síncrono y ES6 modules puede ser asíncrono?**
    CommonJS fue diseñado para entornos de servidor (disco duro) donde la lectura de archivos es rápida, por lo que carga y ejecuta los archivos de manera síncrona. ES6 se diseñó pensando en la web, donde los archivos se descargan por red; por ello, realiza una fase de parseo asíncrono construyendo un árbol de dependencias antes de ejecutar el código.
2.  **¿Qué ventajas tiene usar "type": "module" en Node.js?**
    Permite estandarizar el código utilizando la misma sintaxis (`import`/`export`) tanto en el backend como en el frontend, facilitando compartir librerías y componentes sin necesidad de transpiladores adicionales.
3.  **¿Cómo afecta el hoisting a las importaciones ES6?**
    Las declaraciones de importación en ES6 son "hoisted" (elevadas) al inicio del módulo de forma automática. Esto significa que las dependencias siempre se resuelven antes de que cualquier línea de código del módulo comience a ejecutarse, evitando errores de referencias nulas.
4.  **¿En qué casos usarías import default vs import named?**
    Se utiliza `export default` cuando un archivo tiene una única responsabilidad o exporta una entidad principal (como una clase o un componente grande). Se usa `named exports` en archivos que funcionan como colecciones de utilidades independientes, permitiendo importar solo las funciones específicas que se necesitan.
5.  **¿Por qué los navegadores requieren type="module" en los scripts?**
    Para indicarle al motor del navegador que debe tratar el archivo de manera distinta: diferir su ejecución (comportamiento `defer`), aplicar "use strict" automáticamente, resolver dependencias de red de forma segura y aislar el alcance de las variables para que no contaminen el objeto global `window`.

## 4. Conclusiones

Aquí tienes una versión aún más simple y directa para tus conclusiones:

## 4. Conclusiones

Usar módulos nos ayuda a que el código no sea un desorden. En lugar de escribir todo en un archivo gigante y enredado, podemos dividir el proyecto en partes pequeñas y fáciles de entender, como poner la calculadora en un archivo y las conversiones en otro. Esto hace que sea muy sencillo corregir errores y reutilizar funciones sin revolver nada.

Es importante conocer tanto CommonJS como ES6 porque son las dos formas principales en las que JavaScript organiza los archivos. CommonJS usa `require` y se utiliza mucho en Node.js, mientras que ES6 usa `import` y es la forma moderna que funciona directo en el navegador web. Saber usar ambos nos permite adaptarnos a cualquier proyecto, ya sea nuevo o viejo.

Aprender a exportar e importar archivos hace que nuestro trabajo como programadores sea mucho más rápido y limpio. Nos permite armar aplicaciones más grandes paso a paso, asegurando que cada archivo haga solo lo que le toca y que el código sea fácil de leer para nosotros o para cualquier compañero de equipo.

## 5. Referencias
*   MDN Web Docs. (s.f.). *JavaScript modules*. Mozilla.
*   Node.js Documentation. (s.f.). *Modules: ECMAScript modules*.
*   Node.js Documentation. (s.f.). *Modules: CommonJS modules*.
