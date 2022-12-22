'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ab99d0dad1882d933b8a5f674e11389d",
".git/config": "3c85fe5b1f7e1abd4c1f943779f88d18",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "095ad7de50a83a3d71f995025ce5e82c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cc1a4c54a37408f66f7dc1ffc4ca50a5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "028da20670b9aba265f6bd9a6a27a339",
".git/logs/refs/heads/master": "028da20670b9aba265f6bd9a6a27a339",
".git/logs/refs/remotes/origin/HEAD": "53b72f4bc5c72d03eeed1855e404dbaf",
".git/logs/refs/remotes/origin/master": "a349f8d36cb2045ec538b3c7f982b9e5",
".git/objects/04/5c4bb8e71368887c6566bc727ac235c01a2944": "08cbceb8882c0e24dd224f3047c5f766",
".git/objects/2d/c8a197e2c28ca27801e4ec7c19ab179d3d1d8e": "bb0d1df47f0de14c95cbb32261a58fe3",
".git/objects/31/722e043a4bbe1a9bfd9505e83b2b1f28c9fbb4": "2fb9776482f7fbf4fdb9ab10df67daea",
".git/objects/3e/881993256a641cfa2fb10b6bb4b2e01c663f86": "d1d7efc28e3e7f1545d3ebf0c7a4aa93",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/54/4d88eabf3225f3d40437c75ff8965f9165aca7": "730b585b29cf9ed04eb6abfe558eb270",
".git/objects/7b/049e850f16ebe38f3db3179796c7201543cf9f": "1eede2cea5e4039214e876f8368d3500",
".git/objects/7f/3660486261dfb0e13fb293fbabe9c3634e0d18": "5dbdc23d7f686454fe9bca3902d3391e",
".git/objects/a6/9ede25bff485bc04e07c1e8c26e9df04dc54e0": "e2a4a5cd4c9f15e650e64678fad3b249",
".git/objects/a7/17a74a776dad69e740a51880aee2b68941c44a": "77c89dd333e26b84d5cf133ac30783c6",
".git/objects/b2/e8030e83d9ea9ce463727b742e24a2096b8ab8": "8d488319162dfb007c0b73b919d6da55",
".git/objects/e1/93997fa7ddf00222124e00e71c2f996731e7e3": "3716688fdab6d23619cd8d3a1c5651d7",
".git/objects/e3/11284ffee096967e8f2a21c863e4e95fc58425": "daec30b220d4b184cfc0d26a71d0492a",
".git/objects/e9/b1a1f4354f8f8652baf782fa4d43ba557ca1a8": "5504cd26ab6472ad0089cc1c0c78110d",
".git/objects/ea/b5c8d947b5f8dc1eff8fe2882c2faeec2134ed": "77a848aa27c8b4ab5a36750fe214a201",
".git/objects/fa/2fe34cdaf5b2bf980f9485c379c60f2d373839": "380794266f4573a38530ab600bc58069",
".git/objects/pack/pack-73ec1d6066928690eea67c5e1e90e1819719969c.idx": "8434894acbf914a98af4b6b1c3d184cc",
".git/objects/pack/pack-73ec1d6066928690eea67c5e1e90e1819719969c.pack": "4ee79abd5788b783836f5168196854c1",
".git/ORIG_HEAD": "7a23c9a4888c4d26d33fea97f9f74bf5",
".git/packed-refs": "5e3b1c80dab7c34ee2f6e50658c2d236",
".git/refs/heads/master": "7a23c9a4888c4d26d33fea97f9f74bf5",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "7a23c9a4888c4d26d33fea97f9f74bf5",
"assets/AssetManifest.bin": "5fd9165c4ebb316850cb11903e7894f4",
"assets/AssetManifest.json": "d9965022a0da644e4e7311eb0723a2e6",
"assets/assets/images/logo1.png": "7f84071f6e073026a4727f8803255d6d",
"assets/assets/images/logo2.png": "eb22fdd31577a22ce23876d5ff9299ad",
"assets/assets/images/msg.png": "ebe37f3c4b22362567a46048cd4abfe6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9e382c5d57581dbcd194e7927e4c6cb1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce8a96ecc81fc00a3663bfdf1b9bbdf9",
"/": "ce8a96ecc81fc00a3663bfdf1b9bbdf9",
"main.dart.js": "c9ccba6fdec36cfbfe4e7562bdb33966",
"manifest.json": "826c15602e21996c879a51cd16ac832a",
"version.json": "51042ff0441753b69367ffdd8e4d6f3f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
