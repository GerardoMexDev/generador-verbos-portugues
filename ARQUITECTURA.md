# Arquitectura y recorrido de la información

## Vista general

```mermaid
flowchart LR
    U[Estudiante] -->|buscar verbo / elegir tiempo| UI[Interfaz React]
    U -->|responder ejercicio| UI
    UI -->|lee conjugaciones| DATA[(src/data/verbs.ts)]
    DATA -->|verbos y formas explícitas| UI
    UI -->|compara respuesta normalizada| LOGIC[Lógica local de práctica]
    LOGIC -->|corrección y explicación| UI
    UI -->|interacción web| B[ navegador de escritorio o celular ]
    B -.->|fase posterior| PWA[Instalación como PWA]
    DATA -.->|fuente pendiente de validar| PDF[PDF: 100 verbos]
    DATA -.->|contextos de curso pendientes| BOOK[Libro Nivel 3, unidad 4]
```

## Camino de consulta

1. El usuario escribe o selecciona un infinitivo.
2. La vista filtra el catálogo local de verbos.
3. La selección del tiempo obtiene las formas explícitas del verbo desde el módulo de datos.
4. La tabla presenta pronombres y formas, con `tu` como fila regional opcional.

## Camino de práctica

1. La vista selecciona una situación con contexto, verbo, persona y tiempo.
2. La frase se muestra con un espacio para completar.
3. La respuesta escrita se recorta y normaliza en mayúsculas/minúsculas y espacios.
4. La app compara con la respuesta esperada y presenta corrección y explicación guardadas con el ejercicio.

## Decisiones para la primera etapa

- React + TypeScript + Vite, sin API ni cuenta de usuario.
- El catálogo estático y los ejercicios viven en `src/data/verbs.ts`.
- No hay persistencia de progreso todavía; la consulta y los ejercicios funcionan en memoria.
- `public/manifest.webmanifest` prepara los metadatos de instalación. El service worker, el modo sin conexión y la persistencia local quedan para una iteración posterior.
- Las fuentes iniciales son PDFs compartidos por el usuario, pero sus datos deben extraerse y validarse antes de incorporarlos como catálogo.

## Evolución prevista

```mermaid
flowchart TD
    PDF[PDF de verbos] --> EX[Extracción y revisión]
    BOOK[Libro y unidad actual] --> CONT[Contextos revisados]
    EX --> JSON[Catálogo tipado de verbos]
    CONT --> JSON
    JSON --> WEB[Web adaptable]
    WEB --> PWA[PWA instalable]
    WEB --> MOBILE[App móvil futura: evaluar Expo/React Native]
```
