# WebApplication
<hr>

## Starten der WebApplication

### Zum starten in den Pfad ```/svelte-routenplanner``` wechseln.

### Starten mit :
1. ```npm install```

2. ```npm run dev```

### _Während dem gesamten Test muss die WebApplication auf Port 8080 laufen! <br> (Ansonsten schlagen die Akzeptanztests fehl.)_

<hr>

## Für Akzeptanz-Tests:
### _Zweites Terminal aufmachen!_
1. ```cd .\svelte-routenplanner\gauge```

2. Im Pfad .\svelte-routenplanner\gauge -> ```npm install -D taiko```
4. Danach ```gauge run specs``` im Terminal ausführen



<p>
<hr>

## Für Unit-Tests:

1. in den Pfad ```svelte-routenplanner\gauge\_tests_``` wechseln
2. Im verzeichnis : ```npm install --save-dev jest```
3. im verzeichnis: ```npm install --save-dev jest-environment-jsdom```
4. Beachte: beim ersten Mahl package.json anpassedn (wurde schon vom Maintainer erledigt)
5. im Verzeichnis: ```npm init jest@latest```
6. _Beachte: die jest.config.mjs wurde mit folgenden Konfigurationen erstellt und muss daher nicht nochmal erstellt werden:_
    - Typescript: no
    - test environment: jsdom
    - coverage: yes
    - provider: v8
    - automatically clear mocks: yes
7. Danach im Verzeichnis: ```npm test```