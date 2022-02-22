import React from "react";
import "../styles/index.scss";
// @ts-expect-error
import styles from "../styles/components.module.scss";

export function Brand() {
	return(
		<div className={styles.main}>
			<div className={styles.cr_logo} />
			<h1 className="white_text futura_bold title">OUTREACH</h1>
			<h2 className="white_text futura_bold subheading">
				"SPREADING STEM THROUGH THE COMMUNITY"
			</h2>
			<figure className="surround_box" />
			<body>
				<p className="white_text">
					As an organization that strives to promote STEM education throughout our
					community, it is important that we teach those outside of our club so that
					they are also able to succeed. Outreach makes sure that CircuitRunners
					Robotics is doing its part outside of the competition field!
				</p>
				<div className="parallax outreach1">
					<div className="floating_box" />
				</div>
				<p className="white_text">
					This year we are mentoring two FIRST robotics teams, a FTC team from North
					Cobb High School and a FLL team from Sedalia Park. We also mentor special
					education students at our home school, Wheeler High School,
				</p>
				<div className="parallax outreach2" />
				<p className="white_text">
					We host multiple FIRST Lego League competitions for local elementary and
					middle school robotics teams, including qualifiers and superregionals. We
					also host FLL workshops to teach teams about game strategy and how to go
					about creating their robot. This allows teams to learn about the basics of
					robotics before going on to FTC or FRC in high school, or learn more about
					STEM in general.
				</p>
				<div className="parallax outreach3" />
				<p className="white_text">
					Our Advocacy team works to advance STEAM education and equity proposals
					with local, state,and national legislators. One of the main things we
					advocate for is increased funding for STEM teachers. That way all students
					are able to learn about and reap the benefits of a STEM education.
				</p>
			</body>
			<figure className="outreach_director">
				<img
				src="pictures/jonah.jpeg"
				alt="Jonah Isaza, our outreach director"
				className="outreach_director_pic"
				//className="red_text"
				/>
				<figcaption className="outreach_director_caption red_text">
					This is Jonah Isaza, our current outreach director
				</figcaption>
			</figure>
			<div className="glitch_logo">
				<img className="glitch_logo" src="pictures/glitch_logo.png" alt="" />
			</div>
			<div className="buttons">
				<button className="button twitter">
					<a href="https://twitter.com/circuitrunners" rel="noreferrer" target="_blank">
						<img src="pictures/twitter.png" alt="" />
					</a>
			</button>
			<button className="button facebook">
				<a href="https://www.facebook.com/circuitrunners/" rel="noreferrer" target="_blank">
					<img src="pictures/facebook.png" alt=""/>
				</a>
			</button>
			<button className="button instagram">
				<a href="https://www.instagram.com/circuitrunners/?hl=en" rel="noreferrer" target="_blank">
					<img src="pictures/instagram.png" alt="" />
				</a>
			</button>
			<div className="parallax nelitha_teaching" />
			</div>
		</div>
	);
}