import React, { Component } from "react";
import "../css/Hello.css";

class Hello extends Component {
  state = { text: "" };

  componentDidMount() {
    let i = 0;

    const typing = setInterval(() => {
      const typed = this.state.text;
      const finalText = "Web Developer 김한결입니다";

      if (i < finalText.length) {
        this.setState({
          text: typed + finalText[i]
        });
        i++;
      } else {
        clearInterval(typing);
      }
    }, 178);
  }

  render() {
    return (
      <div className="myname" id="mrkyel">
        <h1 className="myname-text">{this.state.text}</h1>
      </div>
    );
  }
}

export default Hello;
