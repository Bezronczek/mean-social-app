angular
.module('social')
.controller('RegisterCtrl', function ($scope, $location,  UserSvc) {
  $scope.register = function(username, password) {
    UserSvc
      .createUser(username, password)
      .then(resp => {
        UserSvc
          .login(username, password)
          .then(val => $scope.$emit('login', val.data))
          .then(() => {
            $scope.username = null;
            $scope.password = null;
            $location.path('/');
          });
      });
  }
});