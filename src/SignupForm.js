import React from "react";
import Filed from "./Filed";

const fileds = [
  {
    id: "1",
    filedName: "First Name",
    type: "text"
  },
  {
    id: "2",
    filedName: "Last Name",
    type: "text"
  },
  {
    id: "3",
    filedName: "Email",
    type: "text"
  }
];
class SignupForm extends React.Component {
  state = {
    firstName: null,
    lastName: null
  };

  submit = (e, filedName) => {
    //   app.post(this.state.formValues)
    //     console.log(e.target.value);
    //     console.log(filedName);
  };
  handleValueInput = (e, filedName) => {
    console.log(e.target.value);
    console.log(filedName);

    this.setState({
      [filedName]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted:");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {fileds.map(filed => (
            <Filed
              {...filed}
              key={filed.id}
              handleValueChange={this.handleValueInput}
            />
          ))}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
