import React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import Shope from "./Shope";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />

          <Route path="/Shope" component={Shope} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
