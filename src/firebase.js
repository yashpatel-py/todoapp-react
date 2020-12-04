// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD5Z3amU469eNLLSS_gxcObOkfKESgKlts",
    authDomain: "todo-app-5be93.firebaseapp.com",
    projectId: "todo-app-5be93",
    storageBucket: "todo-app-5be93.appspot.com",
    messagingSenderId: "974132758087",
    appId: "1:974132758087:web:b0457866cbc9dcbf191362",
    measurementId: "G-QETQBQNLC3"
});

const db = firebaseApp.firestore();

export default db;