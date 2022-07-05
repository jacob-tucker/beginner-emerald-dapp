import styles from '../styles/Nav.module.css';
import { useState, useEffect } from 'react';
import * as fcl from "@onflow/fcl";
import "../flow/config.js";

export default function Nav() {
  const [user, setUser] = useState({ loggedIn: false });

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, [])

  function handleAuthentication() {
    if (user.loggedIn) {
      fcl.unauthenticate();
    } else {
      fcl.authenticate();
    }
  }

  return (
    <nav className={styles.nav}>
      <h1>Emerald DApp</h1>
      <button onClick={handleAuthentication}>{user.loggedIn ? user.addr : "Log In"}</button>
    </nav>
  )
}