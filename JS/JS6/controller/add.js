
angular.module('App')
.controller('addCtrl', function ($scope, $state, FileUploader, $http, $stateParams) {

    $scope.typeData = [
        {name: '首页banner', value: 0},
        {name: '职位banner', value: 1},
        {name: '精英banner', value: 2},
        {name: '行业大图', value: 3}
    ];
    $scope.industryData = [
        {name: '移动互联网', value: 0},
        {name: '电子商务', value: 1},
        {name: '企业服务', value: 2},
        {name: 'O2O', value: 3},
        {name: '教育', value: 4},
        {name: '金融', value: 5},
        {name: '游戏', value: 6}
    ];

    //上传图片
    var uploader = $scope.uploader = new FileUploader();
    uploader.url = '/carrots-admin-ajax/a/u/img/task';

    uploader.onSuccessItem = function(data,fileItem) {
        $scope.imageSrc1 = fileItem.data.url;
        console.log($scope.imageSrc1);
    };

    $scope.id=$stateParams.id;

    $scope.param = {};

    //新增article
    if($scope.id == 1){
        $scope.head = "新增Article";
        //立即上线
        $scope.online = function () {
            $scope.param.title = $scope.title;
            $scope.param.type = $scope.type;
            $scope.param.industry = $scope.industry;
            $scope.param.content = $scope.content;
            $scope.param.url = $scope.url;
            $scope.param.img = $scope.imageSrc1;
            $scope.param.status = 2;
            console.log($scope.param);

            $http({
                method: 'POST',
                url: '/carrots-admin-ajax/a/u/article',
                params: $scope.param
            }).then(function (data) {
                if(data.status === 200){
                    $state.go('list.article');
                }else {
                    alert(data.message);
                }
            })
        };

        //存为草稿
        $scope.draft = function () {
            $scope.param.title = $scope.title;
            $scope.param.type = $scope.type;
            $scope.param.industry = $scope.industry;
            $scope.param.content = $scope.content;
            $scope.param.url = $scope.url;
            $scope.param.img = $scope.imageSrc1;
            $scope.param.status = 1;
            console.log($scope.param);

            $http({
                method: 'POST',
                url: '/carrots-admin-ajax/a/u/article',
                params: $scope.param
            }).then(function (data) {
                if(data.status === 200){
                    $state.go('list.article');
                }else {
                    alert(data.message);
                }
            })
        }

    //编辑article
    }else {
        $scope.head = "编辑Article";
        id = $scope.id;

        $http({
            method: 'GET',
            url: '/carrots-admin-ajax/a/article/'+id
        }).then(function (response) {
            console.log(response);
            if(response.data.code === 0){
                $scope.param = response.data.data.article;
                $scope.title = $scope.param.title;
                $scope.type = $scope.param.type;
                console.log($scope.type);
                $scope.content = $scope.param.content;
                $scope.url = $scope.param.url;
                $scope.imageSrc1 = $scope.param.img;
                $scope.industry = response.data.data.article.industry;
            }
        }, function (response) {
            console.log(response);
        });

        //立即上线
        $scope.online = function () {
            $scope.param.title = $scope.title;
            $scope.param.type = $scope.type;
            $scope.param.industry = $scope.industry;
            $scope.param.content = $scope.content;
            $scope.param.url = $scope.url;
            $scope.param.img = $scope.imageSrc1;
            $scope.param.status = 2;
            $scope.param.createAt = 1;
            console.log($scope.param);

            $http({
                method: 'PUT',
                url: '/carrots-admin-ajax/a/u/article'+id,
                params: $scope.param
            }).then(function (data) {
                if(data.status === 200){
                    $state.go('list.article');
                }else {
                    alert(data.message);
                }
            })
        };

        //存为草稿
        $scope.draft = function () {
            $scope.param.title = $scope.title;
            $scope.param.type = $scope.type;
            $scope.param.industry = $scope.industry;
            $scope.param.content = $scope.content;
            $scope.param.url = $scope.url;
            $scope.param.img = $scope.imageSrc1;
            $scope.param.status = 1;
            console.log($scope.param);

            $http({
                method: 'PUT',
                url: '/carrots-admin-ajax/a/u/article'+id,
                params: $scope.param
            }).then(function (data) {
                if(data.status === 200){
                    $state.go('list.article');
                }else {
                    alert(data.message);
                }
            })
        }
    }

    //取消
    $scope.cancel = function () {
        $state.go('list.article');
    }
});
