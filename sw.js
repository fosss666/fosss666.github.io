/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/04/hello-world/index.html","f639f9784dc5be35bec5ebb46b31a8f5"],["/2023/08/04/感谢贴/index.html","f43729d019cb53d8efd41e86824c4d6f"],["/2023/08/04/水专传奇/index.html","de0df265cbdbd84798e60f60cf8cb270"],["/2023/08/06/完全二叉树的节点个数/image1.png","954563af12b8fd6eb831e2885829751f"],["/2023/08/06/完全二叉树的节点个数/index.html","c6fcdaa8b545bf1fad0a917e578a4337"],["/2023/08/07/Redis常用数据结构/index.html","0895e75a9472b93e273ac75d1d28d1eb"],["/2023/08/07/idea插件分享1/index.html","d4e111fb9de854c1c9e8122a5789b7e8"],["/2023/08/07/idea插件分享2/index.html","654515797cda534c42fbaf9c49fde388"],["/2023/08/07/安利edge浏览器chatgpt插件/index.html","bf0bc3cb3213bffdeb9f625c47b6e199"],["/2023/08/08/缓存穿透、缓存雪崩、缓存击穿三大问题介绍及解决思路/index.html","1e69a0952dec420c19438aa96c703fc5"],["/2023/08/09/markdown语法详解/index.html","35991bf14e1c00de2199aa01b31e4c0e"],["/2023/08/10/合照/index.html","ac96f53be1dcc7deb26c24959acf4f70"],["/2023/08/10/合照/和19毕业生.jpg","9a9531d5e569c85bdbcceb3e608a0a06"],["/2023/08/10/合照/小学.jpg","c421b1fcaebb02eaf9ae286e889aeea4"],["/2023/08/10/合照/高三.jpg","2f69a8ed1c0dcc8dd2e779fa555b029d"],["/2023/08/10/合照/高三宿舍.jpg","8ec1245b0f122cf315d542f597b9c0f7"],["/about/index.html","f0e252ce709f02682035d06cb4e0182d"],["/archives/2023/08/index.html","0cfdeff09b07b1dc17338b8020452f94"],["/archives/2023/08/page/2/index.html","4781a0f2e7d8139db5f17f6f9e4f1725"],["/archives/2023/index.html","f8381c62e4255e12bab916dd2051cf0f"],["/archives/2023/page/2/index.html","d0f1fcdcd3b86c5fe273f473f0c9725c"],["/archives/index.html","69d026dfa719bb68d04a7718a20af40c"],["/archives/page/2/index.html","0547dbca1a1a3a23cbb2a101c16ac301"],["/categories/idea插件/index.html","dd07e6f0205665182367d8d9dfcf2f0a"],["/categories/index.html","00262cfbb1d3e3ad69dc26f29bf57617"],["/categories/leetcode/index.html","ca880273c694178a251f9508b0665298"],["/categories/redis/index.html","7e4795490bc35d2efe7b1c380ebea2e6"],["/categories/安利好物/index.html","5b5b5520518aa7ed54ed08d8acb5ed38"],["/categories/小作文/index.html","1f656c83976c0344543cf9173672b474"],["/categories/我的平凡生活/index.html","33ca8e99bb597fb2fa325d40ff6f6b7f"],["/categories/笔记/index.html","28939b7da22b35c85174765157f29ec4"],["/comments/index.html","e9a596eeaaf7638407e0f70563bfa09c"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/commentsbar.css","a38f98ba8d2f697b4d21ddff33615665"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","bd5ac43522fa7ba58aa09bf06d8d7116"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","da0dd48b86aec2a2e3cf2ae92bfb7ae7"],["/img/avatar.jpg","eaf2af3b9c0aa31e8a4b1d89b56e4c23"],["/img/background.gif","793fb0a3ec8c025d259a3c3c87ae0266"],["/img/background1.jpg","62a9be3270a6f0c37b725b571c605dfc"],["/img/background2.jpg","38b82d72ff1d6d28f70024a76c8aa1e9"],["/img/background3.jpg","dfb4d441a06e34530916416dd8b8f581"],["/img/background4.gif","633c23c4e739688f289a1dcccfd7415d"],["/img/background5.gif","9f38fa66b43c68f2ec7e2e28fdd82991"],["/img/blog.gif","282c8d04ebee4dd6715f4f59f91984f0"],["/img/card_announcement.gif","5b5a8c99cd8185446109a11fb4cde054"],["/img/default_top_img .jpg","afa3701827fc413fc5f81dfaf3891adf"],["/img/default_top_img.gif","32012b23f667a32d95584596d697f111"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/weixin.png","9cfc29e6cbb1bbfddf4834f8d5e7da28"],["/img/网站图标.jpg","16facfdbfba00004d0512c8596568bbd"],["/index.html","a64df769629a316636a4eedb364db64f"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","77936cc16803721c64119787fe790dac"],["/live2dw/assets/moc/tsumiki.2048/texture_00.png","4dc9823d5f8eea307d8fa112f0eb7dff"],["/live2dw/assets/moc/tsumiki.2048/texture_01.png","d40508d025d2f2c699bb22affdf1b136"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","08e3f97418e3119a2346b6f7383192ba"],["/page/2/index.html","59dabffb2a5bb5ed86c0a2eff116f735"],["/photos/MaLong/index.html","abc220dbf5195c59107d9e9b2e7083b4"],["/photos/dogs/index.html","b4bfa5a59191fa033ca1c375118e870d"],["/photos/index.html","24b3f2fd0f8c111d4079116ceeabe2aa"],["/photos/life/about1.gif","324ceb4d595dec863c0161936841791f"],["/photos/life/index.html","5d96fb9ec768d98101d518a3eae1ab06"],["/sw-register.js","7c8e2bea1b02c446392e2be1766494d1"],["/tags/Edge/index.html","2dc885129a691854cf289da155680c82"],["/tags/chatgpt/index.html","a17323d9841b60e380421b24a7477d0e"],["/tags/hexo/index.html","82cacf59ac3a9e93b8af5ca9abfcd61a"],["/tags/idea/index.html","4e085da81dfb82887ea9540885297f08"],["/tags/index.html","0cb2be1e206f87ab920d2ae264bec5a6"],["/tags/leetcode/index.html","878911754a3742c554299bb5fa7ece95"],["/tags/markdown/index.html","89540574fcb6f76418daa4745f642e45"],["/tags/redis/index.html","882ef112b84a5f660d18dd22f31831c4"],["/tags/加密文章/index.html","ed9efd9d82ccfd4579b3de6376ea716f"],["/tags/博主/index.html","424b71e827c4e119b0de074f418259c0"],["/tags/安利/index.html","fa62d431a9d91afb68a52df7ef002d06"],["/tags/完全二叉树/index.html","60b9e909e7533a0b1448b03c84ac0067"],["/tags/插件/index.html","ad45998915fe4c20284117254271122d"],["/tags/教程/index.html","5f1a2cae28fdea5e3121f9f73cfa2d93"],["/tags/数据结构/index.html","d2cef5b30bcbca03296fdcd294f66da2"],["/tags/日常/index.html","f150cadfa43ceac1abb7b9a208a167a8"],["/tags/生活/index.html","49000b466373dcbf6109808501f7e944"],["/tags/瞎说说/index.html","c347dfe14bdcce1ca0616f00694841af"],["/tags/笔记/index.html","ddfb6cff49ff4b6d9cb9386511ae0011"],["/tags/缓存三大问题/index.html","3e5cfde8744804bcd99ddec4d3a4d0a5"],["/tags/美化/index.html","ceb2a28d2e7733f37b96600994621e99"],["/tags/记录/index.html","429b3943d4e2a9606fc2c3437212ee11"],["/tags/递归/index.html","fb0e3272c54c5c7ba2dcac8ce3b840a5"]];
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
