import { useState } from "react";

import "./App.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Bottomnavbar from "./components/Bottomnavbar";
import Banner from "./components/Banner";
import Itemsscroll from "./components/Itemsscroll";

function App() {
  return (
    <>
      <div className="topper_container">
        <Topbar />
        <hr />
        <Navbar />
        <hr />
        <Bottomnavbar />
        <hr />
        <Banner />
        <Itemsscroll />
      </div>
    </>
  );
}

export default App;
