import { useEffect, useState } from "react";
// @ts-expect-error
import styles from "../styles/components.module.scss";
import { Slide } from "react-slideshow-image";

export function Teams() {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		function handleScroll() {
			// prevent scrolling from too far, otherwise the CircuitRunners decals
			// will cause the page to scroll forever
			let pageY = window.pageYOffset;
			let outerY = window.outerHeight * 0.4;
			let realOffset = (pageY > outerY) ? outerY : pageY;
			setOffset(realOffset);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const FrcImages = [
		{
			url: "./slides/frc/1.jpg",
		},
		{
			url: "./slides/frc/2.jpg",
		},
		{
			url: "./slides/frc/3.jpg",
		},
		{
			url: "./slides/frc/4.jpg",
		},
		{
			url: "./slides/frc/5.jpg",
		},
		{
			url: "./slides/frc/6.jpg",
		},
		{
			url: "./slides/frc/7.jpg",
		},
		{
			url: "./slides/frc/8.jpg",
		},
	];

	const FrcSlideshow = () => {
		return (
			<div className="slide-container">
				<Slide>
					{FrcImages.map((slideImage, index) => (
						<div className={styles.eachSlide} key={index}>
							<div
								style={{
									backgroundImage: `url(${slideImage.url})`,
								}}
							></div>
						</div>
					))}
				</Slide>
			</div>
		);
	};
	const FtcImages = [
		{
			url: "./slides/ftc/1.jpg",
		},
		{
			url: "./slides/ftc/2.jpg",
		},
		{
			url: "./slides/ftc/3.jpg",
		},
		{
			url: "./slides/ftc/4.jpg",
		},
		{
			url: "./slides/ftc/5.jpg",
		},
		{
			url: "./slides/ftc/6.jpg",
		},
		{
			url: "./slides/ftc/7.jpg",
		},
		{
			url: "./slides/ftc/8.jpg",
		},
	];

	const FtcSlideshow = () => {
		return (
			<div className="slide-container">
				<Slide>
					{FtcImages.map((slideImage, index) => (
						<div className={styles.eachSlide} key={index}>
							<div
								style={{
									backgroundImage: `url(${slideImage.url})`,
								}}
							></div>
						</div>
					))}
				</Slide>
			</div>
		);
	};
	return (
		<div className={styles.main}>
			<div className={styles.decalPos1}>
				<div className={styles.parallaxWrapper}>
					<img
						src="./decals/CircuitW1.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${offset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos2}>
					<img
						src="./decals/CircuitW2.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${offset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos3}>
					<img
						src="./decals/CircuitW3.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${offset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos4}>
					<img
						src="./decals/CircuitW4.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${offset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos5}>
					<img
						src="./decals/CircuitW5.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${offset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos6}>
					<img
						src="./decals/CircuitW2.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${offset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos7}>
					<img
						src="./decals/RunningMan.png"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${offset * 0.7}px)`,
						}}
					/>
				</div>
			</div>
			<div className={styles.teamCenter}>
				<div className={styles.teamContainer}>
					<div className={styles.teamBox}>
						<div className={styles.slideshow}>
							<FrcSlideshow />
						</div>
					</div>
					<div className={styles.teamBox}>
						<div
							className={styles.teamTitle}
							style={{
								textAlign: "right",
								paddingRight: "5%",
							}}
						>
							FRC 1002
						</div>
						The FIRST Robotics Competition is a robotics program that emphasizes
						community action along with engaging students with science and
						technology. FRC Teams create large robots around 30 inches a side to
						accomplish various tasks in a robot game.
						Each year, FRC 1002 participates in numerous events and championships in
						the state and across the world, demonstrating our skill in and out of the eld.
						The Chairman’s Award is awarded to the team that demonstrates that they
						have spread STEAM and robotics within their local community and beyond.
					</div>
				</div>
				<div className={styles.teamContainer}>
					<div className={styles.teamBox}>
						<div
							className={styles.teamTitle}
							style={{
								textAlign: "left",
								paddingLeft: "5%",
							}}
						>
							FTC 1002 & 11347
						</div>
						The FIRST Technology Competition involves a robot no more than 18 inches side,
						working against the clock to score points. Even before the game reveal, we work to teach
						new recruits skills in computer assisted design, Java programming, and
						mechanical engineering. When the game is revealed in October, we hit the ground
						running.
						Then come the competitions, beginning with friendly scrimmage matches with local
						teams and evolving into high stakes showdowns in regionals and then in states. After
						each meet, we take what we have learned from how the robot performed and hone our
						robot just a little more.
					</div>
					<div className={styles.teamBox}>
						<FtcSlideshow />
					</div>
				</div>
								<div className={styles.socialMediaButton}> 
					<div style={{ paddingBottom: "5vh" }} />
					<a
						href="https://twitter.com/circuitrunners"
						rel="noreferrer"
						target="_blank"
					>
						<img src="./logos/twitter.png" alt="" />
					</a>
				</div> 
				<div className={styles.socialMediaButton}>
					<a
						href="https://www.facebook.com/circuitrunners/"
						rel="noreferrer"
						target="_blank"
					>
						<img src="./logos/facebook.png" alt="" />
					</a>
				</div>
				<div className={styles.socialMediaButton}>
					<a
						href="https://www.instagram.com/circuitrunners/?hl=en"
						rel="noreferrer"
						target="_blank"
					>
						<img src="./logos/instagram.png" alt="" />
					</a>
				</div>
			</div>
		</div>
	);
}
