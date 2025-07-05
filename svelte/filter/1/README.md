# Componente de Filtro

Este componente permite filtrar y mostrar una lista de objetos de manera flexible, permitiendo personalizar tanto el encabezado como la fila de cada elemento mediante snippets. Este componente no tiene estilos predefinidos

## Archivos principales

- [`app.svelte`](app.svelte): Ejemplo de uso y configuración del componente.
- [`filter.svelte`](filter.svelte): Componente de filtro reutilizable.
- [`config.ts`](config.ts): Datos de ejemplo y utilidades para colores.

## Props del componente

El componente [`Filter`](filter.svelte) acepta los siguientes props:

- **datos**: Array de objetos a filtrar y mostrar.  
  _Ejemplo_: `datos={colors}`

- **field**: String que indica la propiedad del objeto por la que se va a filtrar.  
  _Ejemplo_: `field="name"`

- **header**: Snippet que define el encabezado de la tabla/lista.  
  _Ejemplo_: `{#snippet header()}`

- **row**: Snippet que define cómo se renderiza cada fila/elemento.  
  _Ejemplo_: `{#snippet row(d: any)}`

## Uso de snippets

Los snippets permiten personalizar la presentación del encabezado y de cada fila. Se definen en el archivo donde se usa el componente y se pasan como props:

```svelte
<Filter
    datos={colors}
    field="name"
    {header}
    {row}
/>

{#snippet header()}
    <header>
        <span class="color"></span>
        <span class="name">name</span>
        <span class="hex">hex</span>
        <span class="rgb">rgb</span>
        <span class="hsl">hsl</span>
    </header>
{/snippet}

{#snippet row(d: any)}
    <div class="row">
        <span class="color" style="background-color: {d.hex}"></span>
        <span class="name">{d.name}</span>
        <span class="hex">{d.hex}</span>
        <span class="rgb">{d.rgb}</span>
        <span class="hsl">{d.hsl}</span>
    </div>
{/snippet}
```

- El snippet `header` se renderiza una sola vez como encabezado.
- El snippet `row` se renderiza para cada elemento filtrado, recibiendo el objeto como argumento (`d`).

## Personalización

Puedes modificar los snippets `header` y `row` para mostrar los datos como prefieras, cambiar el diseño, agregar clases, etc.

También puedes cambiar el campo por el que se filtra modificando el prop `field` (por ejemplo, `"name"`, `"hex"`, etc., siempre que exista en los objetos de `datos`).

## Configuración de datos

El archivo [`config.ts`](config.ts) contiene un ejemplo de datos (`colors`) con propiedades `name`, `hex`, `rgb` y `hsl`. Puedes usar tus propios datos siempre que tengan la estructura adecuada.

## Ejemplo de uso

```svelte
<script lang="ts">
    import { colors } from "./config";
    import Filter from "./filter.svelte";
</script>

<Filter
    datos={colors}
    field="name"
    {header}
    {row}
/>

{#snippet header()}
    <!-- tu encabezado personalizado -->
{/snippet}

{#snippet row(d: any)}
    <!-- tu fila personalizada -->
{/snippet}
```

## Cambios posibles

- Cambia el campo de filtrado modificando el prop `field`.
- Personaliza el encabezado y las filas editando los snippets.
- Usa diferentes datos pasando otro array al prop `datos`.