FS CONTROL ROOM — V4.0.24.3.1 UI/UX PRO MAX · PWA R7.3 · FS HARNESS R1
DATE: 17/08/2026

ENGINE LOCK
- Engine: V4.0.23.1 LOCK
- Registry: 492 unchanged
- Prices / FOS / MAX / formulas: unchanged
- Engine executable scripts: unchanged vs V4.0.24.3 source
- Changes in this release are metadata/harness + PWA cache namespace only

ROOT DEPLOY
Replace ONLY these files in the GitHub Pages root:
1. index.html
2. sw.js
3. version.json

KEEP EXISTING ROOT ASSETS
- manifest.webmanifest
- icon-192.png
- icon-512.png
- apple-touch-icon.png
Do not replace them with placeholders.

CACHE / BOOT
After GitHub Pages deploy, open with a fresh cache-buster, for example:
?build=402431-r73-h1
If the old build is still shown, close the tab/PWA completely and reopen.

MANDATORY ACCEPTANCE CHECK
1. Header shows V4.0.24.3.1 / R7.3 / FS HARNESS R1 / Engine V4.0.23.1 LOCK.
2. FULL INDEX shows 492/492.
3. Search a player and open VALUTA.
4. Test VINTO and PERSO with a disposable test sequence.
5. Open Cockpit, Piano 25, La Mia Rosa and Opponents.
6. Test Undo then Redo.
7. Test Backup export then Restore on the same test state.
8. Reload and verify local state persistence.
9. Put Safari temporarily offline only after the page has been opened online once; verify cached fallback.
10. Record Physical iPhone/Safari result as PASS or FAIL.

GOLD LOCK RULE
Do NOT call this GOLD LOCK while either blocking gate remains pending:
- physical iPhone/Safari acceptance;
- certified temporal real-auction replay against current engine V4.0.23.1.
Legacy L9 evidence is useful evidence only; it does not close the current-engine replay gate.

AUDIT MATERIAL
See /audit and /golden in this package. These files do not need to be published in the website root unless desired.
