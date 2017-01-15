const authService = require('../services/auth');

const login = (req, res, next) => {
  console.log('login route')
  next({ hello: 'test' });
}

module.exports = (app) => {
  app.post('/login', login);
}
