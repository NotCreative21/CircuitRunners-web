import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components.module.scss";

export function Navbar() {
    return(
        <div className={styles.navbar}>
            <img src="./logo_small.png" alt="logo" />

            <Link to="/">           HOME        </Link>
            <Link to="/about">      ABOUT       </Link>
            <Link to="/brand">      BRAND       </Link>
            <Link to="/support">    SUPPORT     </Link>
        </div>
    );
}
