# Manual de diseño — Verbos em contexto

## Propósito del estilo

La interfaz debe sentirse como un cuaderno de campo para aprender portugués: ordenada y útil como un atlas, pero cercana como apuntes de clase. El verbo y el contexto deben ser lo primero que se lea. El estilo de cuaderno-atlas es una dirección de trabajo para esta primera versión; no representa todavía una identidad de marca aprobada.

## Paleta de colores

| Token | Color | Uso |
|---|---|---|
| Papel | `#F4F0E6` | Fondo principal cálido |
| Papel claro | `#FBF9F3` | Campos de búsqueda y respuesta |
| Tinta | `#23382F` | Texto principal y títulos |
| Tinta secundaria | `#56645A` | Texto de ayuda |
| Verde de ruta | `#285441` | Acciones primarias y selección |
| Verde suave | `#E4EBE1` | Respuesta correcta y selección suave |
| Terracota | `#BD563A` | Punto de atención, subrayado y acento |
| Terracota suave | `#F1E1D8` | Etiquetas de escena y error |
| Latón | `#D7A25C` | Marcadores pequeños |
| Línea | `#D9D6CA` | Separadores y bordes discretos |

Los colores de estado siempre van acompañados de texto o símbolo. El verde indica selección o corrección; la terracota indica atención o error. No usar colores de bandera como sustituto de una identidad brasileña.

## Tipografías

- **Fraunces** para títulos y frases de práctica: aporta carácter editorial sin competir con el contenido.
- **DM Sans** para controles, instrucciones y texto general: legible en pantalla y tamaños pequeños.
- **IBM Plex Mono** para las conjugaciones y metadatos: ayuda a comparar las formas de un vistazo.
- Tamaño base de interfaz: 12–14 px en escritorio y nunca menos de 10 px para metadatos. Priorizar ampliación si una pantalla se usa mucho en celular.
- Los acentos portugueses deben conservarse siempre: *você, vocês, está, vão, éramos*.

## Jerarquía y espaciado

1. Tarea actual: conjugar o practicar.
2. Verbo/frase y tiempo verbal.
3. Pronombre, traducción y ayudas.
4. Metadatos del curso o de la escena.

Usar separadores finos y aire entre grupos. Reservar líneas tipo cuaderno para frases de práctica y tablas; evitar llenar toda la pantalla de tarjetas redondeadas.

## Componentes

- **Marca:** monograma tipográfico pequeño y una ruta/punto de orientación; no usar emoji como icono funcional.
- **Navegación:** dos destinos principales, Conjugador y Práctica. En móvil se mantienen fáciles de alcanzar.
- **Búsqueda:** permite buscar por forma portuguesa o traducción española; muestra coincidencias breves y una acción clara.
- **Selector de tiempo:** pestañas de texto con subrayado del elemento activo.
- **Tabla:** tres columnas —pronombre, forma conjugada, lectura—, con forma verbal monoespaciada. `tu` se controla como forma regional opcional.
- **Ejercicio:** nombre de la escena, situación, frase con espacio, verbo/tiempo y campo de respuesta.
- **Corrección:** mensaje explícito que incluye respuesta esperada y explicación breve.
- **Botones:** verde oscuro para acción principal; botón textual para acciones secundarias.
- **Estados:** incluir foco de teclado, deshabilitado, sin resultados, respuesta correcta e incorrecta.

## Patrones de pantalla

### Conjugador

Cabecera con marca, modo y nivel actual; introducción breve; rail de herramientas; búsqueda y sugerencias; nombre y traducción del infinitivo; selector de tiempo; tabla de pronombres y formas; control opcional de `tu`; nota sobre el origen/estado de los datos.

### Práctica

La escena y el lugar aparecen antes de la frase. La frase ocupa el centro visual; debajo se ven verbo y tiempo objetivo; el campo de respuesta y la acción para comprobar permanecen juntos. La corrección aparece en el mismo flujo e incluye explicación.

## Adaptación a pantallas

- **Escritorio:** navegación lateral a la izquierda, trabajo principal en el área derecha y ancho de lectura cómodo.
- **Tablet:** reducir márgenes y ancho del rail; conservar legible toda la conjugación.
- **Celular:** apilar contenidos, permitir desplazamiento de pestañas si hace falta, convertir acciones principales en ancho completo y mover la navegación del espacio de trabajo debajo del contenido.

## Tono de interfaz

Las instrucciones se muestran en español y el material de aprendizaje en portugués brasileño. Usar ejemplos concretos de trabajo, viajes y restaurantes. Evitar etiquetas gramaticales sin una frase que ayude a entender cuándo se usa la forma.

## Nota de alcance

La primera interfaz contiene un conjunto de verbos de muestra. El PDF de 100 verbos y el libro del curso se integrarán después de extraer sus datos y revisar la exactitud de las conjugaciones.
