import React from "react";

class Greeting extends React.Component {
  render() {
    return <button onClick={this.handleClick}>Greeting</button>;
  }
  handleClick = () => {
    window.alert("Hello,Champion!");
    console.log(this.props.name);
  };
}

export default Greeting;
