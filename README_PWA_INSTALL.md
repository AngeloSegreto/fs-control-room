# FS Control Room V4.0 — Safari PWA Packaging

## Deploy
Questa cartella deve essere servita via HTTPS (oppure localhost per test tecnico).
Non aprire `index.html` direttamente con `file://`.

## Installazione su iPhone
1. Apri l'URL HTTPS in Safari.
2. Verifica in alto `PWA READY · SAFARI`.
3. Condividi → Aggiungi a schermata Home.
4. Chiudi Safari.
5. Apri FS GOLD dall'icona Home.
6. Verifica `PWA READY · STANDALONE`.

## P0.4-R5 Physical Smoke
PASS solo se, in ordine:
1. Cold Start standalone da icona Home.
2. Modalità Aereo → kill app → riapertura completa offline.
3. VINTO/PERSO aggiorna Ledger.
4. Undo/Redo ripristina lo stato.
5. RICALCOLA esegue il rebuild.
6. Kill app → riapertura: localStorage conserva stato.
7. Export JSON e CSV apre Share Sheet/salvataggio.
8. Backup stato → modifica → Restore → stato identico.
9. AZZERA → kill app → riapertura: zero-state persistente.

## Regola di release
Il motore V4.0.23 è congelato.
Questo pacchetto modifica solo il runtime container PWA.
