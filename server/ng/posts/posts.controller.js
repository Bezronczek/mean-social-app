angular
.module('social')
.controller('PostsCtrl', function($scope, PostsSvc) {

  PostsSvc
    .fetch()
    .success(function(posts) {
      $scope.posts = posts;
    });

  $scope.addPost = () => {
    if($scope.postBody) {
      PostsSvc
        .create({
          username: 'bezronczek',
          body: $scope.postBody
        })
        .success(post => {
          $scope.postBody = null;
        });
    }
  };

  $scope.$on('ws:new_post', function(_, post) {
    $scope.$apply(() => {
      $scope.posts.unshift(post);
    });
  });

});
