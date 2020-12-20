import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import ShowHtml from "./pages/tests/DispHtml";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inside/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/tests" component={ShowHtml} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
