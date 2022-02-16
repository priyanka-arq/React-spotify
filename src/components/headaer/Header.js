import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { useDataLayerValue } from "../../context/DataLayer";
import "./header.css";

export default function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input type="text" placeholder="Search for Artists, Songs" />
      </div>
      <div className="header__right">
        <Avatar
          src={user?.images[0]?.url}
          alt={user?.display_name}
          // style={{ width: "10", height: "10", objectFit: "cover" }}
        />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
