const _ = require('lodash');
const ws = require('ws');
const clients = [];

exports.connect = function (server) {
  const wss = new ws.Server({server});
  wss.on('connection', ws => {
    clients.push(ws);
    exports.broadcast('New client joined');

    ws.on('close', () => {
      _.remove(clients, ws);
    });

  });
};

exports.broadcast = function(topic, data) {
  const json = JSON.stringify({topic, data});
  for(const client of clients) {
    client.send(json);
  }
};