import { useEffect, useState } from "react";
// @ts-expect-error
import styles from "../styles/components.module.scss";
import { Slide } from "react-slideshow-image";

export function Teams() {
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
						FRC, which stands for FIRST Robotics Competition, is a
						challenge where teams design, build, and program
						industrial-sized robots in a limited time frame. Teams
						and their robots complete various challenges on the
						field to score as many points as possible, all while
						opposing teams are simultaneously trying to score more
						points than them. It is an exciting and challenging
						competition that students love. CircuitRunners Robotics
						has 1 FRC team, FRC 1002.
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
						FTC, which stands for FIRST Tech Challenge, is a
						competition where teams of up to 15 students compete in
						an alliance format to score as many points as possible
						via several objectives. FTC is an exciting and rigorous
						competition that was so loved we created two teams.
					</div>
					<div className={styles.teamBox}>
						<FtcSlideshow />
					</div>
				</div>
			</div>
		</div>
	);
}
