import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
export default function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      {/* <ShowSearch
        mouseOut={mouseOut}
        mouseOver={mouseOver}
        iconStyle={iconStyle}
      /> */}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
