angular
.module('social')
.controller('LoginCtrl', ($scope, $location, UserSvc) => {
  $scope.login = (username, password) => {
    UserSvc
      .login(username, password)
      .then(response => {
        $scope.$emit('login', response.data);
        $location.path('/');
      });
  };
});