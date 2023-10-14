/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/08/04/hello-world/index.html","1665dca436d5d884da6e5e33fa59139c"],["/2023/08/04/感谢贴/index.html","40d6ba40cebc415db217b275505f9780"],["/2023/08/04/水专传奇/index.html","c311cfd49e9b276d65cf4af1bd0b7298"],["/2023/08/06/完全二叉树的节点个数/index.html","c2d78a529735363fcbe4e00aee09dd63"],["/2023/08/07/Redis常用数据结构/index.html","74bb8647b86386089a0ea488e1bed13a"],["/2023/08/07/idea插件分享1/index.html","7d31eaabbd7d249f6075a3c86500ba8f"],["/2023/08/07/idea插件分享2/index.html","0ea1e2444ae18ce51dc8c986be35e959"],["/2023/08/07/安利edge浏览器chatgpt插件/index.html","a7e8cc80c1fe77a091e9ed5c7a1acd89"],["/2023/08/08/缓存穿透、缓存雪崩、缓存击穿三大问题介绍及解决思路/index.html","44a85e42895963c1f678816703f7667f"],["/2023/08/09/markdown语法详解/index.html","27ffc7321cb316f5d27bfec50d9c441a"],["/2023/09/11/事务并发异常/index.html","d1a65cbd3658a07a39a7872ceaa1319c"],["/2023/10/11/docker安装、配置、下载软件等/index.html","35f4280a402a490448056af388e25761"],["/about/index.html","35dc221d4688a6680ceb05d3840efccc"],["/archives/2023/08/index.html","d45e3ff33a059a26f1396a8778a05b16"],["/archives/2023/09/index.html","0724c2a0e9165138ee7ad3d7d79f5651"],["/archives/2023/10/index.html","e763ce9e98517bacdeb595c399374d9d"],["/archives/2023/index.html","e61c077426bf0dd0e6de50b50ac4842c"],["/archives/2023/page/2/index.html","bd2dc44171575f19cb312980999788de"],["/archives/index.html","71c7afffabc6fe8228023747dd150d5e"],["/archives/page/2/index.html","b5219ce9008cbcc48d17f02085a77f55"],["/categories/idea插件/index.html","ea1fdf06bea6f9b685665b8408ee3788"],["/categories/index.html","a4b1e6a6901c6e70d825b320baf7a507"],["/categories/leetcode/index.html","6f8662ae512a4dbe3d65e60652ae1924"],["/categories/redis/index.html","055e2b69a639e01fe9461d07e8accf1a"],["/categories/安利好物/index.html","20c2747bc0e9183469eb669e00a8a59f"],["/categories/小作文/index.html","2fd15d77663f37c41250ea9c459cae0b"],["/categories/笔记/index.html","8028d4700d29fdfe2cdd389789cb24f3"],["/comments/index.html","56d8c70b41540f51c4da68dae1219ea7"],["/css/background.css","4eb534984212916952fe84586d03b089"],["/css/commentsbar.css","a38f98ba8d2f697b4d21ddff33615665"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","85df99594b509118d058b001ca032999"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","da0dd48b86aec2a2e3cf2ae92bfb7ae7"],["/img/avatar.jpg","eaf2af3b9c0aa31e8a4b1d89b56e4c23"],["/img/background.gif","793fb0a3ec8c025d259a3c3c87ae0266"],["/img/background1.jpg","62a9be3270a6f0c37b725b571c605dfc"],["/img/background2.jpg","38b82d72ff1d6d28f70024a76c8aa1e9"],["/img/background3.jpg","dfb4d441a06e34530916416dd8b8f581"],["/img/background4.gif","633c23c4e739688f289a1dcccfd7415d"],["/img/background5.gif","9f38fa66b43c68f2ec7e2e28fdd82991"],["/img/blog.gif","282c8d04ebee4dd6715f4f59f91984f0"],["/img/card_announcement.gif","5b5a8c99cd8185446109a11fb4cde054"],["/img/default_top_img .jpg","afa3701827fc413fc5f81dfaf3891adf"],["/img/default_top_img.gif","32012b23f667a32d95584596d697f111"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/weixin.png","9cfc29e6cbb1bbfddf4834f8d5e7da28"],["/img/网站图标.jpg","16facfdbfba00004d0512c8596568bbd"],["/index.html","6047bbb75e8aba18847b6d6edd70070f"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","76368bfa5ba066afde88c8f485d57219"],["/live2dw/assets/moc/tsumiki.2048/texture_00.png","4dc9823d5f8eea307d8fa112f0eb7dff"],["/live2dw/assets/moc/tsumiki.2048/texture_01.png","d40508d025d2f2c699bb22affdf1b136"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","5aa3a38c9f6dade1d26f0fcca6132871"],["/page/2/index.html","f547df3219887bbddd032cfef26a1bce"],["/photos/MaLong/index.html","21f2bc5f5a73e930bd18e9faff4eb5e5"],["/photos/dogs/index.html","43621f3ca5f05de59789df1bf8d5ce7b"],["/photos/index.html","7f447b5120accbea0d853deff5cd2caa"],["/photos/life/about1.gif","324ceb4d595dec863c0161936841791f"],["/photos/life/index.html","aa26e1af323c0b5558a778d11bcfd917"],["/photos/life/和19毕业生.jpg","9a9531d5e569c85bdbcceb3e608a0a06"],["/photos/life/小学.jpg","c421b1fcaebb02eaf9ae286e889aeea4"],["/photos/life/高三.jpg","2f69a8ed1c0dcc8dd2e779fa555b029d"],["/photos/life/高三宿舍.jpg","8ec1245b0f122cf315d542f597b9c0f7"],["/sw-register.js","0a3c2509dddc9c32d54c2db8ce6458f6"],["/tags/Edge/index.html","fda3db04005078ce04b84f304c123146"],["/tags/chatgpt/index.html","3fafadd25b9d3c6d99c7d808bec4828b"],["/tags/docker/index.html","2356f0f6a3e03598efd125974d06e5fe"],["/tags/hexo/index.html","aa3bc7e5d559dab44817c578c05e13f3"],["/tags/idea/index.html","2bfc0a62e9f6b498b175003997a8ec7d"],["/tags/index.html","822fa50b83307cd71ac126870806daf5"],["/tags/leetcode/index.html","30b859d4c2b6dc4398bf93875eb0dfbf"],["/tags/markdown/index.html","701c25e2db4ddb39b130aa76622d87fd"],["/tags/redis/index.html","084d68ad2373825feba304e752bc3251"],["/tags/事务管理/index.html","45b916288effb44373a61bf4bc229cec"],["/tags/安利/index.html","f35d968764904e8c9192be114166e97d"],["/tags/完全二叉树/index.html","1b7ab1c9fa9a03ba86df5e95729fb0ac"],["/tags/插件/index.html","49a5bca19417c8a250e722141a4441d4"],["/tags/教程/index.html","95dc4b68adbacfb93bef14a65dc78f2d"],["/tags/数据结构/index.html","050e303dbb25590a65d43026007c3ba0"],["/tags/瞎说说/index.html","2c8ec8a081baebb768ea4ce72098c5ba"],["/tags/笔记/index.html","3b6183be25054b8a3cbfffdd1754b561"],["/tags/缓存三大问题/index.html","0e63afbaf7e5076e7d47d8d765c17222"],["/tags/美化/index.html","15ac434a5c6a506f8b4b9c5d52e52b03"],["/tags/递归/index.html","3c84af60ba1c45203d91bddcb581ecd5"]];
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
