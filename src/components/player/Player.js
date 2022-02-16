import React from "react";
import "./player.css";
import Sidebar from "../sidebar/Sidebar";
import Body from "../body/Body";
import Footer from "../footer/Footer";
export default function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}
