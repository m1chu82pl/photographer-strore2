import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import firebase from "../../firebase";

import HomeView from "../HomeView/HomeView";
import NatureView from "../NatureView/NatureView";
import PortraitView from "../PortraitView/PortraitView";
import DocumentaryView from "../DocumentaryView/DocumentaryView";
import ArchitectureView from "../ArchitectureView/ArchitectureView";

const Wrapper = styled.div`
position: absolute;
  width: 100%;
  background-color: rgb(255, 255, 255);
`;

function App() {
  useEffect(() => {
    firebase
      .messaging()
      .getToken()
      .then((token) => {
        console.log("token: ", token);
        if (Notification.permission !== "granted") return;
        firebase.database().ref("/tokens").push([token]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/nature" component={NatureView} />
          <Route path="/portrait" component={PortraitView} />
          <Route path="/documentary" component={DocumentaryView} />
          <Route path="/architecture" component={ArchitectureView} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
