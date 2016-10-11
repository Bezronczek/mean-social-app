angular
.module('social')
.service('UserSvc', function($http) {
  let self = this;

  self.getUser = function() {
    return $http.get('/api/users');
  };

  self.login = function(username, password) {
    return $http
      .post('/api/sessions', {
        username, password
      })
      .then(val => {
        self.token = val.data;
        $http.defaults.headers.common['X-Auth'] = val.data;
        return self.getUser();
      });
  };

  self.createUser = function (username, password) {
    return $http
      .post('/api/users', {
        username, password
      })
      .then(resp => {
        return self;
      });
      // .then(resp => {
      //   return self.login(username, password);
      // });
  }
});