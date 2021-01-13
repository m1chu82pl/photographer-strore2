import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";
// import firebase from "./firebase";

import HomeView from "../HomeView/HomeView";
import NatureView from "../NatureView/NatureView";
import PortraitView from "../PortraitView/PortraitView";
import DocumentaryView from "../DocumentaryView/DocumentaryView";
import ArchitectureView from "../ArchitectureView/ArchitectureView";

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
      <div className={styles.app}>
        <h1>hello photographers</h1>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/nature" component={NatureView} />
          <Route path="/portrait" component={PortraitView} />
          <Route path="/documentary" component={DocumentaryView} />
          <Route path="/architecture" component={ArchitectureView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
