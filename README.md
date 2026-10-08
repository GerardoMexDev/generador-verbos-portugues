# Verbos em contexto

Aplicación web para consultar y practicar verbos del portugués brasileño.

## Requisitos

- Node.js (versión compatible con Vite).
- Acceso al registro npm la primera vez para descargar las dependencias.

## Iniciar en desarrollo

```powershell
npm install
npm run dev
```

## Generar distribución

```powershell
npm run build
npm run preview
```

## Estado de los datos

`src/data/verbCatalog.ts` contiene los 100 verbos del PDF, validados contra los patrones regulares; las correcciones hechas al PDF están anotadas en la cabecera del archivo. Las conjugaciones no se generan automáticamente para evitar adivinar irregularidades. Los ejercicios todavía son de muestra; falta alinearlos con la unidad 4 del libro.

## Documentación

- `PRODUCT.md`: alcance confirmado del producto.
- `MANUAL_DE_DISENO.md`: colores, tipografías, componentes y adaptación a pantallas.
- `ARQUITECTURA.md`: diagramas Mermaid y flujo de consulta/práctica.
- `planeacion/avances.md`: decisiones, avances, pendientes e incidencias (contexto entre sesiones).
