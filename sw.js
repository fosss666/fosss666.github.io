/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/04/hello-world/index.html","aeb36080d829775a8f71934c556903e1"],["/2023/08/04/感谢贴/index.html","27bdd78062b24498b643d082dfd95d53"],["/2023/08/04/水专传奇/index.html","9e01ce8a88b1d3259097aa8b10d433d1"],["/2023/08/06/完全二叉树的节点个数/image1.png","954563af12b8fd6eb831e2885829751f"],["/2023/08/06/完全二叉树的节点个数/index.html","313f00245d65692fd2e1460bc12be569"],["/2023/08/07/Redis常用数据结构/index.html","fd46f8303c2f84ecc8cab33b38a920ff"],["/2023/08/07/idea插件分享1/index.html","c580d87be9d29c97913c80274f0c12ae"],["/2023/08/07/idea插件分享2/index.html","c9b03122dbc3262a2baf3493a01cc29f"],["/2023/08/07/安利edge浏览器chatgpt插件/index.html","1f95857803d90bb3d236e2c5236d9ebf"],["/2023/08/08/缓存穿透、缓存雪崩、缓存击穿三大问题介绍及解决思路/index.html","7a5532b7a111e915a4a1507ec4adbf33"],["/2023/08/09/markdown语法详解/index.html","3f6b51f36c4d3eef38f5d41b1404dc66"],["/about/index.html","a8edb1df6a4be30cc108a78ce9d6ee1c"],["/archives/2023/08/index.html","fd0494477001f1408d74b106daf3ca44"],["/archives/2023/index.html","22a3d2e9ebc79011dcffd4b44fba8940"],["/archives/index.html","807fb03dbe65e52b58f2aea121592b23"],["/categories/idea插件/index.html","7fb5df9fd787fe7f6a150e2b3de74ce2"],["/categories/index.html","b32391bcfe50a0f9aebf58fa01594372"],["/categories/leetcode/index.html","314cd3f1b4f6296568841a97904608c4"],["/categories/redis/index.html","9577af69b07d03f338a0575317a9dddc"],["/categories/安利好物/index.html","19a90fd0dd31c2329f353c3b56479796"],["/categories/小作文/index.html","ab7318dd5ee0e26fae7bce8bc0d89548"],["/categories/笔记/index.html","4803be47f77ddc3d6db1d504746e6b20"],["/comments/index.html","192f6ce1e38c60580ffaf5ee50eb589a"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/commentsbar.css","a38f98ba8d2f697b4d21ddff33615665"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","bd5ac43522fa7ba58aa09bf06d8d7116"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","da0dd48b86aec2a2e3cf2ae92bfb7ae7"],["/img/avatar.jpg","eaf2af3b9c0aa31e8a4b1d89b56e4c23"],["/img/background.gif","793fb0a3ec8c025d259a3c3c87ae0266"],["/img/background1.jpg","62a9be3270a6f0c37b725b571c605dfc"],["/img/background2.jpg","38b82d72ff1d6d28f70024a76c8aa1e9"],["/img/background3.jpg","dfb4d441a06e34530916416dd8b8f581"],["/img/background4.gif","633c23c4e739688f289a1dcccfd7415d"],["/img/background5.gif","9f38fa66b43c68f2ec7e2e28fdd82991"],["/img/blog.gif","282c8d04ebee4dd6715f4f59f91984f0"],["/img/card_announcement.gif","5b5a8c99cd8185446109a11fb4cde054"],["/img/default_top_img .jpg","afa3701827fc413fc5f81dfaf3891adf"],["/img/default_top_img.gif","32012b23f667a32d95584596d697f111"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/weixin.png","9cfc29e6cbb1bbfddf4834f8d5e7da28"],["/img/网站图标.jpg","16facfdbfba00004d0512c8596568bbd"],["/index.html","c7b44376a9b8da8839020a8d0d3fa447"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","75538ab712579af2603ee68ea8e7f7b2"],["/live2dw/assets/moc/tsumiki.2048/texture_00.png","4dc9823d5f8eea307d8fa112f0eb7dff"],["/live2dw/assets/moc/tsumiki.2048/texture_01.png","d40508d025d2f2c699bb22affdf1b136"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","9cacdfe29b608ce5db84dce0dc778afa"],["/photos/MaLong/index.html","3d83dca366705b883fd1239a790623ae"],["/photos/dogs/index.html","a14eeafde2370ffd1d177be0dbe65c90"],["/photos/index.html","17ab25c264a6439684b2e943cbb3030d"],["/photos/life/about1.gif","324ceb4d595dec863c0161936841791f"],["/photos/life/index.html","b51554e997d06d7f5d238a46cfeca2aa"],["/photos/life/和19毕业生.jpg","9a9531d5e569c85bdbcceb3e608a0a06"],["/photos/life/小学.jpg","c421b1fcaebb02eaf9ae286e889aeea4"],["/photos/life/高三.jpg","2f69a8ed1c0dcc8dd2e779fa555b029d"],["/photos/life/高三宿舍.jpg","8ec1245b0f122cf315d542f597b9c0f7"],["/sw-register.js","fc85282366cb8c5318624d2d5bac5956"],["/tags/Edge/index.html","fc42fd13c940d2f5f1a61cf8da2836bb"],["/tags/chatgpt/index.html","8ffb80cd81789217f689dc4cf5aac431"],["/tags/hexo/index.html","5cbc02bf94998b281ad182c69c25b356"],["/tags/idea/index.html","d8e45745d8c0972968e290d737de0f84"],["/tags/index.html","009a02bc3e5a9b59f92c3be52a5c505b"],["/tags/leetcode/index.html","5b788a748baf80d05f840845b8fe1818"],["/tags/markdown/index.html","605a746fd8bcfbbb735647c073aab9da"],["/tags/redis/index.html","3bdb479f7c159e4bdd99554501746742"],["/tags/安利/index.html","e86e15bbb34e419a4f88ef6cc2586309"],["/tags/完全二叉树/index.html","572fd50c6280b548a2c1be70d8f1b690"],["/tags/插件/index.html","15eb96e9850a097f4bc82b8ca91ac0fb"],["/tags/教程/index.html","61fc3accd666726703c1f4d3a061726d"],["/tags/数据结构/index.html","676f15206e204c808419efe36f918bbf"],["/tags/瞎说说/index.html","fa975ff7ad5b1a61cc90ea23310881ea"],["/tags/笔记/index.html","586d2eb10f2387a58ac55e2d52cca7c8"],["/tags/缓存三大问题/index.html","a610a564825ce66a91fa005fba27caec"],["/tags/美化/index.html","b9ab4ba5738d062f75cd6ba2289aa58c"],["/tags/递归/index.html","2263439cf7f586ba531f943527aa68d8"]];
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
