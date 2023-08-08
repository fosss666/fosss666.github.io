/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/04/hello-world/index.html","3a80aa5f4d375729045a7090f3b7250b"],["/2023/08/04/感谢贴/index.html","06b14634ee51c613190ea880908879cd"],["/2023/08/04/水专传奇/index.html","cf01a241083c219c9625f2fcf78d6f23"],["/2023/08/06/完全二叉树的节点个数/image1.png","954563af12b8fd6eb831e2885829751f"],["/2023/08/06/完全二叉树的节点个数/index.html","d44e67268fe22e8ca325c879948ac150"],["/2023/08/07/Redis常用数据结构/index.html","ce7e8ee77aaf9fe34dd5922048eefb0f"],["/2023/08/07/idea插件分享1/index.html","b7e8319984e0ca7514192ffbaa5db420"],["/2023/08/07/idea插件分享2/index.html","7029a7b36f5560a7caa24bfeecfc6fbc"],["/2023/08/07/安利edge浏览器chatgpt插件/index.html","9667f793cc15dfd14547f7f695a3726d"],["/about/index.html","ccfc8b26a53ea8c60328853fa2c26d90"],["/archives/2023/08/index.html","4ef703dbbe2d72dfdff9bd99ecbc1805"],["/archives/2023/index.html","7933ebc74445fe54457abb818113a3ba"],["/archives/index.html","ea9f16387530cd32ca97b146ad409a64"],["/categories/idea插件/index.html","20a368d9ecdf8dcf9ec13f5548cd4b88"],["/categories/index.html","1ac24fd149fe23cae2692ab46e47797b"],["/categories/leetcode/index.html","b3df3d1ade6b8026475b04bf67342fa1"],["/categories/redis/index.html","6bf53da7820931308bf6fe9f4c20fc4a"],["/categories/安利好物/index.html","12fac829796300ebbf3a50fb4446fc80"],["/categories/小作文/index.html","cc57e0d891b3503867677d24a477defa"],["/comments/index.html","c021b28b27fa8a638406dc7cb7a67e37"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/commentsbar.css","a38f98ba8d2f697b4d21ddff33615665"],["/css/index.css","1c534b622cbbc5bd9cd58f3b077d0523"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","da0dd48b86aec2a2e3cf2ae92bfb7ae7"],["/img/avatar.jpg","eaf2af3b9c0aa31e8a4b1d89b56e4c23"],["/img/background.gif","793fb0a3ec8c025d259a3c3c87ae0266"],["/img/background1.jpg","62a9be3270a6f0c37b725b571c605dfc"],["/img/background2.jpg","38b82d72ff1d6d28f70024a76c8aa1e9"],["/img/background3.jpg","dfb4d441a06e34530916416dd8b8f581"],["/img/background4.gif","633c23c4e739688f289a1dcccfd7415d"],["/img/background5.gif","9f38fa66b43c68f2ec7e2e28fdd82991"],["/img/blog.gif","282c8d04ebee4dd6715f4f59f91984f0"],["/img/card_announcement.gif","5b5a8c99cd8185446109a11fb4cde054"],["/img/default_top_img.jpg","eaf2af3b9c0aa31e8a4b1d89b56e4c23"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/weixin.png","9cfc29e6cbb1bbfddf4834f8d5e7da28"],["/img/网站图标.jpg","16facfdbfba00004d0512c8596568bbd"],["/index.html","3e90616b25ada7348ac320ed5695e084"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","5051962782fe1ad848767f8ea34cae16"],["/live2dw/assets/moc/tsumiki.2048/texture_00.png","4dc9823d5f8eea307d8fa112f0eb7dff"],["/live2dw/assets/moc/tsumiki.2048/texture_01.png","d40508d025d2f2c699bb22affdf1b136"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","bd9d741b53278917d2fb7b07e302e22f"],["/photos/MaLong/index.html","abe18e58a91d50f97a3102082c9455a7"],["/photos/dogs/index.html","de162e0fea3802b99b96ca4be4393879"],["/photos/index.html","693022946a281bf7f03c603c771a0e5d"],["/sw-register.js","4d8f0ee7afe714b0a2e2ed95ff910039"],["/tags/chatgpt/index.html","5f4036c6910914bac0f9e8151858a0fe"],["/tags/idea/index.html","03ba95b464babd94e44ec3f991f44dfd"],["/tags/index.html","e34c99adcb467fe023201c626f89cf2d"],["/tags/redis/index.html","31e221b5355e498fb91b437f05b89235"],["/tags/安利/index.html","be88801a1585a63e02676f90d9c5baa6"],["/tags/完全二叉树/index.html","399781377a2aadabae2e923dfac7224d"],["/tags/插件/index.html","cdc298f87e309667af987e19bcec4aca"],["/tags/数据结构/index.html","045945010959fcaa705c2e021e3ec03f"],["/tags/瞎说说/index.html","e271de253864fa4f2d6f1cf585435fe4"],["/tags/递归/index.html","b02d91c1b5a3f1336e1dc29375612140"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
