/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/04/hello-world/index.html","2e2c0598a5fa5ca8ea3ca8af5b8456ee"],["/2023/08/04/感谢贴/index.html","6131e728f1f8756dba8eb379ad450f18"],["/2023/08/04/水专传奇/index.html","d6ae9301d1727c5a2f173e55e3e08ade"],["/2023/08/06/完全二叉树的节点个数/image1.png","954563af12b8fd6eb831e2885829751f"],["/2023/08/06/完全二叉树的节点个数/index.html","e2db3ef3586454c5b2ae40c46c481e1e"],["/2023/08/07/Redis常用数据结构/index.html","e2297b361a5178d719726e66a8c9d933"],["/2023/08/07/idea插件分享1/index.html","80c83518c323fe805f5b901787099627"],["/2023/08/07/idea插件分享2/index.html","248504c7c256fa2333322b59fa2b50ba"],["/2023/08/07/安利edge浏览器chatgpt插件/index.html","60357779c6171786466a7086bf9a1051"],["/2023/08/08/缓存穿透、缓存雪崩、缓存击穿三大问题介绍及解决思路/index.html","7056f8b0a2f4fc7e962e47b89d074fa5"],["/2023/08/09/markdown语法详解/index.html","b9820809331a451fa0829f15b5953129"],["/2023/09/11/事务并发异常/index.html","c70ec2ced1baef327081a1c1e8cc3737"],["/2023/10/11/docker安装、配置、下载软件等/index.html","0849a9adaf2f8b1dc51c00aa1e7a3d7d"],["/about/index.html","27b602710b023c3d6a7f31ee67dc8ffe"],["/archives/2023/08/index.html","93a7da5d0edf4e0697d3b60983614bb5"],["/archives/2023/09/index.html","423c817d88f32db61361df0c2385e120"],["/archives/2023/10/index.html","cd333d07e5f5caed07e930def1bd0c59"],["/archives/2023/index.html","9d8bbb417c2fb2ce46f0f77cae1a4b4f"],["/archives/2023/page/2/index.html","b4a073a71236bccd7154db683a8e347b"],["/archives/index.html","428498d6790d02f7a2d81b3999dca133"],["/archives/page/2/index.html","95015ad80eb8f7878413819c7a661c99"],["/categories/idea插件/index.html","cc81d7881cc4c7c6486416dd55cba154"],["/categories/index.html","2250e0765896e0efa70dece30ad59016"],["/categories/leetcode/index.html","1042f4103e6bc85ffde34976223345b0"],["/categories/redis/index.html","84f4858bc672de413dc8aedfba450b79"],["/categories/安利好物/index.html","cf259203c43c7606795e915c402db92f"],["/categories/小作文/index.html","8aec44925ee6b1f515cf754b2b915a05"],["/categories/笔记/index.html","c258a52d2e4e065370328d4c519a2a47"],["/comments/index.html","a54daf20fbf0c8414340aa3fa8a577bc"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/commentsbar.css","a38f98ba8d2f697b4d21ddff33615665"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","85df99594b509118d058b001ca032999"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","da0dd48b86aec2a2e3cf2ae92bfb7ae7"],["/img/avatar.jpg","eaf2af3b9c0aa31e8a4b1d89b56e4c23"],["/img/background.gif","793fb0a3ec8c025d259a3c3c87ae0266"],["/img/background1.jpg","62a9be3270a6f0c37b725b571c605dfc"],["/img/background2.jpg","38b82d72ff1d6d28f70024a76c8aa1e9"],["/img/background3.jpg","dfb4d441a06e34530916416dd8b8f581"],["/img/background4.gif","633c23c4e739688f289a1dcccfd7415d"],["/img/background5.gif","9f38fa66b43c68f2ec7e2e28fdd82991"],["/img/blog.gif","282c8d04ebee4dd6715f4f59f91984f0"],["/img/card_announcement.gif","5b5a8c99cd8185446109a11fb4cde054"],["/img/default_top_img .jpg","afa3701827fc413fc5f81dfaf3891adf"],["/img/default_top_img.gif","32012b23f667a32d95584596d697f111"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/weixin.png","9cfc29e6cbb1bbfddf4834f8d5e7da28"],["/img/网站图标.jpg","16facfdbfba00004d0512c8596568bbd"],["/index.html","60d7ba59dc68d733a4d4cb5f55c14b48"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","b2c1d8882c03b3ab16baa2d2acfdd460"],["/live2dw/assets/moc/tsumiki.2048/texture_00.png","4dc9823d5f8eea307d8fa112f0eb7dff"],["/live2dw/assets/moc/tsumiki.2048/texture_01.png","d40508d025d2f2c699bb22affdf1b136"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","fd47eeda68ddf86ef8767c7bb44d6726"],["/page/2/index.html","e1fb3cda96922830e8dacb83f973ef0c"],["/photos/MaLong/index.html","876aa6df029529b905f67c116d43deea"],["/photos/dogs/index.html","ae5c53d47497e483a18e2402dfcef491"],["/photos/index.html","5145a72590e8c274388c7ad7dfd462ab"],["/photos/life/about1.gif","324ceb4d595dec863c0161936841791f"],["/photos/life/index.html","021939e580325f34c6fedb09e19464b0"],["/photos/life/和19毕业生.jpg","9a9531d5e569c85bdbcceb3e608a0a06"],["/photos/life/小学.jpg","c421b1fcaebb02eaf9ae286e889aeea4"],["/photos/life/高三.jpg","2f69a8ed1c0dcc8dd2e779fa555b029d"],["/photos/life/高三宿舍.jpg","8ec1245b0f122cf315d542f597b9c0f7"],["/sw-register.js","e9375ffe33a049efcf0eb7693c2d7dbe"],["/tags/Edge/index.html","032f849f59e1194e6424bd6c4c3c5525"],["/tags/chatgpt/index.html","5d905dff838bff3a9a2c2baf28e2b3cf"],["/tags/docker/index.html","5fb59920d15b4e8fd533f7baca54ee56"],["/tags/hexo/index.html","0ed2932b65af668a2a43c0df7026dc40"],["/tags/idea/index.html","2bd3207ff41c35747c79d42829dcf592"],["/tags/index.html","45966574e27fb9fe05aa63995644e34e"],["/tags/leetcode/index.html","a5007a6e2d8f4e1732a4f290b6b7420a"],["/tags/markdown/index.html","0c282a1443afadfa64ff90f0eb4f842f"],["/tags/redis/index.html","2d8ce358ce37b88bc3125e8f5fbc7a7c"],["/tags/事务管理/index.html","a326740b4aef2f68e2353b1e0cdb38d4"],["/tags/安利/index.html","a44230b2c431a89ef6d386585d8338f5"],["/tags/完全二叉树/index.html","5023701a5d41033d0f5f24ac23a3f7a7"],["/tags/插件/index.html","52d9dda40e8cce980a219998a7badb55"],["/tags/教程/index.html","204fde0c70ecbb2da528cd2a750f9371"],["/tags/数据结构/index.html","cb3c157deaca4879169ae707b511ef1d"],["/tags/瞎说说/index.html","5220014942ef20712d74049360ea12b5"],["/tags/笔记/index.html","1948363d703f12f95573d304df53d2dc"],["/tags/缓存三大问题/index.html","442b9b2e3bed2cafe954e0217c33ca41"],["/tags/美化/index.html","2007e2de4a1e07e4db56f413c52b871c"],["/tags/递归/index.html","14df2bbd7d3c32647bce780654dbb280"]];
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
