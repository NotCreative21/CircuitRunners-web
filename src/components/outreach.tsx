import React from "react";
import "../styles/index.scss";
// @ts-expect-error
import styles from "../styles/components.module.scss";

export function Outreach() {
	return (
		<div className={styles.main}>
			<div className={styles.cr_logo} />
			<div
				className={`${styles.white_text} ${styles.futura_bold} ${styles.title}`}
			>
				OUTREACH
			</div>
			<div
				className={`${styles.white_text} ${styles.futura_bold} ${styles.subheading}`}
			>
				"SPREADING STEM THROUGH THE COMMUNITY"
			</div>
			<figure className={styles.surround_box} />
			<div className={styles.white_text}>
				As an organization that strives to promote STEM education
				throughout our community, it is important that we teach those
				outside of our club so that they are also able to succeed.
				Outreach makes sure that CircuitRunners Robotics is doing its
				part outside of the competition field!
			</div>
			<div
				className={styles.parallax}
				style={{ backgroundImage: `url(./outreach1.jpg)` }}
			>
				<div className={styles.floating_box} />
			</div>
			<div className={styles.white_text}>
				This year we are mentoring two FIRST robotics teams, a FTC team
				from North Cobb High School and a FLL team from Sedalia Park. We
				also mentor special education students at our home school,
				Wheeler High School,
			</div>
			<div
				className={`${styles.parallax} ${styles.outreach_images}`}
				style={{ backgroundImage: `url(./outreach2.jpg)` }}
			/>
			<div className={styles.white_text}>
				We host multiple FIRST Lego League competitions for local
				elementary and middle school robotics teams, including
				qualifiers and superregionals. We also host FLL workshops to
				teach teams about game strategy and how to go about creating
				their robot. This allows teams to learn about the basics of
				robotics before going on to FTC or FRC in high school, or learn
				more about STEM in general.
			</div>
			<div
				className={styles.parallax}
				style={{ backgroundImage: `url(./outreach3.jpg)` }}
			/>
			<div className={styles.white_text}>
				Our Advocacy team works to advance STEAM education and equity
				proposals with local, state,and national legislators. One of the
				main things we advocate for is increased funding for STEM
				teachers. That way all students are able to learn about and reap
				the benefits of a STEM education.
			</div>
			<figure className={styles.outreach_director}>
				<img
					src="./jonah.jpeg"
					alt="Jonah Isaza, our outreach director"
					className={styles.outreach_director_pic}
				/>
				<figcaption
					className={`${styles.outreach_director_caption} ${styles.red_text}`}
				>
					This is Jonah Isaza, our current outreach director
				</figcaption>
			</figure>
			<div className={styles.buttons}>
				<button className={`${styles.button} ${styles.twitter}`}>
					<a
						href="https://twitter.com/circuitrunners"
						rel="noreferrer"
						target="_blank"
					>
						<img src="./twitter.png" alt="" />
					</a>
				</button>
				<button className={`${styles.button} ${styles.facebook}`}>
					<a
						href="https://www.facebook.com/circuitrunners/"
						rel="noreferrer"
						target="_blank"
					>
						<img src="./facebook.png" alt="" />
					</a>
				</button>
				<button className={`${styles.button} ${styles.instagram}`}>
					<a
						href="https://www.instagram.com/circuitrunners/?hl=en"
						rel="noreferrer"
						target="_blank"
					>
						<img src="./instagram.png" alt="" />
					</a>
				</button>
			</div>
		</div>
	);
}
