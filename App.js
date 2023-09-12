import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 id="heading" className="head" tavIndex="5">
    Namaste React using JSX
  </h1>
);

// React Functional Component
const TitleComponent = () => {
  return (
      <h1>Title Component</h1>
  )
}

const HeadingComponent = () => {
  return (
    <div id="container">
      <TitleComponent />
      <h1>Namaste React Functional Component</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);