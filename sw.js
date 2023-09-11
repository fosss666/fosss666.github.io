/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/fosss/2023/08/04/hello-world/index.html","e7f92c757631decca6e19a5880dc6eec"],["/fosss/2023/08/04/感谢贴/index.html","7efc2a8e46b9891db87e33d2dbc481af"],["/fosss/2023/08/04/水专传奇/index.html","955a2cfdc5b6c289762899c4d65ba404"],["/fosss/2023/08/06/完全二叉树的节点个数/image1.png","954563af12b8fd6eb831e2885829751f"],["/fosss/2023/08/06/完全二叉树的节点个数/index.html","61934b76876241a426a7c0d57fd47bdd"],["/fosss/2023/08/07/Redis常用数据结构/index.html","7d19058782ef49eeab6e70f9ba5cc660"],["/fosss/2023/08/07/idea插件分享1/index.html","38cd8e7550fb812f129155571b9d6ae8"],["/fosss/2023/08/07/idea插件分享2/index.html","b29cc76e5ab84eb900aee303d097a49a"],["/fosss/2023/08/07/安利edge浏览器chatgpt插件/index.html","94c4a56213fb33182ac066c70cc35806"],["/fosss/2023/08/08/缓存穿透、缓存雪崩、缓存击穿三大问题介绍及解决思路/index.html","157c572272979cb164916d50423e0be4"],["/fosss/2023/08/09/markdown语法详解/index.html","c6381772e69f640b4eea84ef025641ff"],["/fosss/2023/09/11/事务并发异常/index.html","72c31b9cd913ae56b373abf9c448f6ad"],["/fosss/about/index.html","06e702568068724a97b78bdb92d47b2b"],["/fosss/archives/2023/08/index.html","a633072596158100d6c370d6af32c95c"],["/fosss/archives/2023/09/index.html","eba3b96f28b3c7b869cffcd7ae05fc62"],["/fosss/archives/2023/index.html","98d331cd3af4f5d30142874f49b210e2"],["/fosss/archives/2023/page/2/index.html","a1dd0c1ed4e53d8156a25f00bbff41dc"],["/fosss/archives/index.html","d5d5a92e8cc50e6901623ea148b9aeef"],["/fosss/archives/page/2/index.html","5b92229973a845d1ec268e2689dd8327"],["/fosss/categories/idea插件/index.html","c54af77bcd6e7be98e51ff76e06fd9ad"],["/fosss/categories/index.html","c36b8c8ccef372a7b3e8755040289606"],["/fosss/categories/leetcode/index.html","e4382a2c29836703fc94bb77cb77cb83"],["/fosss/categories/redis/index.html","24c71bf1dfde69bccaf48198e9b9f9b9"],["/fosss/categories/安利好物/index.html","d0474bb622dc6b2fda4d04d793afbd59"],["/fosss/categories/小作文/index.html","dcaea9cd5d9e642cbb40b3fe622a0fc9"],["/fosss/categories/笔记/index.html","9a9581be7473209af836dac0cb6cd1b4"],["/fosss/comments/index.html","d342afb960fcc8eef6a1900bdff6c8a9"],["/fosss/css/background.css","4eb534984212916952fe84586d03b089"],["/fosss/css/commentsbar.css","a38f98ba8d2f697b4d21ddff33615665"],["/fosss/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/fosss/css/index.css","85df99594b509118d058b001ca032999"],["/fosss/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fosss/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/fosss/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/fosss/img/alipay.jpg","da0dd48b86aec2a2e3cf2ae92bfb7ae7"],["/fosss/img/avatar.jpg","eaf2af3b9c0aa31e8a4b1d89b56e4c23"],["/fosss/img/background.gif","793fb0a3ec8c025d259a3c3c87ae0266"],["/fosss/img/background1.jpg","62a9be3270a6f0c37b725b571c605dfc"],["/fosss/img/background2.jpg","38b82d72ff1d6d28f70024a76c8aa1e9"],["/fosss/img/background3.jpg","dfb4d441a06e34530916416dd8b8f581"],["/fosss/img/background4.gif","633c23c4e739688f289a1dcccfd7415d"],["/fosss/img/background5.gif","9f38fa66b43c68f2ec7e2e28fdd82991"],["/fosss/img/blog.gif","282c8d04ebee4dd6715f4f59f91984f0"],["/fosss/img/card_announcement.gif","5b5a8c99cd8185446109a11fb4cde054"],["/fosss/img/default_top_img .jpg","afa3701827fc413fc5f81dfaf3891adf"],["/fosss/img/default_top_img.gif","32012b23f667a32d95584596d697f111"],["/fosss/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/fosss/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/fosss/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/fosss/img/weixin.png","9cfc29e6cbb1bbfddf4834f8d5e7da28"],["/fosss/img/网站图标.jpg","16facfdbfba00004d0512c8596568bbd"],["/fosss/index.html","9eb10389cd5612294aeb984acc1c10f0"],["/fosss/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/fosss/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/fosss/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/fosss/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/fosss/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/fosss/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/fosss/link/index.html","fe9f7540c4d3a1c1a94145e66c115b9c"],["/fosss/live2dw/assets/moc/tsumiki.2048/texture_00.png","4dc9823d5f8eea307d8fa112f0eb7dff"],["/fosss/live2dw/assets/moc/tsumiki.2048/texture_01.png","d40508d025d2f2c699bb22affdf1b136"],["/fosss/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/fosss/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/fosss/music/index.html","e130c7fb1e7da268cedcaa25c0da3148"],["/fosss/page/2/index.html","1d9272e016c3b2ff903dc5d05f85be47"],["/fosss/photos/MaLong/index.html","717fd4d91e6870a6b060dd7a7f1811cf"],["/fosss/photos/dogs/index.html","2b72d9639113a4b9fb159b7cf68cbe9e"],["/fosss/photos/index.html","dd25c0bd38b78e536d0a4711030e321a"],["/fosss/photos/life/about1.gif","324ceb4d595dec863c0161936841791f"],["/fosss/photos/life/index.html","9c4d1e96c6f39cc444096d766e42c08c"],["/fosss/photos/life/和19毕业生.jpg","9a9531d5e569c85bdbcceb3e608a0a06"],["/fosss/photos/life/小学.jpg","c421b1fcaebb02eaf9ae286e889aeea4"],["/fosss/photos/life/高三.jpg","2f69a8ed1c0dcc8dd2e779fa555b029d"],["/fosss/photos/life/高三宿舍.jpg","8ec1245b0f122cf315d542f597b9c0f7"],["/fosss/sw-register.js","05779446ef55bed58d4248777aea4e55"],["/fosss/tags/Edge/index.html","9f30bd833292d229895dfc8df6b7ebdc"],["/fosss/tags/chatgpt/index.html","d5849d039757626adf573a10c3a16df3"],["/fosss/tags/hexo/index.html","c4de184e1963c3a13ccf59711066034f"],["/fosss/tags/idea/index.html","d909826c935fe79e8ecfe63b751aa0bd"],["/fosss/tags/index.html","abae03fd1fe51362b9dfa4ee4a936f06"],["/fosss/tags/leetcode/index.html","e0891bf8a745578af92f5bbafd6e99fb"],["/fosss/tags/markdown/index.html","919f1de01730c99b5b29585f9daaae64"],["/fosss/tags/redis/index.html","7a9e552ad24cf48ca5cde492def20915"],["/fosss/tags/事务管理/index.html","9bbd4d99d3499b777390c84237a087d3"],["/fosss/tags/安利/index.html","f328e4d5aa012b133c75b54d9a8a18e1"],["/fosss/tags/完全二叉树/index.html","c83867495f0e48bf1554e48ea4630e17"],["/fosss/tags/插件/index.html","79db48d0b90506ad209adb6dee7a6c2b"],["/fosss/tags/教程/index.html","acb876eb614ee19b9343db610475d130"],["/fosss/tags/数据结构/index.html","677a431a5f39129eb0e4d902243cd4ce"],["/fosss/tags/瞎说说/index.html","e31e33f23149f195e7c39b728c212dae"],["/fosss/tags/笔记/index.html","9048c77a1c84519b049ba4557d8ce700"],["/fosss/tags/缓存三大问题/index.html","049c4ffd4897bfe583049b8d3da099a3"],["/fosss/tags/美化/index.html","67c5493015eacae1cd5fa4e4e19f2263"],["/fosss/tags/递归/index.html","14473edfccd6676654032cabd29e9afa"]];
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
