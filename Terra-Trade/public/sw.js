if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2d2603c27f154e401dcbd360f62bddff"},{url:"/_next/static/2RH_1zYIpqVZEj-tiP-M5/_buildManifest.js",revision:"e872d9626dc7f717f06a47523900ab92"},{url:"/_next/static/2RH_1zYIpqVZEj-tiP-M5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/117-705642b8945ff290.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/495.1e063213dcb4801b.js",revision:"1e063213dcb4801b"},{url:"/_next/static/chunks/609-25a7cb252c3ce8f5.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/624-7f8d3c1768c6c5c6.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/777-4a477467dc522845.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/_not-found/page-594a35bb4f27365a.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/dashbord/page-756d8bfa2008b543.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/datos/page-398a431e89edc837.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/juli/page-ca1a2c681a086098.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/layout-b3432a6a0db77164.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/login/page-610351d57cadb4f2.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/page-32a555e873ff77b0.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/paginanueva/page-bb602d19382a071c.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/perfil/page-12b20f3cc4ef9286.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/preguntasFrecuentes/page-3298cc392302c0bf.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/propiedades/page-b9d57d5d9f0ae695.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/register/page-66173914c4ec6be7.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/app/subirTerrenoViejo/page-bd139b9217bbd49d.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/fd9d1056-596a8d76c47695b1.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/framework-13422b7ee8d47965.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/main-app-dcf428bcc85d1686.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/main-ba813131adf395b8.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/pages/_app-1b6c2af2d071cfdf.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/pages/_error-f8c0f998a44b9b46.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-368deaa9a484c71e.js",revision:"2RH_1zYIpqVZEj-tiP-M5"},{url:"/_next/static/css/af3bde2f1760826c.css",revision:"af3bde2f1760826c"},{url:"/icons/WalletIcon.jpg",revision:"f84071f1fba9682bf37c406a5c726b3d"},{url:"/imagenes/enviar.png",revision:"ac1f5c4509663651f54cb7f15f9027b8"},{url:"/imagenes/logo.png",revision:"d3e5baca184b5bdda405ce7401a272b7"},{url:"/imagenes/logoo.png",revision:"70d89477122ce6c9868a5ac7fc15a8ec"},{url:"/imagenes/personita.png",revision:"5b09cbaf02c75cd465700621c643eb89"},{url:"/imagenes/plata.png",revision:"74d3bf08711b08be44fb1e651a334ada"},{url:"/imagenes/qr.png",revision:"1bd66fad20e8798249a9952b5c3fd467"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
