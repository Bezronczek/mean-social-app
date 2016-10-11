const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(require('./auth'));
app.use('/api/posts', require('./controllers/api/posts'));
app.use(require('./controllers/static'));
app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

require('./websockets').connect(server);