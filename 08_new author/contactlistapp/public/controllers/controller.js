var app = angular.module("myApp",[]);
    app.controller("myCtrl", function($scope,$http) {
        $scope.test = console.log(" from controller");

        var refresh = function(){
            $http.get("/contactauthor").success(function(response){
                console.log(" I got the data I requested");
                $scope.contactauthor = response;
                $scope.contact = "";
            });
        };
        refresh();

        $scope.addContact = function(){
            console.log($scope.contact);
            $http.post("/contactauthor", $scope.contact).success(function(response){
                console.log(response);
                refresh();
            });
        };

        $scope.remove = function(id){
            console.log(id);
            $http.delete("/contactauthor/" + id).success(function(response){
                refresh();
            });
        };

        $scope.edit = function(id){
            console.log(id);
            $http.get("/contactauthor/" + id).success(function(response){
                $scope.contact = response;
            })
        };

        $scope.update = function(){
            console.log($scope.contact._id);
            $http.put("/contactauthor/" + $scope.contact._id, $scope.contact).success(function(response){
                refresh();
            })
        };

        $scope.deselect = function(){
            $scope.contact = "";
        }


});