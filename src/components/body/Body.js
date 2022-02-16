import React from "react";
import Header from "../headaer/Header";
import "./body.css";
import { useDataLayerValue } from "../../context/DataLayer";
import {
  Favorite,
  MoreHorizOutlined,
  PlayCircleFilledWhite,
} from "@mui/icons-material";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SongRow from "../songRow/SongRow";

export default function Body({ spotify }) {
  const [{ discover_weekly, playing }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src={
            discover_weekly
              ? discover_weekly?.images[0].url
              : "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGlzY292ZXIlMjBhbGJ1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          }
          alt=" "
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          {playing ? (
            <PauseCircleIcon
              className="body__shuffle"
              style={{ fill: "green" }}
            />
          ) : (
            <PlayCircleFilledWhite
              className="body__shuffle"
              style={{ fill: "green" }}
            />
          )}

          <Favorite fontSize="large" />
          <MoreHorizOutlined />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}
