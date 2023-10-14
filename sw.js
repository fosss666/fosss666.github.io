/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/04/hello-world/index.html","f370faf59ad5cc7dfa6e4ec38600552b"],["/2023/08/04/感谢贴/index.html","2c91037365a6a4e623d017313db4bcb3"],["/2023/08/04/水专传奇/index.html","3e5e12645e796fc7e55db49dafd8c1a5"],["/2023/08/06/完全二叉树的节点个数/image1.png","954563af12b8fd6eb831e2885829751f"],["/2023/08/06/完全二叉树的节点个数/index.html","2dd67518892a598cc12f2874347d2599"],["/2023/08/07/Redis常用数据结构/index.html","7fa8cd44204df6bb9fca657a9eec65e2"],["/2023/08/07/idea插件分享1/index.html","1001cc21bc0f350525c92cc77707b697"],["/2023/08/07/idea插件分享2/index.html","d88da996244d36d3ea063942efee1bb6"],["/2023/08/07/安利edge浏览器chatgpt插件/index.html","3290f9e66421fa5d254be165b3756a8f"],["/2023/08/08/缓存穿透、缓存雪崩、缓存击穿三大问题介绍及解决思路/index.html","a78feed41c2fdf9d419b2877c602a9b6"],["/2023/08/09/markdown语法详解/index.html","4ce7f367979a49235c0a202089e46f56"],["/2023/09/11/事务并发异常/index.html","c15142cc6cb7d80455135c08b29dc487"],["/2023/10/11/docker安装、配置、下载软件等/index.html","4050b2aa75bfe475b54df6df07033874"],["/about/index.html","c3e9761270596a60685571876ce11527"],["/archives/2023/08/index.html","2cb37e388db698f9b5187cd5144d4d17"],["/archives/2023/09/index.html","24e5dd5ee57673452ac1f5defaa39b6b"],["/archives/2023/10/index.html","3ba924097e5adcf810fb7eac282c8493"],["/archives/2023/index.html","efec8766a1a38b9a6d54ec40cdaa0e03"],["/archives/2023/page/2/index.html","6f4cd9aeedbb659dcaa18ac174890e4a"],["/archives/index.html","8390b6a33e4c4bbb39edbb7997c40bea"],["/archives/page/2/index.html","82d2a798cfeb5f0044fcfafc16366f12"],["/categories/idea插件/index.html","dd3ecf0de56a875292cdb6b14b71d112"],["/categories/index.html","36950a42e20d947dfa051ca5517c362d"],["/categories/leetcode/index.html","940a3ac6fef4569f9284bc37a5fe7d60"],["/categories/redis/index.html","0c277d608da93859e98fe1654dd36155"],["/categories/安利好物/index.html","d21c79ab4edd4c659bac644998f90e45"],["/categories/小作文/index.html","34f8dc6780a0f898ba38ec50a565ebaf"],["/categories/笔记/index.html","1881759075f00095050610179050d4a3"],["/comments/index.html","feaed8635a0f066572ab39a9fc764672"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/commentsbar.css","a38f98ba8d2f697b4d21ddff33615665"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","85df99594b509118d058b001ca032999"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","da0dd48b86aec2a2e3cf2ae92bfb7ae7"],["/img/avatar.jpg","eaf2af3b9c0aa31e8a4b1d89b56e4c23"],["/img/background.gif","793fb0a3ec8c025d259a3c3c87ae0266"],["/img/background1.jpg","62a9be3270a6f0c37b725b571c605dfc"],["/img/background2.jpg","38b82d72ff1d6d28f70024a76c8aa1e9"],["/img/background3.jpg","dfb4d441a06e34530916416dd8b8f581"],["/img/background4.gif","633c23c4e739688f289a1dcccfd7415d"],["/img/background5.gif","9f38fa66b43c68f2ec7e2e28fdd82991"],["/img/blog.gif","282c8d04ebee4dd6715f4f59f91984f0"],["/img/card_announcement.gif","5b5a8c99cd8185446109a11fb4cde054"],["/img/default_top_img .jpg","afa3701827fc413fc5f81dfaf3891adf"],["/img/default_top_img.gif","32012b23f667a32d95584596d697f111"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/weixin.png","9cfc29e6cbb1bbfddf4834f8d5e7da28"],["/img/网站图标.jpg","16facfdbfba00004d0512c8596568bbd"],["/index.html","7b560090eef5ee86c436050ec68a5a34"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","ac471f0fae2b6f74758c2bcbd6f3c8d4"],["/live2dw/assets/moc/tsumiki.2048/texture_00.png","4dc9823d5f8eea307d8fa112f0eb7dff"],["/live2dw/assets/moc/tsumiki.2048/texture_01.png","d40508d025d2f2c699bb22affdf1b136"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","c1d0c6dd835000993c623c15876c5588"],["/page/2/index.html","bdfcaf14852d279541f48966b0474b34"],["/photos/MaLong/index.html","3a618ac1be2ddfdf8dddbd654e229ce8"],["/photos/dogs/index.html","073ca8ca2e14ac53bfe608f6e9f48021"],["/photos/index.html","a8aa982939c45d58a643d36b91636556"],["/photos/life/about1.gif","324ceb4d595dec863c0161936841791f"],["/photos/life/index.html","ac05e27d9cfb876ff5aab12d9eed9fd3"],["/photos/life/和19毕业生.jpg","9a9531d5e569c85bdbcceb3e608a0a06"],["/photos/life/小学.jpg","c421b1fcaebb02eaf9ae286e889aeea4"],["/photos/life/高三.jpg","2f69a8ed1c0dcc8dd2e779fa555b029d"],["/photos/life/高三宿舍.jpg","8ec1245b0f122cf315d542f597b9c0f7"],["/sw-register.js","cd1e0af8d29cbb7887d333fe7a733195"],["/tags/Edge/index.html","a90f14f2aea228f435310a63fe9267d9"],["/tags/chatgpt/index.html","becd64a0a5ddb795a3735af7b6f76679"],["/tags/docker/index.html","f0dd98e006d65ce60e73ae3e6da045c5"],["/tags/hexo/index.html","dc6b9363997f2d53f979b8ed2ee50cfc"],["/tags/idea/index.html","83bfbcc9baaed8030a383f878266a3c6"],["/tags/index.html","459e55a47e6ea16234b3ff505559333c"],["/tags/leetcode/index.html","d068a2d707733c29daf4eab87038638a"],["/tags/markdown/index.html","a92f2b8756ecbdd11f43ec495d3b5989"],["/tags/redis/index.html","998586d54b00a37f3efeceef8b63e642"],["/tags/事务管理/index.html","86a47bafbd550970c2236200497317e5"],["/tags/安利/index.html","3e984acc32bcff77bffbadf5139489f4"],["/tags/完全二叉树/index.html","5388d6825e14e0d666bbc2dc9482163d"],["/tags/插件/index.html","a1bb6d50dcbe266d0ed3b0ea6cec91e9"],["/tags/教程/index.html","e16a17e2b85b6de264dbe15ce729dccf"],["/tags/数据结构/index.html","847270e6179585074f6039bb9ba33044"],["/tags/瞎说说/index.html","6fc1546ab8bf26b308dc290e3e958c44"],["/tags/笔记/index.html","c9c8cbb92a84633ef4badb3682b8c270"],["/tags/缓存三大问题/index.html","469f31cfd8b9f88ca31fe36314c61de0"],["/tags/美化/index.html","db942a447b4688a5f23cd44df22e5388"],["/tags/递归/index.html","9c444e45df922da2982e63d9bc27d84d"]];
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
