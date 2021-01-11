import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCbeRZZbeunab48UDM78x9Qc3jc-2eqr4w",
  authDomain: "photographerstore-firebase.firebaseapp.com",
  projectId: "photographerstore-firebase",
  storageBucket: "photographerstore-firebase.appspot.com",
  messagingSenderId: "805122346153",
  appId: "1:805122346153:web:400dfe18ed9f32b37aedb8"
  };

firebase.initializeApp(firebaseConfig);

firebase.database();

export default firebase