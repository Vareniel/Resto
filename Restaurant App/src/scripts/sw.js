/* eslint-disable no-undef */
import "regenerator-runtime";
import CacheHelper from "./utils/cache";

const assetsToCache = [
  "./",
  "./icons/frame 1.png",
  "./icons/frame 2.png",
  "./icons/frame 3.png",
  "./icons/frame 4.png",
  "./icons/frame 5png",
  "./icons/frame 6.png",
  "./icons/frame 7.png",
  "./icons/frame 8.png",
  "./index.html",
  "./favicon.png",
  "./app.bundle.js",
  "./app.webmanifest",
  "./sw.bundle.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
