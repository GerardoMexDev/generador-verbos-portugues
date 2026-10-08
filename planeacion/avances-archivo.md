# Seguimiento del proyecto — app para practicar portugués

## Objetivo
Crear una app para practicar portugués brasileño, con foco especial en aprender y practicar verbos.

## Requisitos definidos
- El usuario ingresa o elige un verbo y la app muestra su conjugación.
- Tiempos/construcciones pedidos: presente do indicativo, pretérito perfeito do indicativo, pretérito imperfeito do indicativo y futuro próximo con ir + infinitivo.
- El material inicial disponible es 100_verbos_portugues_conjugados.pdf, descrito por el usuario como una lista de los 100 verbos más comunes en Brasil.
- Plataforma: primera etapa web, con interfaz adaptable para poder usarla también desde el celular; después de completar la web, desarrollar/portar a app móvil.
- Confirmado por el usuario: «pretérito perfecto» se refiere al pretérito perfeito; el futuro pedido es ir + infinitivo.

## Material de referencia del curso
- Libro del usuario: Portugues_Nivel3.pdf (ubicado en Downloads), compartido para adaptar vocabulario, contenidos y dificultad de los ejercicios.
- Estado del curso (2026-10-08): unidades 1 a 3 terminadas; unidad 4 comenzada hoy. Priorizar la unidad 4 en ejercicios nuevos y considerar las anteriores para repaso.
- Pendiente revisar las unidades/páginas pertinentes y extraer sus temas de forma útil para la app.

## Enfoque de los ejercicios
- Los ejercicios deben basarse en contextos reales y cotidianos, no frases aisladas.
- Contextos mencionados: trabajo, viajes y restaurantes.
- Usar situaciones y frases donde el usuario complete o conjugue el verbo según el sentido y el tiempo verbal.

## Mejoras propuestas para enriquecer la app
1. Modo práctica: ocultar una forma verbal, responder y recibir corrección inmediata.
2. Frases de ejemplo en portugués brasileño con traducción para ver cada forma en contexto.
3. Repetición espaciada: volver a preguntar con más frecuencia los verbos/tiempos que cuestan.
4. Audio de pronunciación brasileña para infinitivo y formas conjugadas.
5. Filtros por tiempo verbal y verbos regulares/irregulares, empezando por los 100 del PDF.

## Registro de errores y soluciones
Aquí anotaremos cada problema que surja al diseñar o desarrollar la app, con el síntoma, la causa (si se identifica), la solución y cómo evitar repetirlo.

- 2026-10-08 — Incidencia de entorno: la terminal integrada falló al iniciar (helper_unknown_error) y `npm view react version` agotó el tiempo. Resolución: la instalación autorizada con `npm install` funcionó. Para evitar un segundo fallo al buscar el lanzador `vite` en Windows, los scripts ejecutan las CLI locales con `node ./node_modules/...`.
- 2026-10-08 — Revisión visual: CUA informó que no hay navegadores disponibles en esta sesión, así que no se pudieron tomar capturas de escritorio/celular. Repetir la revisión visual cuando haya un navegador habilitado.
- 2026-10-08 — Incidencia de diseño: el servicio de concept-seed respondió sin challengers por estar inaccesible; el reintento por terminal tampoco inició. Se continuó con una dirección visual fundamentada en el brief y quedó documentada como supuesto, no como identidad aprobada.

### Propuestas pendientes de aprobación
- Incluir diálogos cortos y ejercicios de completar frases, además de preguntas de conjugación directa.
- Permitir elegir el tiempo verbal o practicarlo mezclado, para aprender a distinguirlos en situaciones reales.
- Incluir una opción para exportar/importar el progreso local como respaldo, ya que en la primera etapa no habrá cuenta ni sincronización.
- Revisar accesibilidad básica: contraste de colores, tamaños legibles y uso cómodo desde teclado y celular.

## Estado actual
Primera base creada con React + TypeScript + Vite: conjugador con selector de cuatro tiempos, fila `tu` opcional y cuatro ejercicios escritos de muestra. Se crearon PRODUCT.md, DESIGN.md, MANUAL_DE_DISENO.md y ARQUITECTURA.md. La lista contiene nueve verbos de muestra y no sustituye aún el PDF. Dependencias instaladas y compilación de producción correcta (`npm run build`). La revisión visual en navegador sigue pendiente porque no hay un navegador disponible en esta sesión.

## Decisiones técnicas aprobadas
- Web: React + TypeScript + Vite para una interfaz adaptable a escritorio y celular (aprobado por el usuario).
- Prepararla como PWA instalable; la app seguirá funcionando como sitio web y podrá agregarse a la pantalla de inicio.
- Primera versión sin servidor: verbos y conjugaciones en archivos de datos. Si se aprueba guardar progreso, será local al principio; agregar backend solo si luego se necesita cuenta, sincronización o respaldo en la nube.
- Etapa móvil: evaluar si la PWA alcanza o si conviene una app nativa con Expo/React Native, reutilizando datos y lógica de conjugación.

## Entregables y requisitos de documentación
- Crear un manual de diseño/estilos de la app con paleta de colores, tipografías, jerarquía visual, espaciados, botones, campos, tarjetas, tablas de conjugación, estados (correcto/incorrecto/cargando/vacío), ejemplos de pantallas y reglas responsive para escritorio y celular, acorde al aprendizaje de portugués brasileño. (Completado en MANUAL_DE_DISENO.md y DESIGN.md.)
- Crear un diagrama de arquitectura que muestre el recorrido de la información por la app. (Completado en ARQUITECTURA.md.)
- Comentar ampliamente el código para explicar el propósito de módulos, funciones, datos, reglas y decisiones relevantes, de modo que otra persona pueda entenderlo y mantenerlo.

## Próximos pasos y definiciones pendientes
- Revisar el PDF de los 100 verbos y organizar los datos para la app.
- Elegir los formatos de ejercicios de la primera versión y decidir si las explicaciones de corrección estarán desde el inicio.
- Definir si habrá seguimiento del progreso del usuario en la primera versión (aciertos, errores y verbos para repasar).
- Revisar la exactitud del pequeño conjunto de conjugaciones de muestra y, después, extraer/revisar el catálogo completo del PDF.
- Revisar los temas de la unidad 4 del libro para crear ejercicios alineados con la clase.
- Revisar la interfaz en navegador en escritorio y celular cuando haya un navegador disponible.
- Completar y validar el catálogo de verbos antes de presentar la app como lista completa.

## Registro de avances
- 2026-10-08: el usuario pidió mantener un registro persistente para retomar tras reinicios/cortes de energía.
- 2026-10-08: definió el objetivo, los tiempos/construcciones iniciales y señaló el PDF de 100 verbos brasileños como material base. Se añadieron propuestas de práctica, ejemplos, repetición espaciada y audio.
- 2026-10-08: precisó los tiempos: presente, pretérito perfeito, pretérito imperfeito y futuro con ir + infinitivo.
- 2026-10-08: acordó lanzar primero una web adaptable a celulares y, una vez completa, pasarla a móvil.
- 2026-10-08: confirmó que la primera versión incluirá tanto consulta de conjugaciones como ejercicios.
- 2026-10-08: indicó que los ejercicios deben reflejar contextos reales, como trabajo, viajes y restaurantes.
- 2026-10-08: compartió Portugues_Nivel3.pdf como referencia del libro de estudio para adaptar la app al contenido de clase.
- 2026-10-08: informó que completaron las unidades 1 a 3 y comenzaron la unidad 4; usarla como foco actual y mantener las anteriores para repaso.
- 2026-10-08: aprobó React + TypeScript + Vite, una PWA adaptable y el enfoque inicial sin servidor.
- 2026-10-08: pidió como entregables un manual de diseño (colores y tipografías), un diagrama de arquitectura/flujo de información y código ampliamente comentado.
- 2026-10-08: autorizó iniciar la primera versión; quedó aprobada la propuesta React + TypeScript + Vite/PWA y se acordaron las formas estándar brasileñas más `tu` opcional.
- 2026-10-08: se creó una base funcional de interfaz: conjugador de verbos de muestra y ejercicios con escenas de trabajo, restaurante y viaje.
- 2026-10-08: se entregaron manual de estilos, DESIGN.md y diagrama de arquitectura; el aspecto cuaderno-atlas es una dirección provisional de trabajo.
- 2026-10-08: se registraron incidencias del entorno: terminal integrada no inició, el registro npm agotó el tiempo y el servicio de concept-seed no estuvo disponible.


## Cómo mantener este documento
Usaremos este mismo archivo como registro central del proyecto. Actualizarlo cuando haya avances, decisiones, tareas pendientes o errores/resoluciones; así habrá una sola fuente para retomar el trabajo.
