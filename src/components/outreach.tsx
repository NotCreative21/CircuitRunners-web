import { useEffect, useState } from "react";
import "../styles/index.scss";
// @ts-expect-error
import styles from "../styles/components.module.scss";
import { Slide } from "react-slideshow-image";

export function Outreach() {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		function handleScroll() {
			setOffset(window.pageYOffset);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	let newOffset = (offset > 100) ? 100 : offset;
	const MentoringImages = [
		{
			url: "./slides/outreachMentoring/1.jpg",
		},
		{
			url: "./slides/outreachMentoring/2.jpg",
		},
		{
			url: "./slides/outreachMentoring/3.jpg",
		},
		{
			url: "./slides/outreachMentoring/4.jpg",
		},
		{
			url: "./slides/outreachMentoring/5.jpg",
		},
	];

	const MentoringSlideshow = () => {
		return (
			<div className="slide-container">
				<Slide>
					{MentoringImages.map((slideImage, index) => (
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
	const FLLImages = [
		{
			url: "./slides/outreachFLL/1.jpg",
		},
		{
			url: "./slides/outreachFLL/2.jpg",
		},
		{
			url: "./slides/outreachFLL/3.jpg",
		},
		{
			url: "./slides/outreachFLL/4.jpg",
		},
		{
			url: "./slides/outreachFLL/5.jpg",
		},
	];

	const FLLSlideshow = () => {
		return (
			<div className="slide-container">
				<Slide>
					{FLLImages.map((slideImage, index) => (
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
							transform: `translateY(${newOffset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos2}>
					<img
						src="./decals/CircuitW2.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${newOffset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos3}>
					<img
						src="./decals/CircuitW3.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${newOffset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos4}>
					<img
						src="./decals/CircuitW4.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${newOffset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos5}>
					<img
						src="./decals/CircuitW5.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${newOffset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos6}>
					<img
						src="./decals/CircuitW2.svg"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${newOffset * 0.7}px)`,
						}}
					/>
				</div>
				<div className={styles.decalPos7}>
					<img
						src="./decals/RunningMan.png"
						alt=""
						className={styles.parallaxDecals}
						style={{
							transform: `translateY(${newOffset * 0.7}px)`,
						}}
					/>
				</div>
			</div>
			<div className={styles.teamCenter}>
				<div className={styles.teamContainer}>
					<div className={styles.teamBox}>
						<div className={styles.slideshow}>
							<MentoringSlideshow />
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
							MENTORING
						</div>
						As an organization that strives to promote STEM
						education throughout our community, it is important that
						we teach those outside of our club so that they are also
						able to succeed. Outreach makes sure that CircuitRunners
						Robotics is doing its part outside of the competition
						field!
						<br />
						<br />
						This year we are mentoring two FIRST robotics teams, a
						FTC team from North Cobb High School and a FLL team from
						Sedalia Park. We also mentor special education students
						at our home school, Wheeler High School.
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
							FLL EVENTS
						</div>
						We host multiple FIRST Lego League competitions for
						local elementary and middle school robotics teams,
						including qualifiers and superregionals. We also host
						FLL workshops to teach teams about game strategy and how
						to go about creating their robot. This allows teams to
						learn about the basics of robotics before going on to
						FTC or FRC in high school, or learn more about STEM in
						general.
						<br />
						<br />
						Our Advocacy team works to advance STEAM education and
						equity proposals with local, state,and national
						legislators. One of the main things we advocate for is
						increased funding for STEM teachers. That way all
						students are able to learn about and reap the benefits
						of a STEM education.
					</div>
					<div className={styles.teamBox}>
						<FLLSlideshow />
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
			<div style={{ paddingBottom: "10vh" }} />
		</div>
	);
}
