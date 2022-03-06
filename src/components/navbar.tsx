import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
// @ts-expect-error
import styles from "../styles/components.module.scss";

function find_logo() {
	return (window.innerWidth > 1100) ? "./logos/logo.png" : "./logos/glitch_logo.png";
}

export function Navbar() {
	const [_, setDimensions] = React.useState({ 
		height: window.innerHeight,
		width: window.innerWidth
	});
	// determine which logo to use based on the page width
	let image = find_logo();
	// the proper way to do this is addEventListener('resize'), but that can lead to
	// unnecessary rerendering unless a debounce function is added, but I am not good
	// enough at react to do that so this should be good enough

	// setDiemnsions is called to force react to rerender the page
	setInterval(async () => {
		image = find_logo();
		setDimensions({
			height: window.innerHeight,
			width: window.innerWidth
		})
	}, 500);
	return (
		<div className={styles.navbar}>
			<img src={image} alt="logo" />

			<Link to="/"> HOME </Link>
			<Link to="/teams"> TEAMS </Link>
			<Link to="/outreach"> OUTREACH </Link>
			<Link to="/sponsors"> SPONSORS </Link>
		</div>
	);
}

