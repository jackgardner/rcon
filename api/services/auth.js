const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../config/firebaseAccount.json');
const DATABASE_NAME = 'gamestalker-ef285';

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: `https://${DATABASE_NAME}.firebaseio.com`
});

module.exports = {
  loginWithUsernamePassword: (username, password) => {
    return firebaseAdmin.auth().createCustomToken(username);
  }

};
