import React, { useEffect } from "react";
import "./App.css";
import firebase from "./firebase";

function App() {

  useEffect(() => {
    firebase
      .messaging()
      .getToken()
      .then((token) => {
        console.log(Notification.permission);
        if(Notification.permission !== 'granted') return;
        firebase.database().ref('/tokens').push([
          token,          
        ]);
        console.log(`token: ${token}`);})
      .catch(() => console.log("user didn't give permission"));
      
    }, []);


  return (
    <div className="App">
    </div>
  );
}

export default App;
