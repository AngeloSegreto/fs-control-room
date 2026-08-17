const CACHE_NAME = "fs-control-room-v4.0.24.3.1-pwa-r7.3-harness-r1-20260817";
const CORE = [
  "./manifest.webmanifest",
  "./version.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  // Asset piccoli soltanto: nessun blocco sull'HTML monolitico.
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await Promise.all(CORE.map(async url => {
        try {
          const r = await fetch(url, {cache:"reload"});
          if (r && r.ok) await cache.put(url, r.clone());
        } catch(e) {}
      }));
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter(k => k !== CACHE_NAME && k.startsWith("fs-control-room-"))
            .map(k => caches.delete(k))
      );
      await self.clients.claim();

      // Warm dell'HTML in background dopo l'attivazione.
      try{
        const cache = await caches.open(CACHE_NAME);
        const r = await fetch("./index.html", {cache:"reload"});
        if(r && r.ok) await cache.put("./index.html", r.clone());
      }catch(e){}
    })()
  );
});

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if(url.origin !== self.location.origin) return;

  if(event.request.mode === "navigate"){
    // Online: contenuto fresco. Offline: fallback alla copia locale.
    event.respondWith(
      fetch(event.request)
        .then(async response => {
          if(response && response.ok){
            const cache = await caches.open(CACHE_NAME);
            cache.put("./index.html", response.clone()).catch(()=>{});
          }
          return response;
        })
        .catch(async () => {
          return (await caches.match("./index.html")) ||
                 (await caches.match("./")) ||
                 new Response("FS Control Room offline cache non ancora pronta.", {
                   status:503,
                   headers:{"Content-Type":"text/plain; charset=utf-8"}
                 });
        })
    );
    return;
  }

  // Asset: cache-first, aggiornamento trasparente in background.
  event.respondWith(
    caches.match(event.request).then(cached => {
      const network = fetch(event.request).then(response => {
        if(response && response.ok && response.type === "basic"){
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request,copy)).catch(()=>{});
        }
        return response;
      }).catch(()=>cached);

      return cached || network;
    })
  );
});
