import React from "react";
import { Link } from "react-router-dom";
// @ts-expect-error
import styles from "../styles/components.module.scss";

export function Navbar() {
	return (
		<div className={styles.navbar}>
			<img src="./logo.png" alt="logo" />

			<Link to="/"> HOME </Link>
			<Link to="/teams"> TEAMS </Link>
			<Link to="/outreach"> OUTREACH </Link>
			<Link to="/sponsors"> SPONSORS </Link>
		</div>
	);
}
