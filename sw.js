if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const c=e=>n(e,f),d={module:{uri:f},exports:o,require:c};i[f]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-D-9pHGoS.js",revision:null},{url:"assets/index-vc4hkQqY.css",revision:null},{url:"index.html",revision:"e178206d2b4478c7d91340e97a1f22b8"},{url:"registerSW.js",revision:"de513d90b47c8a81fddbb11381681639"},{url:"favicon.ico",revision:"f2413d192135c1f5194f5e7016a8a4d0"},{url:"maskable-icon-512x512.png",revision:"833fff5b4eec6c465ab04ccd3f704220"},{url:"pwa-192x192.png",revision:"befb82638ebfb5c672ec7f706c36f760"},{url:"pwa-512x512.png",revision:"65d2283264dbc6fc7c46ed485302b02b"},{url:"pwa-64x64.png",revision:"349705ff2e4cfb54bb5f9959fac93091"},{url:"manifest.webmanifest",revision:"d49b6cf6decefbb2856185450fdb98dd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
