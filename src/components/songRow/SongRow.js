import React from "react";
import "./songRow.css";
import { useDataLayerValue } from "../../context/DataLayer";
import { useState } from "react";

export default function SongRow({ track }) {
  // console.log("track url", track.preview_url);
  const [{}, dispatch] = useDataLayerValue();
  const [isplaying, setIsPlaying] = useState(false);
  // let audio = new Audio(
  //   "https://p.scdn.co/mp3-preview/e4d930304155d1d7b58ca7d76fa3ae7bc6f99ce5?cid=9c9c9dd375384a3885183b9273bbe326"
  // );

  const handlePlayPause = () => {
    setIsPlaying(!isplaying);
  };

  useEffect(() => {
    dispatch({ type: "PLAY_SONG", playing: isplaying });
    console.log(" song row isplaying", isplaying);
  }, [isplaying]);

  // const playPause = () => {
  //   if (isplaying) {
  //     audio.pause();
  //     setIsPlaying(false);
  //     dispatch({ type: "PLAY_SONG", playing: false });
  //   } else {
  //     audio.play();
  //     setIsPlaying(true);
  //     dispatch({ type: "PLAY_SONG", playing: true });
  //   }
  // };

  return (
    <div className="songRow">
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>

        <audio src={track.preview_url} controls onClick={handlePlayPause}>
          PLAY | PAUSE
        </audio>
      </div>
    </div>
  );
}
