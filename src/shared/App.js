import React, { Component } from "react";
import { Route } from "react-router-dom";
import Menu from "../components/Menu";
import { Hello, About, Posts, Login } from "../pages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <Menu />
          <Route exact path="/" component={Hello} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/login" component={Login} />
        </div>
        <div></div>
      </>
    );
  }
}

export default App;
