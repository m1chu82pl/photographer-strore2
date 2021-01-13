import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom'
// import firebase from "./firebase";

import MainView from '../MainView/MainView';
import NatureView from '../NatureView/NatureView';
import PortraitView from '../PortraitView/PortraitView';
import DocumentaryView from '../DocumentaryView/DocumentaryView';

function App() {

  useEffect(() => {
    // firebase
    //   .messaging()
    //   .getToken()
    //   .then((token) => {
    //     console.log(Notification.permission);
    //     if(Notification.permission !== 'granted') return;
    //     firebase.database().ref('/tokens').push([
    //       token,          
    //     ]);
    //     console.log(`token: ${token}`);})
    //   .catch(() => console.log("user didn't give permission"));
      
    }, []);


  return (
    <BrowserRouter>
    <div className="App">
      <h1>hello photographers</h1>
      <Route exact path="/" component={MainView} />
      <Route path="/nature" component={NatureView} />
      <Route path="/portrait" component={PortraitView} />
      <Route path="/documentary" component={DocumentaryView} />
    </div>
    </BrowserRouter>
  );
}

export default App;
