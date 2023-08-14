/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/fosss/2023/08/04/hello-world/index.html","1e228b95d1dd37f8e8e94114348fe24e"],["/fosss/2023/08/04/感谢贴/index.html","8b46ae3cd127253fde3c707ed8795b4b"],["/fosss/2023/08/04/水专传奇/index.html","ce426dcf7039c67486ea80c130628197"],["/fosss/2023/08/06/完全二叉树的节点个数/image1.png","954563af12b8fd6eb831e2885829751f"],["/fosss/2023/08/06/完全二叉树的节点个数/index.html","fdbe87e0d4dd03956f2fa207619aafc2"],["/fosss/2023/08/07/Redis常用数据结构/index.html","787647ab67f8df5a156e3a8236641024"],["/fosss/2023/08/07/idea插件分享1/index.html","f58a3e487833577d331454e458552002"],["/fosss/2023/08/07/idea插件分享2/index.html","5bfb1b3fea14ece4ae1d910baf7eb1b8"],["/fosss/2023/08/07/安利edge浏览器chatgpt插件/index.html","5c6cdad0c194b6d10eb4312c5e11a495"],["/fosss/2023/08/08/缓存穿透、缓存雪崩、缓存击穿三大问题介绍及解决思路/index.html","e7d04c10e8a726e29fe237f44606afc9"],["/fosss/2023/08/09/markdown语法详解/index.html","2c93efe7c7e61e55f6b2caa625068ebe"],["/fosss/about/index.html","5a387563e70529910804b5b89586cbd8"],["/fosss/archives/2023/08/index.html","40f1bbd6c0aed4890face5e16251561f"],["/fosss/archives/2023/index.html","6adebf3c4deb20bf20743d829d17607a"],["/fosss/archives/index.html","dfac7481eedf326c6b357a3af61df1b9"],["/fosss/categories/idea插件/index.html","2152eb3d2c466133f0a6dcdf701d36d8"],["/fosss/categories/index.html","764538b22a0e64922e881e775f9076fe"],["/fosss/categories/leetcode/index.html","6c244b57397c252736496e7b060e1813"],["/fosss/categories/redis/index.html","9708d3f60ee7a58ead0277419bfff74e"],["/fosss/categories/安利好物/index.html","4e88dd6d7d2c656e7088587fe7bede0b"],["/fosss/categories/小作文/index.html","1b020461ed32c927100df29d75d7c420"],["/fosss/categories/笔记/index.html","8e0698464891270424f6d4045c494544"],["/fosss/comments/index.html","0b847da116b9950c8e2fad9cb46f0b7a"],["/fosss/css/background.css","4eb534984212916952fe84586d03b089"],["/fosss/css/commentsbar.css","a38f98ba8d2f697b4d21ddff33615665"],["/fosss/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/fosss/css/index.css","6f3e4f6b9663fcd6796637421df33e95"],["/fosss/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fosss/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/fosss/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/fosss/img/alipay.jpg","da0dd48b86aec2a2e3cf2ae92bfb7ae7"],["/fosss/img/avatar.jpg","eaf2af3b9c0aa31e8a4b1d89b56e4c23"],["/fosss/img/background.gif","793fb0a3ec8c025d259a3c3c87ae0266"],["/fosss/img/background1.jpg","62a9be3270a6f0c37b725b571c605dfc"],["/fosss/img/background2.jpg","38b82d72ff1d6d28f70024a76c8aa1e9"],["/fosss/img/background3.jpg","dfb4d441a06e34530916416dd8b8f581"],["/fosss/img/background4.gif","633c23c4e739688f289a1dcccfd7415d"],["/fosss/img/background5.gif","9f38fa66b43c68f2ec7e2e28fdd82991"],["/fosss/img/blog.gif","282c8d04ebee4dd6715f4f59f91984f0"],["/fosss/img/card_announcement.gif","5b5a8c99cd8185446109a11fb4cde054"],["/fosss/img/default_top_img .jpg","afa3701827fc413fc5f81dfaf3891adf"],["/fosss/img/default_top_img.gif","32012b23f667a32d95584596d697f111"],["/fosss/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/fosss/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/fosss/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/fosss/img/weixin.png","9cfc29e6cbb1bbfddf4834f8d5e7da28"],["/fosss/img/网站图标.jpg","16facfdbfba00004d0512c8596568bbd"],["/fosss/index.html","dcaeb53451ebc044c43d9124be518c02"],["/fosss/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/fosss/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/fosss/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/fosss/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/fosss/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/fosss/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/fosss/link/index.html","faca48c825f65a7dfa28357bb2035b46"],["/fosss/live2dw/assets/moc/tsumiki.2048/texture_00.png","4dc9823d5f8eea307d8fa112f0eb7dff"],["/fosss/live2dw/assets/moc/tsumiki.2048/texture_01.png","d40508d025d2f2c699bb22affdf1b136"],["/fosss/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/fosss/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/fosss/music/index.html","d416adfee46b50f22869ef0728ea7b74"],["/fosss/photos/MaLong/index.html","0df74b2dab3f58419900f50da5f3a7a6"],["/fosss/photos/dogs/index.html","ed5ca778cab1e0e8153dc65113657b58"],["/fosss/photos/index.html","d366a0ecae13e11c6d1f3d6578ccf91b"],["/fosss/photos/life/about1.gif","324ceb4d595dec863c0161936841791f"],["/fosss/photos/life/index.html","954e3ca5855b6ccc1625b67b09d55fb6"],["/fosss/photos/life/和19毕业生.jpg","9a9531d5e569c85bdbcceb3e608a0a06"],["/fosss/photos/life/小学.jpg","c421b1fcaebb02eaf9ae286e889aeea4"],["/fosss/photos/life/高三.jpg","2f69a8ed1c0dcc8dd2e779fa555b029d"],["/fosss/photos/life/高三宿舍.jpg","8ec1245b0f122cf315d542f597b9c0f7"],["/fosss/sw-register.js","e26b4368efcb8d2d3b01950cccf6f6d0"],["/fosss/tags/Edge/index.html","a871c7167dfd3f0bfe71ee708cf54b38"],["/fosss/tags/chatgpt/index.html","d2d6a8f2414c1a5269149d5417afc64b"],["/fosss/tags/hexo/index.html","3bfa9ca02e158a5ad47d634018aa16e3"],["/fosss/tags/idea/index.html","3cce8d5227925943c5a6168c52d117bf"],["/fosss/tags/index.html","0f5ed95ad0fb5ce79e6a4917f6e4c4d7"],["/fosss/tags/leetcode/index.html","1bb3a924c2fc953d0d901f4b1c90b88e"],["/fosss/tags/markdown/index.html","0e6b702dc22e3e4e343be28aaad65327"],["/fosss/tags/redis/index.html","98cae36894f7d5e52dc34a4f5ee9a6b1"],["/fosss/tags/安利/index.html","aa0e5a4cee20471f19a9f2fbf3dce099"],["/fosss/tags/完全二叉树/index.html","ae6f1d940210bbbcc84b706526d9d8d7"],["/fosss/tags/插件/index.html","e2a4200a3a72a9515c754be12a286bab"],["/fosss/tags/教程/index.html","5870998dd4f12623da75049dbc687a1e"],["/fosss/tags/数据结构/index.html","779c2478f8996396c9cc810e8d191748"],["/fosss/tags/瞎说说/index.html","2e4b4fe294ec64ffc30f5195d770c9b6"],["/fosss/tags/笔记/index.html","77259e0afad8380eeb6ce90b3ae3a872"],["/fosss/tags/缓存三大问题/index.html","298592e661fef020aba3f3e835dbf0f5"],["/fosss/tags/美化/index.html","425de4145299ea44e73f5dc2174741f1"],["/fosss/tags/递归/index.html","db3efd5757682ffe68225f3f158daafe"]];
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
