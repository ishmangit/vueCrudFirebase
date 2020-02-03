import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyA6GMCEO0Er1Zqel06pS7wUWjLdn1sRS8U",
    authDomain: "vue-crud-b5f9b.firebaseapp.com",
    databaseURL: "https://vue-crud-b5f9b.firebaseio.com",
    projectId: "vue-crud-b5f9b",
    storageBucket: "vue-crud-b5f9b.appspot.com",
    messagingSenderId: "487817669768",
    appId: "1:487817669768:web:9f1a1125c5fcd3d82f033d"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()