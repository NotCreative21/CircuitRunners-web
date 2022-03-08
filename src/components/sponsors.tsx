import React from "react";
import { useEffect, useState } from "react";
// @ts-expect-error
import styles from "../styles/components.module.scss";

export function Sponsors() {
	const [_, setOffset] = useState(0);
	useEffect(() => {
		function handleScroll() {
			setOffset(window.pageYOffset);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className={styles.main}>
			<div className={styles.decalPos1}>
				<div className={styles.parallaxWrapper}>
					<img
						src="./decals/CircuitW1.svg"
						alt=""
						className={styles.parallaxDecals}
					/>
				</div>
				<div className={styles.decalPos2}>
					<img
						src="./decals/CircuitW2.svg"
						alt=""
						className={styles.parallaxDecals}
					/>
				</div>
				<div className={styles.decalPos3}>
					<img
						src="./decals/CircuitW3.svg"
						alt=""
						className={styles.parallaxDecals}
					/>
				</div>
				<div className={styles.decalPos4}>
					<img
						src="./decals/CircuitW4.svg"
						alt=""
						className={styles.parallaxDecals}
					/>
				</div>
				<div className={styles.decalPos5}>
					<img
						src="./decals/CircuitW5.svg"
						alt=""
						className={styles.parallaxDecals}
					/>
				</div>
				<div className={styles.decalPos7}>
					<img
						src="./decals/RunningMan.png"
						alt=""
						className={styles.parallaxDecals}
					/>
				</div>
			</div>
			<div className={styles.dividerParent}>
				<img src="./scrimmage.jpg" className={styles.photos} alt="" />
				<img src="./work.jpg" className={styles.photos} alt="" />
			</div>
			<div className={styles.bodyStrap}>
				<p>
					Sponsors are an integral part of CircuitRunners Robotics. We
					cannot compete without their generous support in funding,
					tools, and volunteering.
				</p>
			</div>
			<div className={styles.sponsors}>
				<div className={styles.sponsor1}>
					<img src="./logos/FoundationLogo.png" alt="" />
					<span />
					<p>
						The Wheeler Magnet Foundation has provided a location
						for our 3 competition teams to work and has been a
						staple sponsor of CicuitRunners Robotics since our
						rookie year in 2002.
					</p>
				</div>
				<div className={styles.sponsor2}>
					<img src="./logos/LOGO4.png" alt="" />
					<span />
					<p>
						RW Smith had provide our FTC teams with generous funding
						to register and compete state wide. They have been with
						us for 2 consecutive years.
					</p>
				</div>
			</div>
			<div className={styles.bodyStrap}>
				<p>
					Want your logo added to this site? Our jerseys? Our robot,
					even? Become a sponsor below!
				</p>
			</div>

			<div className={styles.sponsorButtons}>
				<a 
					href="https://drive.google.com/file/d/1QsJbfrd5cM3CQTODKQ2u-yyq71u_p_DH/view?usp=sharing"
					rel="noreferrer"
					target="_blank"
				>
					<button>
						<span>Learn more!</span>
					</button>
				</a>
				<a 
					href="https://www.paypal.com/fundraiser/charity/2380684" 
					rel="noreferrer"
					target="_blank"
				>
					<button>
						<span>Donate!</span>
					</button>
				</a>
			</div>
		</div>
	);
}
