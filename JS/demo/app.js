
angular.module('demoApp', [])
    .controller('demoCtrl', function ($scope, locals) {

       $scope.sidedata = [
           {
               'x': '业务管理',
               'y': [
                   '用户管理',
                   '债券管理',
                   '产品管理',
                   '交易管理'
               ]
           },
           {
               'x': '运营管理',
               'y': [
                   '内容管理',
                   '消息管理',
                   '银行管理'
               ]
           },
           {
               'x': '后台管理',
               'y': [
                   '模块管理',
                   '角色管理',
                   '帐号管理',
                   '修改密码'
               ]
           }];

       $scope.atflick = locals.get('atflick');
       $scope.atlight = locals.get('atlight');
       console.log($scope.atflick);
       console.log($scope.atlight);

        $scope.flick=function(x){
            $scope.atflick=x;
            locals.set("atflick", $scope.atflick);
        };
        $scope.clickstate= function(x){
            $scope.atlight=x;
            locals.set("atlight", $scope.atlight);
       }
    });
