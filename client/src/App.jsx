import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
import Post from "./components/post/Post";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <>
      <NavBar />
      <Write />
    </>
  );
}

export default App;