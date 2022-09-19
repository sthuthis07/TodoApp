import React from "react";

const ExCompo = (props) => {
  return <h1>This is a stateless component example</h1>;
};

class Stateless extends React.Component {
  render() {
    return (
      <div>
        <ExCompo />
      </div>
    );
  }
}

export default Stateless;
