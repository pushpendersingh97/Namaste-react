import React from "react";
import { GITHUB_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        
      },
    };

    console.log("Constructor called");
  }

  async componentDidMount() {
    console.log("Component Did Mount");
    const data = await fetch(GITHUB_URL + "pushpender98");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update")
  }

  componentWillUnmount() {
    console.log("Component will unmount")
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("Render called");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: pushpender_singh_97</h4>
      </div>
    );
  }
}

export default UserClass;
