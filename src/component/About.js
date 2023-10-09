import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <span>This is About Us page</span>
        {/* <User name={"Pushpender Singh"} /> */}
        <UserClass name={"Pushpender Singh (class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <span>This is About Us page</span>
//       {/* <User name={"Pushpender Singh"} /> */}
//       <UserClass name={"Pushpender Singh (class)"} />
//     </div>
//   );
// };

export default About;
