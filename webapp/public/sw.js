if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,n,r)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return t;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bbbugJEhOZtN3tAGkshxp/_buildManifest.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/bbbugJEhOZtN3tAGkshxp/_ssgManifest.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/214.1aabe3a9ece3292ce552.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/251-f71868309040a20ffc33.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/360.43f90e0ad51aded45910.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/361.c945467de0e806d61bfd.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/973.d2c68bc3e02ea9233a57.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/main-958035a536a9f5f9f29d.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/pages/_app-50b6f62ead55f40fd5ee.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/pages/_error-b780a42fb2456310028b.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/pages/index-8a8bb681de7f4e507e05.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/polyfills-2cbc52c31ec2c8b0b261.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/chunks/webpack-12528f1cdff999ca0baf.js",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/_next/static/css/2ec50f8b35c6b49f0b0b.css",revision:"bbbugJEhOZtN3tAGkshxp"},{url:"/fonts/inter.woff2",revision:"812b3dd29751112389e93387c4f7dd0a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
