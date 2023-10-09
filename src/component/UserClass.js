import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      count: 0,
    };

    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  render() {
    console.log("Render called");
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Dehradun</h3>
        <h4>Contact: pushpender_singh_97</h4>
      </div>
    );
  }
}

export default UserClass;
