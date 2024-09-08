const { openBrowser, goto, write, click, closeBrowser, evaluate, waitFor, textBox, into, button } = require('taiko');

// Mock all taiko functions
jest.mock('taiko', () => ({
    openBrowser: jest.fn(),
    goto: jest.fn(),
    write: jest.fn(),
    click: jest.fn(),
    closeBrowser: jest.fn(),
    evaluate: jest.fn(),
    waitFor: jest.fn(),
    textBox: jest.fn(),
    into: jest.fn(),
    button: jest.fn()
}));

describe('Routenplaner Tests', () => {

    beforeEach(() => {
        jest.clearAllMocks();  // Clear mocks before each test
    });

    test('soll den Browser öffnen und die Webseite laden', async () => {
        const url = "http://localhost:8080";

        // Simuliere das Öffnen des Browsers und den Aufruf der URL
        await openBrowser();
        await goto(url);

        // Erwartung: Browser sollte geöffnet sein und auf die URL zugreifen
        expect(openBrowser).toHaveBeenCalled();
        expect(goto).toHaveBeenCalledWith(url);
    });

    test('soll Text in das Startfeld eingeben', async () => {
        const startAddress = "Brig";

        // Simuliere die Rückgabe des Textbox-Objekts
        textBox.mockReturnValue('textbox-start');
        into.mockReturnValue('into-textbox-start');

        // Simuliere das Schreiben in das Textfeld
        await write(startAddress, into(textBox({ id: 'start' })));

        // Erwartung: Die Funktion `write` sollte mit den richtigen Parametern aufgerufen werden
        expect(write).toHaveBeenCalledWith(startAddress, 'into-textbox-start');
        expect(textBox).toHaveBeenCalledWith({ id: 'start' });
    });

    test('soll Text in das Zielfeld eingeben', async () => {
        const endAddress = "Langenthal";

        // Simuliere die Rückgabe des Textbox-Objekts
        textBox.mockReturnValue('textbox-end');
        into.mockReturnValue('into-textbox-end');

        // Simuliere das Schreiben in das Zielfeld
        await write(endAddress, into(textBox({ id: 'end' })));

        // Erwartung: Die Funktion `write` sollte mit den richtigen Parametern aufgerufen werden
        expect(write).toHaveBeenCalledWith(endAddress, 'into-textbox-end');
        expect(textBox).toHaveBeenCalledWith({ id: 'end' });
    });

    test('soll auf den Button klicken', async () => {
        const buttonText = "Route berechnen";

        // Simuliere die Rückgabe des Button-Objekts
        button.mockReturnValue('button-route-berechnen');

        // Simuliere den Klick auf den Button
        await click(button(buttonText));

        // Erwartung: Die Funktion `click` sollte mit dem Button-Objekt aufgerufen werden
        expect(click).toHaveBeenCalledWith('button-route-berechnen');
        expect(button).toHaveBeenCalledWith(buttonText);
    });

    test('soll den Browser schließen', async () => {
        // Simuliere das Schließen des Browsers
        await closeBrowser();

        // Erwartung: Die Funktion `closeBrowser` sollte aufgerufen worden sein
        expect(closeBrowser).toHaveBeenCalled();
    });
});
