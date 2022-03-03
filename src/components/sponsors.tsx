import React from "react";
// @ts-expect-error
import styles from "../styles/components.module.scss";

export function Sponsors() {
	return (
		<div className={styles.main}>
			<div className={styles.sponsorsBg}>
				<div className={styles.dividerParent}>
					<img
						src="./scrimmage.jpg"
						className={styles.photos}
						alt=""
					/>
					<img src="./work.jpg" className={styles.photos} alt="" />
				</div>
				<div className={styles.bodyStrap}>
					<p>
						Sponsors are an integral part of CircuitRunners
						Robotics. We cannot compete without their generous
						support in funding, tools, and volunteering.
					</p>
				</div>
				<div className={styles.sponsors}>
					<div className={styles.sponsor1}>
						<img src="./FoundationLogo.png" alt="" />
						<span></span>
						<p>
							The Wheeler Magnet Foundation has provided a
							location for our 3 competition teams to work and has
							been a staple sponsor of CicuitRunners Robotics
							since our rookie year in 2002.
						</p>
					</div>

					<div className={styles.sponsor2}>
						<img src="./LOGO4.png" alt="" />
						<span></span>
						<p>
							RW Smith had provide our FTC teams with generous
							funding to register and compete state wide. They
							have been with us for 2 consecutive years.
						</p>
					</div>
				</div>

				<div className={styles.bodyStrap2}>
					<p>
						Want your logo added to this site? Our jerseys? Our
						robot, even? Become a sponsor below!
					</p>
				</div>

				<div className={styles.sponsorButtons}>
					<a href="https://drive.google.com/file/d/1QsJbfrd5cM3CQTODKQ2u-yyq71u_p_DH/view?usp=sharing">
						<button>
							<span>Learn more!</span>
						</button>
					</a>
					<a href="https://www.paypal.com/fundraiser/charity/2380684">
						<button>
							<span>Donate!</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
