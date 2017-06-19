import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAHM9HDCXKkQtdNixCcCV6qDaFdb9p8eCE",
    authDomain: "internapp-e75cc.firebaseapp.com",
    databaseURL: "https://internapp-e75cc.firebaseio.com",
    projectId: "internapp-e75cc",
    storageBucket: "internapp-e75cc.appspot.com",
    messagingSenderId: "622762550403"
  };
  firebase.initializeApp(config);

var database = firebase.database();

export const getUsers = () => {
  return database.ref('users').once('value').then(function(snapshot) {
    return snapshot.val();
  }).then(function(result) {
    return result;
  }); 
}


