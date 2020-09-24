import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyA7yNy98Vpymk2sBYPNpF91Xn2-4BpK-u8",
    authDomain: "clone-4fa82.firebaseapp.com",
    databaseURL: "https://clone-4fa82.firebaseio.com",
    projectId: "clone-4fa82",
    storageBucket: "clone-4fa82.appspot.com",
    messagingSenderId: "138614109929",
    appId: "1:138614109929:web:a13fe88b7e9e03c826e278",
    measurementId: "G-YKVB7JYC1E"
});

const auth = firebase.auth();

export { auth };