import React from "react";
import "./footer.css";
import {
  PlayCircle,
  PlaylistPlay,
  RepeatOutlined,
  SkipNextOutlined,
  SkipPreviousOutlined,
  VolumeDown,
} from "@mui/icons-material";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { ShuffleOutlined } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import { useDataLayerValue } from "../../context/DataLayer";

const Footer = () => {
  const [{ playing }, dispatch] = useDataLayerValue();
  console.log("footer playing", playing);

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://media.istockphoto.com/photos/record-spinning-on-turn-table-picture-id108195157?b=1&k=20&m=108195157&s=170667a&w=0&h=ZI-7yIvOkGJITJSDR-PX4pYeWxqJ0q62ZxcE6adRPog="
          alt=""
          className="footer_albumLogo"
        />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Priyanka</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleOutlined className="footer__green" />
        <SkipPreviousOutlined className="footer__icon" />
        {playing ? (
          <PauseCircleIcon className="footer__icon" fontSize="large" />
        ) : (
          <PlayCircle className="footer__icon" fontSize="large" />
        )}

        <SkipNextOutlined className="footer__icon" />
        <RepeatOutlined className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider
              alia-labelledby="continous-slider"
              // style={{ color: "green" }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
