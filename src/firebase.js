import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiaWzFdwsJL3VDQ-8I8CWxlo5F3jzUr0E",
  authDomain: "photographer-store.firebaseapp.com",
  projectId: "photographer-store",
  storageBucket: "photographer-store.appspot.com",
  messagingSenderId: "51661735397",
  appId: "1:51661735397:web:30e7b5d14eaf511bd2db0c",
};

firebase.initializeApp(firebaseConfig);

firebase.database();

export default firebase;
