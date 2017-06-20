import * as firebase from 'firebase'
import cuid from 'cuid';
import _ from 'lodash';

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

var users = database.ref('users').once('value').then(function(snapshot) {
              users = snapshot.val();
            }); 

export const getUsers = () => {
  return database.ref('users').once('value').then(function(snapshot) {
    return snapshot.val();
  }).then(function(result) {
    return result;
  }); 
}

export const setUser = (data) => {
  console.log("setUser : ",data)
  firebase.database().ref('users/'+cuid()).set(data);
}

export const deleteList = (id) => {
  console.log("Delete at : ",id)
  firebase.database().ref('users/'+id).remove();
}

export const updateList = (id,value) => {
  console.log("edit : ",id," : ",value)
  firebase.database().ref('users/'+id).update({name: value});
}