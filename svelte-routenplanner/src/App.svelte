<script>
	import AddressInput from './components/AddressInput.svelte';
	import RouteResult from './components/RouteResult.svelte';
	import Map from './components/Map.svelte';
	let startAddress = '';
	let endAddress = '';
	let routeData = null;

	async function geocodeAddress(address) {
		const apiKey = '5b3ce3597851110001cf624862255a87b4194d9ab594508a3d0ca589';
		const response = await fetch(`https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(address)}`);

		if (!response.ok) {
			console.error('Fehler bei der Geokodierung:', response.statusText);
			return null;
		}

		const data = await response.json();
		if (data.features && data.features.length > 0) {
			return data.features[0].geometry.coordinates;  // Rückgabe der Koordinaten [Longitude, Latitude]
		} else {
			console.error('Keine Ergebnisse für die Adresse gefunden');
			return null;
		}
	}

	async function fetchRoute() {
		const startCoords = await geocodeAddress(startAddress);
		const endCoords = await geocodeAddress(endAddress);

		console.log("Start Coordinates:", startCoords);
		console.log("End Coordinates:", endCoords);

		if (startCoords && endCoords) {
			const apiKey = '5b3ce3597851110001cf624862255a87b4194d9ab594508a3d0ca589';
			const generatedUrl = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${startCoords.join(',')}&end=${endCoords.join(',')}`;

			console.log("Generated API URL:", generatedUrl);

			const response = await fetch(generatedUrl);

			if (!response.ok) {
				console.error('Fehler bei der Routenanfrage:', response.statusText);
				return;
			}

			const data = await response.json();
			console.log("Route Data Received:", data);

			if (data && data.features && data.features.length > 0 && data.features[0].properties.segments[0].steps.length > 0) {
				routeData = data;
				console.log("Route Data Set:", routeData);
			} else {
				console.log("Keine Route gefunden oder fehlerhafte Datenstruktur:", data);
				routeData = null;
			}
		} else {
			console.error('Konnte die Koordinaten für eine der Adressen nicht ermitteln.');
			routeData = null;
		}
	}
</script>

<main>
	<h1>Routenplaner</h1>
	<AddressInput
			bind:startAddress={startAddress}
			bind:endAddress={endAddress}
			on:calculateRoute={fetchRoute} />

	{#if routeData}
		<RouteResult {routeData} />
		<Map {routeData} />
	{:else}
		<p>Bitte geben Sie zwei gültige Adressen ein und klicken Sie auf "Route berechnen".</p>
	{/if}
</main>

<style>
	main {
		font-family: Arial, sans-serif;
		padding: 1rem;
		text-align: center;
	}

	h1 {
		color: #333;
	}
</style>
