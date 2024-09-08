<script>
    export let routeData;
</script>

{#if routeData && routeData.features && routeData.features.length > 0}
    <div>
        <h2>Wegbeschreibung</h2>
        <ul>
            {#each routeData.features[0].properties.segments[0].steps as step}
                <li>
                    {#if step.distance}
                        {Math.round(step.distance)} Meter
                    {/if}
                    {#if step.instruction}
                        - {step.instruction}
                    {/if}
                </li>
            {/each}
        </ul>
    </div>
{:else}
    <p>Keine Route gefunden zwischen den angegebenen Orten.</p>
{/if}

<style>
    h2 {
        margin-top: 2rem;
        color: #333;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    li {
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        background-color: #f4f4f4;
        border-radius: 4px;
    }
</style>
