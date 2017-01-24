import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAfINhgtzSOFR20cmX6bDJe_E3jF9JN2x8",
  authDomain: "gamestalker-ef285.firebaseapp.com",
  databaseURL: "https://gamestalker-ef285.firebaseio.com",
  storageBucket: "gamestalker-ef285.appspot.com",
  messagingSenderId: "862177034317"
};

export default firebase.initializeApp(firebaseConfig);

