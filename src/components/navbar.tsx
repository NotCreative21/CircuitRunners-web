import React from "react";
import { Link } from "react-router-dom";
// @ts-expect-error
import styles from "../styles/components.module.scss";

export function Navbar() {
    return(
        <div className={styles.navbar}>
            <img src="./logo.png" alt="logo" />

            <Link to="/">           Home        </Link>
            <Link to="/about">      About       </Link>
            <Link to="/brand">      Brand       </Link>
            <Link to="/sponsors">   Sponsors    </Link>
        </div>
    );
}
