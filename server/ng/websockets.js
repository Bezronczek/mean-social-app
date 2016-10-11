angular
.module('social')
.run(function($rootScope, $timeout) {

  (function connect() {
    const url = 'ws://localhost:3000';
    const connection = new WebSocket(url);

    connection.onclose = function (e) {
      console.log('WebSocket connection lost. Reconnecting...');
      $timeout(connect, 10*1000);
    };

    connection.onmessage = function ({data}) {
      const {topic, payload} = JSON.parse(data);
      $rootScope.$broadcast(`ws:${topic}`, payload);
    }
  })();

});