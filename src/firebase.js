import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = {
    apiKey: "AIzaSyBWg8tE3-iKf7605Mc6hpI146epHabspe0",
    authDomain: "krishi-sadhan-cc7b9.firebaseapp.com",
    projectId: "krishi-sadhan-cc7b9",
    storageBucket: "krishi-sadhan-cc7b9.appspot.com",
    messagingSenderId: "700193489659",
    appId: "1:700193489659:web:bcced5546f94e201b5a65e"
};

const FirebaseApp = Firebase.initializeApp(app);
const db = FirebaseApp.firestore();

export default db;