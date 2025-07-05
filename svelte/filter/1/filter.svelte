<script lang="ts">
    let {datos, field,header, row} = $props()
    // field represente por que cualidad es que se va a filtrar el objeto
    // sea por el nombre o cualquier otra cosa
    let search: string = $state("")
    // derived.by, se usa cuando necesitas una funcion como argumento
    const filtered = $derived.by(()=>{
        if(search == "") return datos

        const regex = new RegExp(search, 'i')
        //
        return datos.filter((dato: any) => regex.test(dato[field]))
    })
</script>

<label for="filter">
    Filter: <input type="text" bind:value={search}>
</label>

{@render header()}
<div>
    
{#each filtered as d}
{@render row(d)}
{/each}
</div>