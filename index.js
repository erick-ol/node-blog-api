const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// require routes
const { user } = require('./routes');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// endpoint projeto
app.use('/user', user);
