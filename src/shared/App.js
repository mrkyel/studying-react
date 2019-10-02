import React, { Component } from "react";
import { Route } from "react-router-dom";
import Hello from "../Hello";
import { About, Home } from "../pages";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
        <Hello />
      </>
    );
  }
}

export default App;
