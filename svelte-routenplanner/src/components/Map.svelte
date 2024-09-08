<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';
    export let routeData;

    let map;
    let initialized = false;

    onMount(() => {
        // Nur initialisieren, wenn die Karte noch nicht initialisiert wurde
        if (!initialized) {
            map = L.map('map').setView([46.326545, 7.987857], 13); // Standard-Zentrum der Karte

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            initialized = true;
        }

        // Überprüfen, ob routeData verfügbar ist, um die Route zu zeichnen
        if (routeData) {
            const coords = routeData.features[0].geometry.coordinates.map(c => [c[1], c[0]]);
            L.polyline(coords, { color: 'blue' }).addTo(map);
            map.fitBounds(coords);
        }
    });

    $: if (routeData && initialized) {
        const coords = routeData.features[0].geometry.coordinates.map(c => [c[1], c[0]]);
        L.polyline(coords, { color: 'blue' }).addTo(map);
        map.fitBounds(coords);
    }
</script>

<div id="map" style="height: 400px;"></div>

<style>
    #map {
        width: 100%;
        height: 400px;
        margin-top: 20px;
    }
</style>
