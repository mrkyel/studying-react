import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Hello from "../pages/Hello";
import Menu from "../components/Menu";
import { About, Posts, Login } from "../pages";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Menu />
          <Route exact path="/" component={Hello} />
          <Switch>
            <Route path="/about/:name" component={About} />
            <Route path="/about" component={About} />
          </Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/posts" component={Login} />
        </div>
      </>
    );
  }
}

export default App;
