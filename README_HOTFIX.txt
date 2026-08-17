FS V4.0.24.3.2 — iOS LISTONE RENDER HOTFIX

ROOT GITHUB: sostituire SOLO
- index.html
- sw.js
- version.json

Motore V4.0.23.1 LOCK: INVARIATO
Registry: INVARIATO (492)
Prezzi/MAX/FOS: INVARIATI

Fix:
1. disabilita content-visibility/contain sulle righe Listone in WebKit/iOS;
2. forza le prime 24 righe a essere dipinte subito;
3. forza #score e .rows visibili indipendentemente dal bootstrap JS;
4. chiude di default la guida BUY/ATTENDI/STOP per portare il Listone nella prima parte della pagina;
5. PWA BOOT ha timeout e non resta bloccato indefinitamente.

TEST DOPO DEPLOY:
https://angelosegreto.github.io/fs-control-room/?v=20260817-2

Atteso:
- badge LISTONE 492 · RENDER iOS READY
- prime righe Spence, Dimarco, Paz N. visibili subito
- VALUTA cliccabile
- filtri P/D/C/A funzionanti
