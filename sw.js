/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/fosss/2023/08/04/hello-world/index.html","d04c22be8745bbf3b918a7894e009b7d"],["/fosss/2023/08/04/感谢贴/index.html","4ed1e3782bdce2a9e455f5d97aad2973"],["/fosss/2023/08/04/水专传奇/index.html","c64e2fca6e511c6597dd8c55e08a81bb"],["/fosss/2023/08/06/完全二叉树的节点个数/image1.png","954563af12b8fd6eb831e2885829751f"],["/fosss/2023/08/06/完全二叉树的节点个数/index.html","7eec4212455f6daa898a3240c4020f44"],["/fosss/2023/08/07/Redis常用数据结构/index.html","7c8058f1d45dbaab96d47d0b2c98c18f"],["/fosss/2023/08/07/idea插件分享1/index.html","205c3e1ff6dc035169340b8b2f22f338"],["/fosss/2023/08/07/idea插件分享2/index.html","435c6aee8105a014dcae6c5dc2e23d00"],["/fosss/2023/08/07/安利edge浏览器chatgpt插件/index.html","3984e92b8c7ed375ebf9caf23ff24671"],["/fosss/2023/08/08/缓存穿透、缓存雪崩、缓存击穿三大问题介绍及解决思路/index.html","0c2687606d0573c51e555342e97380c4"],["/fosss/2023/08/09/markdown语法详解/index.html","0611e757352fd3465eca09347de3de01"],["/fosss/about/index.html","cef13938a970410bd0e3d072098607ae"],["/fosss/archives/2023/08/index.html","50df9e4c0c21621ab0b7a0b5caad0513"],["/fosss/archives/2023/index.html","42858d30372d991b3e1967140f58db8c"],["/fosss/archives/index.html","de6df830efda4296457d368f6ee99ec6"],["/fosss/categories/idea插件/index.html","6f3fbf264a7f7709a834ff8632e18bcd"],["/fosss/categories/index.html","318aa24f2fbc3c357ca53bf724cb66c7"],["/fosss/categories/leetcode/index.html","027a246cb02ce7e585528882fd25e779"],["/fosss/categories/redis/index.html","eb1f9a75e75f4f4432e7a26b11a3cf78"],["/fosss/categories/安利好物/index.html","c739a28ee241db972a1b116e2caac986"],["/fosss/categories/小作文/index.html","2188c2f3e043ab15b7fe15da6dc4f19d"],["/fosss/categories/笔记/index.html","5b0eb5e419d9a03acba0468fa1292281"],["/fosss/comments/index.html","d567eb12bd3ab39e8e70a4393d7c30df"],["/fosss/css/background.css","4eb534984212916952fe84586d03b089"],["/fosss/css/commentsbar.css","a38f98ba8d2f697b4d21ddff33615665"],["/fosss/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/fosss/css/index.css","85df99594b509118d058b001ca032999"],["/fosss/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fosss/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/fosss/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/fosss/img/alipay.jpg","da0dd48b86aec2a2e3cf2ae92bfb7ae7"],["/fosss/img/avatar.jpg","eaf2af3b9c0aa31e8a4b1d89b56e4c23"],["/fosss/img/background.gif","793fb0a3ec8c025d259a3c3c87ae0266"],["/fosss/img/background1.jpg","62a9be3270a6f0c37b725b571c605dfc"],["/fosss/img/background2.jpg","38b82d72ff1d6d28f70024a76c8aa1e9"],["/fosss/img/background3.jpg","dfb4d441a06e34530916416dd8b8f581"],["/fosss/img/background4.gif","633c23c4e739688f289a1dcccfd7415d"],["/fosss/img/background5.gif","9f38fa66b43c68f2ec7e2e28fdd82991"],["/fosss/img/blog.gif","282c8d04ebee4dd6715f4f59f91984f0"],["/fosss/img/card_announcement.gif","5b5a8c99cd8185446109a11fb4cde054"],["/fosss/img/default_top_img .jpg","afa3701827fc413fc5f81dfaf3891adf"],["/fosss/img/default_top_img.gif","32012b23f667a32d95584596d697f111"],["/fosss/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/fosss/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/fosss/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/fosss/img/weixin.png","9cfc29e6cbb1bbfddf4834f8d5e7da28"],["/fosss/img/网站图标.jpg","16facfdbfba00004d0512c8596568bbd"],["/fosss/index.html","30bdf5f47bdf44b6f6c1ce57720554f1"],["/fosss/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/fosss/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/fosss/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/fosss/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/fosss/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/fosss/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/fosss/link/index.html","d3d9530e692ce7720c396109008b0933"],["/fosss/live2dw/assets/moc/tsumiki.2048/texture_00.png","4dc9823d5f8eea307d8fa112f0eb7dff"],["/fosss/live2dw/assets/moc/tsumiki.2048/texture_01.png","d40508d025d2f2c699bb22affdf1b136"],["/fosss/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/fosss/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/fosss/music/index.html","6918e807994b9f95e5aa8de13dde96b5"],["/fosss/photos/MaLong/index.html","180f8cbd4a807fd85e9224beb9e4c39d"],["/fosss/photos/dogs/index.html","d015b7f38abeb1c4a25faf90a258899f"],["/fosss/photos/index.html","948dac77e049e4ce5e546706e2057f8c"],["/fosss/photos/life/about1.gif","324ceb4d595dec863c0161936841791f"],["/fosss/photos/life/index.html","e0416185a9976803fe0f6310851f6c7c"],["/fosss/photos/life/和19毕业生.jpg","9a9531d5e569c85bdbcceb3e608a0a06"],["/fosss/photos/life/小学.jpg","c421b1fcaebb02eaf9ae286e889aeea4"],["/fosss/photos/life/高三.jpg","2f69a8ed1c0dcc8dd2e779fa555b029d"],["/fosss/photos/life/高三宿舍.jpg","8ec1245b0f122cf315d542f597b9c0f7"],["/fosss/sw-register.js","dfef853f37d93986f37e7f4e5d283022"],["/fosss/tags/Edge/index.html","caad48838a42520032982752d802067e"],["/fosss/tags/chatgpt/index.html","b23a9420a9b14dbb54b47bcb3a929bdd"],["/fosss/tags/hexo/index.html","d3ca492acc3f74912b02cf82b2d922d9"],["/fosss/tags/idea/index.html","15f61f42f9c5aa7643f1522394d48619"],["/fosss/tags/index.html","4ab227860ab9f74597bfad4448b9ec7b"],["/fosss/tags/leetcode/index.html","d3c7018d0fcc419015171ac76c237560"],["/fosss/tags/markdown/index.html","b51a52a82141f3e0f2462f43cc636d96"],["/fosss/tags/redis/index.html","9253c46f66439b78da966ee4ca94b74c"],["/fosss/tags/安利/index.html","f4b898ca45b86df81019909b179e996a"],["/fosss/tags/完全二叉树/index.html","e3636693f07fad1e42e54a5fd0a01fac"],["/fosss/tags/插件/index.html","efb2608ac740112f777efa87358bfbeb"],["/fosss/tags/教程/index.html","1342eca0f37b470ce3aa0d8599704900"],["/fosss/tags/数据结构/index.html","377b7f1426c11bff6d50778e6713ddbe"],["/fosss/tags/瞎说说/index.html","6ae9aff4a115660666a1c3c1216a6a68"],["/fosss/tags/笔记/index.html","2672f32d5b206a3409bb9d0df7d4ea34"],["/fosss/tags/缓存三大问题/index.html","fceae649deb2c2e61b54c2e32676b5d3"],["/fosss/tags/美化/index.html","ff22327b224056714484912fcbbe0d19"],["/fosss/tags/递归/index.html","2d862b9fc25db20bf192fb39a42d973f"]];
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
