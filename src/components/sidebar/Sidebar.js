import React from "react";
import SidebarOption from "../sidebarOption/SidebarOption";
import "./sidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HomeIcon from "@mui/icons-material/Home";
import { useDataLayerValue } from "../../context/DataLayer";
import { useEffect } from "react";
export default function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  //console.log("Playlists tracks", playlists[0].href);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}
