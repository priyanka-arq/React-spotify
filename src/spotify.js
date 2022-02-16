// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
//once user click on Login with spotify, will take user to spotify for login

export const authEndpoint = "https://accounts.spotify.com/authorize";
//1. click LOGIN button
//2. Redirect to SPOTIFY login page
//3. Redirect to home page once logged in

//after login redirect user to redirectUri that is set in spotify under edit setting =>  Redirect URIs
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "9c9c9dd375384a3885183b9273bbe326";
const redirectUri = "http://localhost:3000/";

//give permission to user to do some task by declaring scope
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getAccessTokenFromUrl = () => {
  //   var currentUrl = window.location.href;
  //   var access_token = currentUrl.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];

  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      //following are parts
      //['access_token', 'BQA9wtIYOLk5v8GWPCZJMNPVLP_PpRGEjtGw5OhE81AZP3JmKx…CL5KKDrnp25BiRm4nnyaUoyz0HOKGgXH6gkgGHljfO6eeEB5U']
      // ['token_type', 'Bearer']
      // ['expires_in', '3600']
      console.log("parts", parts);

      initial[parts[0]] = decodeURIComponent(parts[1]);
      //# decodeURIComponent is {access_token: 'BQA9wtIYOLk5v8GWPCZJMNPVLP_PpRGEjtGw5OhE81AZP3JmKx…CL5KKDrnp25BiRm4nnyaUoyz0HOKGgXH6gkgGHljfO6eeEB5U'}
      console.log("initial", initial);
      //initial = {access_token: 'BQA9wtIYOLk5v8GWPCZJMNPVLP_PpRGEjtGw5OhE81AZP3JmKx…CL5KKDrnp25BiRm4nnyaUoyz0HOKGgXH6gkgGHljfO6eeEB5U', token_type: 'Bearer', expires_in: '3600'}
      return initial;
    }, {});
};
//create loginUrl using above credentials
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
