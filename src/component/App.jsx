import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import VideoPlayer from "./VideoPlayer";
import Banner from "./Banner";
import ImageSlider from "./ImageSlider";

export default function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <VideoPlayer />
      <Banner />
      <ImageSlider />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
