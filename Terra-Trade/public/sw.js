if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const u=e=>n(e,i),r={module:{uri:i},exports:c,require:u};s[i]=Promise.all(t.map((e=>r[e]||u(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"afe898672786cf2cbed01846d1dec565"},{url:"/_next/static/chunks/105.2383622fc67a71d8.js",revision:"2383622fc67a71d8"},{url:"/_next/static/chunks/4bd1b696-f7083ef5688de2f1.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/517-05260d8ed119c2e1.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/52-f82cd83913362ba7.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/736-d7555e998ab889c4.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/74-bd2467b9ad2be133.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/_not-found/page-6b6adbc0da0778cf.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/api/propiedades/route-d967bf087694bf37.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/api/user-info/route-0e9c1ea79699a9ef.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/api/users/route-523dfd7c0b4b3873.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/api/visualizar/route-eaf5ef44eba42251.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/dashbord/page-c355b6afcf0db839.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/datos/page-da76eb502a8a776e.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/juli/page-64db07443fa0b939.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/layout-12abd4f36f992493.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/login/page-3e6807f4ce8df47a.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/page-691c1a023a0601a1.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/paginanueva/page-b37cc416776bf6df.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/perfil/page-cee2a0fcdbc8962e.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/preguntasFrecuentes/page-0aa2348260ed6aa8.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/propiedades/page-998b4f8f551c99aa.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/register/page-937d53917ebddeb2.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/app/subirTerrenoViejo/page-0bf8c175dbd3b128.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/framework-881f0560c40ae817.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/main-app-2a251be5ed150f13.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/main-f386cd83de6ba12d.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/pages/_app-d55c6255b9f537af.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/pages/_error-a76d221bdc894e32.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-880f6cc2d3eb56e0.js",revision:"uY7Z1SdvVzIQt6pbDKuQ1"},{url:"/_next/static/css/af3bde2f1760826c.css",revision:"af3bde2f1760826c"},{url:"/_next/static/uY7Z1SdvVzIQt6pbDKuQ1/_buildManifest.js",revision:"8df12f1a20305e5dc1249415bbbf6a17"},{url:"/_next/static/uY7Z1SdvVzIQt6pbDKuQ1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/WalletIcon.jpg",revision:"f84071f1fba9682bf37c406a5c726b3d"},{url:"/imagenes/enviar.png",revision:"ac1f5c4509663651f54cb7f15f9027b8"},{url:"/imagenes/logo.png",revision:"d3e5baca184b5bdda405ce7401a272b7"},{url:"/imagenes/logoo.png",revision:"70d89477122ce6c9868a5ac7fc15a8ec"},{url:"/imagenes/personita.png",revision:"5b09cbaf02c75cd465700621c643eb89"},{url:"/imagenes/plata.png",revision:"74d3bf08711b08be44fb1e651a334ada"},{url:"/imagenes/qr.png",revision:"1bd66fad20e8798249a9952b5c3fd467"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
