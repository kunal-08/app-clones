import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD7gKKUd2FvuJj5sNg6rytS04rc2E8HzQg",
    authDomain: "whatsapp-36bda.firebaseapp.com",
    databaseURL: "https://whatsapp-36bda.firebaseio.com",
    projectId: "whatsapp-36bda",
    storageBucket: "whatsapp-36bda.appspot.com",
    messagingSenderId: "216089014466",
    appId: "1:216089014466:web:40764fa8af95fa77b48b5b",
    measurementId: "G-6SR9CQC349"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export {db};