import logo from './images/logo.svg';
import styles from  './App.module.css';
import React, { Component } from "react";
// import styles from './real.module.css'

// import hash from "./hash";
export const authEndpoint = 'https://accounts.spotify.com/authorize?';
export const signUp = 'https://www.spotify.com/signup/'
// Replace with your app's client ID, redirect URI and desired scopes

const spotifyLogo = 'https://logos-world.net/wp-content/uploads/2020/09/Spotify-Symbol.png'
const clientId = "4604d772bd3e4fe69399830809371aa4";
const redirectUri ="http://localhost:3000/home"
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

console.log(hash)

class App extends Component {
  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
  }
render() {
  return (
    <div className={styles.App}>
      <header className={styles.AppName}>SpotiTRY</header>
      <header className={styles.AppHeader}>
      <img src={spotifyLogo} className={styles.AppLogo} alt="Spotify Logo" />
      {!this?.state?.token && (
        <a
          className={styles.AppLink}
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}
        >
          Login
        </a>
        
      )}
      {!this?.state?.token && (
        <a
          className={styles.AppLink}
          href={`${signUp}redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Sign Up
        </a>
      )}
      </header>
    </div>
  );
  }
}

export default App;


// const App= ( => {

// })
