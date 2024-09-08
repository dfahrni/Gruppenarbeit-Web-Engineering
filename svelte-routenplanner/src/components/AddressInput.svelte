<script>
    import { createEventDispatcher } from 'svelte';

    export let startAddress;
    export let endAddress;

    const dispatch = createEventDispatcher();

    function handleCalculateRoute() {
        dispatch('calculateRoute');
    }
</script>

<div>
    <label for="start">Startadresse:</label>
    <input id="start" bind:value={startAddress} placeholder="Startadresse eingeben" />

    <label for="end">Zieladresse:</label>
    <input id="end" bind:value={endAddress} placeholder="Zieladresse eingeben" />

    <button on:click={handleCalculateRoute}>Route berechnen</button>
</div>

<style>
    div {
        margin-bottom: 1rem;
    }
    label {
        margin-right: 1rem;
    }
    input {
        padding: 0.5rem;
        margin-right: 0.5rem;
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>
