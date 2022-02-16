import Login from "./components/login/Login";
import { useEffect, useState } from "react";
import { getAccessTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player/Player";
import { useDataLayerValue } from "./context/DataLayer";

//create an instant of SpotifyWebApi
const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  // useEffect(() => {
  //   setTracks(playlists.tracks);
  //   playlists?.items?.map((playlist) => {
  //     const urlId = playlist.href.split("/").pop();
  //     console.log("playback", playlist.id);
  //   });
  // }, [playlists]);

  useEffect(() => {
    const hash = getAccessTokenFromUrl();
    window.location.hash = "";
    //to avoid name clash use underscore for the variable refering to
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //provide access token to spotify web api
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
    }
  }, []);
  //37i9dQZEVXcI4eEcifPIU1
  spotify.getPlaylist("37i9dQZEVXcI4eEcifPIU1").then((response) =>
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: response,
    })
  );

  // console.log("user 🦹‍♂️", user);
  // console.log("token 💁", token);
  return <div className="App"> {token ? <Player spotify /> : <Login />}</div>;
}

export default App;
