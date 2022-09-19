import React from "react";
import ReactDOM from "react-dom";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: "This is a statefull component",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.mssg}</h1>
        <h2>{this.state.info}</h2>
      </div>
    );
  }
}

class Statefull extends React.Component {
  render() {
    const message = "Hello, we are learning React!";
    return (
      <div>
        <Example mssg={message} />
      </div>
    );
  }
}

export default Statefull;
