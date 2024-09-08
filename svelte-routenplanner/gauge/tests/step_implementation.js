const { openBrowser, goto, write, click, text, closeBrowser, into, button, evaluate, textBox, waitFor, element } = require('taiko');
const path = require('path');

// Define your steps
step("öffne die Webseite <url>", async function(url) {
    console.log(`Öffne die Webseite: ${url}`);
    // Open the browser on all platforms (Windows, Linux, macOS)
    await openBrowser();
    await goto(url);
    console.log(`Webseite ${url} geöffnet.`);
});

step("gebe <text> in das Startfeld ein", async function(text) {
    console.log(`Gebe "${text}" in das Startfeld ein.`);
    await write(text, into(textBox({ id: 'start' })));
    console.log(`"${text}" wurde in das Startfeld eingegeben.`);
});

step("gebe <text> in das Zielfeld ein", async function(text) {
    console.log(`Gebe "${text}" in das Zielfeld ein.`);
    await write(text, into(textBox({ id: 'end' })));
    console.log(`"${text}" wurde in das Zielfeld eingegeben.`);
});

step("klicke auf <buttonText>", async function(buttonText) {
    console.log(`Klicke auf den Button: ${buttonText}`);
    await click(button(buttonText));
    console.log(`Button "${buttonText}" wurde geklickt.`);
});

step("verifiziere die Karte", async function() {
    console.log(`Warte auf die Karte und überprüfe, ob sie geladen ist.`);
    // Wait for the map to load, ensuring compatibility across platforms
    await waitFor(async () => await evaluate(() => document.querySelector('#map') !== null), 10000);

    const mapExists = await evaluate(() => document.querySelector('#map') !== null);
    if (mapExists) {
        console.log("Karte wurde erfolgreich gefunden.");
    } else {
        throw new Error("Karte wurde nicht gefunden.");
    }
});

step("schließe den Browser", async function() {
    console.log("Schließe den Browser.");
    await closeBrowser();
    console.log("Browser geschlossen.");
});
