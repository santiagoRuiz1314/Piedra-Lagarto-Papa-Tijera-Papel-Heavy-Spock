# Proyecto: Rock Paper Scissors Lizard Spock

## Introducción
Este proyecto es una versión interactiva del juego "Piedra, Papel, Tijera, Lagarto, Spock" que se hizo famoso gracias a la serie The Big Bang Theory. El desarrollador, siendo fan de la serie, quiso recrear esta variante del clásico juego para que otros fans puedan disfrutarlo también. El objetivo del juego es ser el primero en llegar a 10 victorias contra la computadora.

## Tecnologías Utilizadas

### HTML5
Se eligió HTML5 para estructurar el sitio web porque:
- Permite usar etiquetas semánticas como `<section>`, `<div>` y `<button>` que ayudan a organizar claramente las áreas del juego
- Los atributos "aria-label" mejoran la accesibilidad del juego, algo fundamental para que todos los usuarios puedan disfrutarlo
- El uso de `<span>` para los contadores de puntuación permite actualizar dinámicamente estos valores con JavaScript
- La estructura de elementos anidados facilita aplicar estilos CSS específicos a cada componente del juego

En concreto, se utilizaron contenedores `<div>` para separar las diferentes áreas del juego: los botones de control (start, quit, reset), el área de selección con los cinco botones del juego, la sección de resultados para mostrar mensajes, el área principal de juego y el contador de puntuación.

### CSS3
Se utilizó CSS3 para el diseño y estilo del sitio porque:
- Las media queries permitieron crear un diseño responsive con reglas específicas para pantallas menores a 550px, donde se redujo el tamaño de los botones para que encajaran correctamente
- Los selectores CSS como `#game-area` y `.selection` ayudaron a aplicar estilos específicos a cada componente sin tener que modificar el HTML
- Las propiedades de transición (`:hover`) permitieron agregar bordes de colores específicos para cada opción, que reflejan los mismos colores usados en la imagen de las reglas del juego
- Las propiedades `flex` y `grid` facilitaron alinear correctamente los elementos y mantener la estructura visualmente equilibrada

Para las fuentes, se importaron específicamente "Orbitron" para los títulos y "Prompt" para el texto del cuerpo. Esta combinación fue encontrada usando Font-Joy, que ayudó a crear un contraste entre el estilo futurista de los encabezados (perfecto para la temática espacial/sci-fi) y la legibilidad del texto principal. El color de fondo gris-oscuro se eligió para simular un ambiente espacial o una nave, reforzando la conexión con Spock y el universo de Star Trek.

### JavaScript
JavaScript fue la tecnología más importante en este proyecto porque:
- Los event listeners (`addEventListener`) me permitieron capturar los clics del usuario en los botones de juego y ejecutar las funciones correspondientes
- El método `Math.floor(Math.random() * 5)` me permitió generar selecciones aleatorias para la computadora, garantizando que el juego sea imparcial
- El DOM manipulation (`document.getElementById`, `innerHTML`, `createElement`) me dio la capacidad de actualizar dinámicamente el contenido y las imágenes en la página sin recargarla
- La función `setTimeout()` me permitió crear un efecto de "pensamiento" para la computadora, haciendo que parezca que está tomando su decisión
- Los condicionales (`if/else`) fueron fundamentales para implementar la compleja lógica de las 15 combinaciones posibles del juego

Las funciones específicas que desarrollé incluyen:
- `computerChoice()` - Genera una selección aleatoria para la computadora usando números del 0 al 4 que corresponden a cada opción
- `checkWinner()` - Compara las elecciones del jugador y la computadora según las reglas oficiales (por ejemplo, "tijeras cortan papel", "papel cubre roca")
- `updateScore()` - Modifica los contadores de puntuación accediendo directamente a los elementos del DOM mediante sus IDs
- `displayResults()` - Muestra mensajes personalizados para cada combinación y cambia el color del borde según el resultado
- `gameReset()` - Utiliza `location.reload()` para reiniciar completamente el juego cuando un jugador alcanza 10 victorias o cuando el usuario decide abandonar

## Características del Juego

### Sistema de Puntuación
Se implementó un sistema de puntuación utilizando elementos `<span>` con IDs específicos (`pScore` y `cScore`) que son actualizados dinámicamente mediante JavaScript. El juego termina cuando uno de los jugadores alcanza 10 victorias, lo que se detecta mediante una comparación en cada ronda (`if (playerScore >= 10 || computerScore >= 10)`).

### Retroalimentación Visual
Cada ronda proporciona retroalimentación visual y textual mediante:
- El uso de la propiedad `innerHTML` para cambiar las imágenes en `player-image` y `computer-image`
- Mensajes específicos para cada combinación (ej: "papel cubre roca", "tijeras cortan papel") mostrados en el área de resultados
- Cambios de color en el borde del área de resultados mediante manipulación de la propiedad `style.borderColor` (verde:#31a849 para victoria, rojo:#dc143c para derrota)
- La propiedad `style.backgroundColor` para resaltar el resultado final cuando un jugador llega a 10 victorias

### Interfaz Intuitiva
La interfaz fue diseñada utilizando prácticas de UX específicas:
- Cambio de cursor a `pointer` en los elementos interactivos para indicar que son clickeables
- Textos instructivos que cambian según el estado del juego mediante `result-para.innerHTML`
- Ocultación y visualización de botones usando `style.display = "none"` y `style.display = "inline-block"` según la fase del juego
- Atributos `aria-label` en todos los botones interactivos para mejorar la accesibilidad

### Diseño Responsive
El juego está construido para funcionar en diferentes tamaños de pantalla mediante:
- Media query `@media screen and (max-width: 550px)` que ajusta el tamaño de los botones del 25% al 19% del ancho
- Uso de unidades relativas (%, em) en lugar de absolutas (px) para que los elementos escalen proporcionalmente
- Contenedores flex que reorganizan sus elementos según el espacio disponible
- Pruebas realizadas en múltiples dispositivos (iPhone SE, iPhone XR, Pixel 5 y S20 Ultra) para verificar la compatibilidad

## Desafíos y Soluciones

### Lógica del Juego
El mayor desafío fue implementar correctamente todas las reglas del juego (15 combinaciones posibles, 5 opciones × 3 resultados posibles). Para solucionarlo:
- Se utilizó una estructura de condicionales anidados que verifica cada combinación específica
- Se implementó la lógica específica para cada regla (por ejemplo: "tijeras cortan papel", "lagarto envenena a Spock")
- Se crearon mensajes personalizados para cada combinación que explican por qué una opción gana sobre otra
- Se aseguró que el empate se detectara correctamente cuando ambos jugadores eligen la misma opción

Este enfoque resultó más claro y mantenible que intentar crear un algoritmo matemático complejo.

### Retroalimentación Dinámica
Otro desafío fue actualizar correctamente todos los elementos visuales después de cada jugada:
- Para las imágenes, se usó la propiedad `innerHTML` para insertar la etiqueta `<img>` completa con la ruta correcta según la elección
- Para los mensajes de resultado, se creó un objeto que mapea cada combinación a su mensaje específico
- Para el cambio de colores, se definieron variables de color en JavaScript que se aplican según el resultado
- Para la transición entre estados del juego, se implementaron funciones específicas que modifican múltiples elementos a la vez

### Rutas de Archivos
Un problema inesperado surgió al publicar el sitio en GitHub Pages: las rutas relativas de los archivos no funcionaban correctamente. La solución fue:
- Cambiar todas las rutas a absolutas para que apuntaran correctamente a las carpetas del repositorio
- Verificar la estructura de carpetas para asegurar que coincidiera exactamente con la ruta especificada
- Probar exhaustivamente todas las imágenes y enlaces después de la publicación

### Bug en la Detección del Ganador Final
Se descubrió un error en la lógica donde el ganador final solo se declaraba después de jugar una ronda adicional después de alcanzar 10 puntos. Este bug ocurría porque:
- La verificación del puntaje final estaba dentro de la función que se ejecuta después de cada selección
- La actualización del puntaje y la verificación de victoria final ocurrían en orden incorrecto

Aunque no fue posible solucionar este problema antes de la entrega por limitaciones de tiempo, se documentó para futuras mejoras.

## Conclusión
Este proyecto permitió aplicar conocimientos de HTML, CSS y JavaScript para crear una experiencia interactiva basada en un elemento de la cultura pop. Específicamente:

- **HTML5**: Permitió estructurar el contenido de manera clara y semántica, empleando atributos de accesibilidad y una organización que facilita tanto la visualización como la manipulación mediante JavaScript.

- **CSS3**: Proporcionó las herramientas para crear un diseño visualmente atractivo con la temática espacial/sci-fi, implementando efectos interactivos y asegurando que la experiencia sea consistente en diferentes dispositivos.

- **JavaScript**: Fue la tecnología más desafiante e importante, ya que fue necesario implementar toda la lógica del juego, desde la generación de selecciones aleatorias hasta el manejo de estados, actualización de elementos visuales y control del flujo del juego.

Las pruebas de accesibilidad realizadas con Lighthouse arrojaron buenos resultados, con puntuaciones altas en rendimiento y accesibilidad. Sin embargo, aún hay aspectos que podrían mejorarse en futuras versiones, como la corrección del bug en la detección del ganador final y la optimización del diseño responsive para pantallas de tamaño mediano.

Este proyecto no solo ayudó a consolidar conocimientos técnicos, sino que también enseñó la importancia de:
1. Planificar la estructura antes de comenzar a codificar
2. Utilizar herramientas de wireframing para visualizar el diseño
3. Probar el proyecto en diferentes dispositivos
4. Documentar tanto los logros como los problemas encontrados

---

**Nota para la profesora**: Este proyecto fue desarrollado como parte del curso de desarrollo web. Se eligió recrear el juego "Rock, Paper, Scissors, Lizard, Spock" porque, además de ser fan de The Big Bang Theory, pareció un excelente caso para implementar lógica condicional compleja en JavaScript mientras se practicaban elementos interactivos. Las tecnologías fueron seleccionadas específicamente por su capacidad para crear una experiencia de usuario completa: HTML5 para la estructura, CSS3 para el diseño responsive y la estética sci-fi, y JavaScript para la lógica e interactividad. La implementación siguió el modelo de desarrollo de 5 planos (estrategia, alcance, estructura, esqueleto y superficie) que se aprendió en clase.
