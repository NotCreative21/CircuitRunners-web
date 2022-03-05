import React from "react";
import "../styles/index.scss";
// @ts-expect-error
import styles from "../styles/components.module.scss";
import "react-slideshow-image/dist/styles.css";

export function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.slides}>
				<video muted loop autoPlay style={{width: "100%"}}>
					<source src="./cr_hype.mp4" />
				</video>
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
                        <div className={styles.columnTitle}>
                            UPDATES
                        </div>
                        FTC 1002 recently competed in FTC State Championships and won 
                        the INSPIRE Award, an award that proves that they are an exemplary 
                        team that embodies what it means to be a part of FIRST. Because 
                        of this remarkable achievement, FTC 1002 has qualified for World 
                        Championships in Houston from April 20th-23rd. Also, Mr. Berwanger 
                        won the Compass Award for being an amazing teacher sponsor and mentor!
                        Going to Worlds is not cheap, as expenses are upwards of 
                        $20,000. Because of this, we need your help to get there. Please 
                        consider donating to the GoFundMe below to directly help FTC 1002
                        in their pursuit of becoming world champs!
                        <br />
                        <br />
                        To support, please visit our {"  "}
                        <a href="https://www.gofundme.com/f/send-ftc-1002-to-the-world-championships">
                            <img style={{height: "2.2em"}}src="./gofundmelogo.png" alt="logo" />
                        </a>.
                        <div className={styles.columnTitle}>
                            INFO
                        </div>
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
                        To learn more about our club see our{" "}
                        <a href="./teams">teams</a> page.
                        <br />
                </div>
			</div>
			<div className="footer">© 2022 CircuitRunners Robotics Inc.</div>
		</div>
	);
}
