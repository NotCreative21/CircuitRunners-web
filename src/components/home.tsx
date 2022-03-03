import React from "react";
import "../styles/index.scss";
// @ts-expect-error
import styles from "../styles/components.module.scss";
import "react-slideshow-image/dist/styles.css";

export function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.slides}>
				<div className={styles.slideshow}>
                    <video muted loop autoPlay>
                        <source src="./cr_hype.mp4" type='video/mp4' style={{width: "400px"}}/>
                    </video>
				</div>
				<div className={styles.center}>
					<div className={styles.slogan}>
						FROM <div className={styles.cyan}>POTENTIAL</div> TO{" "}
						<div className={styles.red}>KINETIC</div>
					</div>
				</div>
				<div className={styles.container}>
					<div className={styles.hidden}>
						WE'RE CIRCUITRUNNERS ROBOTICS AND WE DON'T JUST BUILD
						ROBOTS!
					</div>
				</div>
			</div>

			<div className={styles.text}>
				<div className={styles.homeText}>
					We are CircuitRunners Robotics, a single entity: a
					culmination of individual people’s skills and talents. We
					are here to build a better future. We are here to create a
					stronger foundation. The CircuitRunners name encompases two
					FTC Challenge teams as well as an FRC team. Established in
					2002, our team has built up a legacy of outreach, talent,
					skills, and community.
					<br />
					<br />
					Our highly skilled team of over 100 members is ready to take
					on challenges at any moment. Over the past 2 decades, we've
					actively participated in FIRST Robotics Competition, Vec
					Robotics, BEST Robotics, and Zero Robotics.
					<br />
					<br />
					Whether it’s in person or online, being respectful is a
					priority for us. It’s okay to relax and have fun at
					competitions and on social media, but we must always
					remember to be mindful of those around us and how we are
					portraying ourselves.
					<br />
					<br />
					To learn more about our club see our{" "}
					<a href="./about">about</a> page.
				</div>
			</div>
			<div className="footer">© 2022 CircuitRunners Robotics Inc.</div>
		</div>
	);
}
