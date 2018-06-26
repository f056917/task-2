angular.module('demoApp')
//封装localStorage
    .factory('locals', [
        "$window",
        function ($window) {
            return {
                //存储单个属性
                set: function (key, value) {
                    $window.localStorage[key] = value;
                },
                //读取单个属性
                get: function (key, defaultValue) {
                    return $window.localStorage[key]||defaultValue;
                }
            }
        }
    ]);














// localStorage.clear();
// sessionStorage.clear();
    //封装sessionStorage,刷新状态还在,退出浏览器不在
    // .factory('session', [
    //     "$window",
    //     function ($window) {
    //         return {
    //             //存储单个属性
    //             set: function (key, value) {
    //                 $window.sessionStorage[key] = value;
    //             },
    //             //读取单个属性
    //             get: function (key, defaultValue) {
    //                 return $window.sessionStorage[key] || defaultValue;
    //             },
    //             //存储JSON格式对象
    //             setObject: function (key, value) {
    //                 $window.sessionStorage[key] = JSON.stringify(value);
    //             },
    //             //读取JSON格式对象
    //             getObject: function (key) {
    //                 return JSON.parse($window.sessionStorage[key] || "{}");//获取字符串并解析成对象
    //             }
    //         }
    //     }
    // ]);