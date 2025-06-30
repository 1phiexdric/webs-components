<!-- Estos seran los snippets o codigo que se
 configurara en el componente en donde se hace la llamada a
 filter.svelte -->
 <script lang="ts">
    import { colors } from "./config";
    import Filter from "./filter.svelte";
</script>
<Filter
    datos={colors}
    field= 'name'
    {header}
    {row}
/>
<!-- al compartir la propiedad header que esta dentro del snippet a filter
 permito que esta pueda ser renderizada desde haya-->
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