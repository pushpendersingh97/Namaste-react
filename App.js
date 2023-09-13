import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Component/header/header";

// React Element
const elem = <span>React Element</span>

const title = (
  <h1 id="heading" className="head" tabIndex="5">
    Namaste React using JSX

    {elem}
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
      <Header />
      {/* <TitleComponent /> */}
      { title }
      <h1>Namaste React Functional Component</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);