# Proyecto: Piedra-Lagarto-Papa-Tijera-Papel-Heavy-Spock

## Introducción
Este proyecto es una versión extendida del clásico juego "Piedra, Papel, Tijera, Lagarto, Spock" popularizado por la serie The Big Bang Theory. La presente implementación amplía el juego original con dos nuevas opciones (Papa y Heavy), creando una variante aún más estratégica y divertida. Además, permite tanto jugar contra la computadora como disfrutar de un modo multijugador local para dos personas. El objetivo del juego es ser el primero en llegar a 10 victorias.

## Tecnologías Utilizadas

### HTML5
Se eligió HTML5 para estructurar el sitio web porque:
- Permite usar etiquetas semánticas como **section**, **div** y **button** que ayudan a organizar claramente las áreas del juego
- Los atributos **aria-label** mejoran la accesibilidad del juego, algo fundamental para que todos los usuarios puedan disfrutarlo
- El uso de **span** para los contadores de puntuación permite actualizar dinámicamente estos valores con JavaScript
- La estructura de elementos anidados facilita aplicar estilos CSS específicos a cada componente del juego

En concreto, se utilizaron contenedores **div** para separar las diferentes áreas del juego: los botones de control (**start**, **quit**, **reset**), el área de selección con los siete botones del juego, la sección de resultados para mostrar mensajes, el área principal de juego y el contador de puntuación.

### CSS3
Se utilizó CSS3 para el diseño y estilo del sitio porque:
- Las **media queries** permitieron crear un diseño responsive con reglas específicas para pantallas menores a **550px**, donde se redujo el tamaño de los botones para que encajaran correctamente
- Los selectores CSS como **#game-area** y **.selection** ayudaron a aplicar estilos específicos a cada componente sin tener que modificar el HTML
- Las propiedades de transición (**:hover**) permitieron agregar bordes de colores específicos para cada opción, que reflejan los colores característicos de cada elemento del juego
- Las propiedades **flex** y **display** facilitaron alinear correctamente los elementos y mantener la estructura visualmente equilibrada

Para las fuentes, se importaron específicamente **"Orbitron"** para los títulos y **"Prompt"** para el texto del cuerpo. Esta combinación fue encontrada usando **Font-Joy**, que ayudó a crear un contraste entre el estilo futurista de los encabezados (perfecto para la temática espacial/sci-fi) y la legibilidad del texto principal. El color de fondo gris claro (**#e1e1e1**) se eligió para proporcionar un contraste adecuado con los elementos de juego.

### JavaScript
JavaScript fue la tecnología más importante en este proyecto porque:
- Los **event listeners** (**addEventListener**) permitieron capturar los clics del usuario en los botones de juego y ejecutar las funciones correspondientes
- El método **Math.floor(Math.random() * 7)** permitió generar selecciones aleatorias para la computadora entre las **siete opciones** disponibles, garantizando que el juego sea imparcial
- El **DOM manipulation** (**document.getElementById**, **innerHTML**, **style**) dio la capacidad de actualizar dinámicamente el contenido y las imágenes en la página sin recargarla
- Los **switch statements** y condicionales (**if/else**) fueron fundamentales para implementar la compleja lógica de las **49 combinaciones** posibles del juego (7×7 menos las 7 jugadas que resultan en empate)
- La implementación de **modos de juego** permitió alternar entre el modo contra computadora y el modo de 2 jugadores

Las funciones específicas que se desarrollaron incluyen:
- **handleChoice()** - Gestiona las elecciones del jugador según el modo de juego seleccionado
- **computerChoice()** - Genera una selección aleatoria para la computadora entre las siete opciones
- **runGame()** - Compara las elecciones y determina el ganador según las reglas del juego
- **runTwoPlayerGame()** - Gestiona la lógica específica para el modo de 2 jugadores
- **playerScore()** y **computerScore()** - Actualizan las puntuaciones y verifican si se ha alcanzado la victoria
- **resultMsg()** - Muestra mensajes personalizados para cada combinación

## Características del Juego

### Sistema de Puntuación
Se implementó un sistema de puntuación utilizando elementos **span** con IDs específicos (**pScore** y **cScore**) que son actualizados dinámicamente mediante JavaScript. El juego termina cuando uno de los jugadores alcanza **10 victorias**, lo que se detecta mediante una comparación en cada ronda.

### Retroalimentación Visual
Cada ronda proporciona retroalimentación visual y textual mediante:
- El uso de la propiedad **style.background** para cambiar las imágenes en **player-image** y **computer-image**
- Mensajes específicos para cada combinación (ej: **"papel cubre roca"**, **"tijeras cortan papel"**) mostrados en el área de resultados
- Cambios de color en el borde del área de resultados mediante manipulación de la propiedad **style.borderColor** (verde para victoria, rojo para derrota)
- La propiedad **style.backgroundColor** para resaltar el resultado final cuando un jugador llega a **10 victorias**

### Modos de Juego
Se implementaron dos modos de juego distintos:
- **Modo vs Computadora**: El jugador compite contra selecciones aleatorias generadas por la computadora
- **Modo de 2 Jugadores**: Dos jugadores pueden turnarse para realizar sus selecciones en el mismo dispositivo

La selección de modo se realiza mediante botones al inicio del juego y puede cambiarse en cualquier momento mediante el **mode-selector**.

### Reglas Ampliadas
El juego incluye las reglas originales de Piedra-Papel-Tijera-Lagarto-Spock más las nuevas interacciones con **Papa** y **Heavy**:
- **Papa** vence a Piedra, Papel y Tijeras
- **Papa** pierde contra Lagarto, Spock y Heavy
- **Heavy** vence a Piedra, Lagarto y Spock
- **Heavy** pierde contra Papel, Tijeras y Papa

### Diseño Responsive
El juego está construido para funcionar en diferentes tamaños de pantalla mediante:
- Media query **@media screen and (max-width: 550px)** que ajusta el tamaño de los botones y elementos del juego
- Uso de unidades relativas (**%**, **px**) para que los elementos escalen proporcionalmente
- Diseño **flex** que reorganiza sus elementos según el espacio disponible
- **Orientación vertical** del selector de modo en pantallas pequeñas

## Desafíos y Soluciones

### Lógica Compleja del Juego
El mayor desafío fue implementar correctamente todas las reglas del juego (**49 combinaciones** posibles, **7 opciones**):
- Se utilizó una estructura de **switch statements** anidados que verifica cada combinación específica
- Se implementó la lógica específica para cada regla, incluyendo las nuevas interacciones con Papa y Heavy
- Se crearon **42 mensajes personalizados** que explican por qué una opción gana sobre otra
- Para el modo de 2 jugadores, se implementó un sistema alternativo basado en un mapa de condiciones de victoria

### Gestión de Modos de Juego
Otro desafío importante fue implementar los dos modos de juego:
- Se creó un sistema de **estados de juego** que controla qué jugador debe realizar su elección en el modo de 2 jugadores
- Se adaptaron los mensajes y etiquetas de la interfaz según el modo seleccionado
- Se implementó un indicador de turno que muestra claramente qué jugador debe elegir
- Se desarrolló lógica específica para mantener ocultas las elecciones del segundo jugador hasta que ambos hayan seleccionado

### Retroalimentación Dinámica
Adaptar la retroalimentación visual y textual para tantas combinaciones requirió:
- Un sistema extenso de mensajes para cada posible resultado
- Cambios dinámicos en los colores de los bordes y fondos según el resultado
- Actualización contextual de mensajes según el modo de juego activo
- Adaptación de la estructura de mensajes para reflejar correctamente si la victoria es de "Jugador" o "Jugador 1/2"

## Conclusión
Este proyecto ha permitido aplicar conocimientos de HTML, CSS y JavaScript para crear una experiencia interactiva que amplía el concepto original de Piedra-Papel-Tijera-Lagarto-Spock al añadir dos nuevas opciones y un modo multijugador. La estructura modular del código facilita tanto la comprensión como futuras expansiones o mejoras del juego.

Las tecnologías web utilizadas permitieron desarrollar un juego dinámico, visualmente atractivo y adaptable a diferentes dispositivos, mientras que la lógica JavaScript implementa de manera efectiva reglas complejas que crean una experiencia de juego interesante y diversa.

---

## Créditos
Este proyecto fue originalmente creado por **TR94**. Se ha tomado como referencia su trabajo publicado en el repositorio de GitHub: https://github.com/TR94/rock-paper-scissors-lizard-spock

La versión actual ha sido extendida con nuevas opciones de juego (Papa y Heavy) y un modo de 2 jugadores.
