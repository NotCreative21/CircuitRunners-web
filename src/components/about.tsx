import { useEffect, useState } from "react"
// @ts-expect-error
import styles from "../styles/components.module.scss";

export function About() {
    const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

    return(<>
        <div className={styles.aboutBg}>
            <div className={styles.decalPos1}> 
                <img
                    src="https://drive.google.com/uc?id=15PjYlgVXK2nYHfHV964F2Ofa2oxvXhkH"
                    alt=""
                    className={styles.parallaxDecals}
                    style={{
                        transform: `translateY(${offset * 0.7}px)`,
                    }}
                />
            </div>
            <div className={styles.decalPos2}> 
                <img
                    src="https://drive.google.com/uc?id=1LcPPAson-vxFxizPHgt5tmB1b54w1dZS"
                    alt=""
                    className={styles.parallaxDecals}
                    style={{
                        transform: `translateY(${offset * 1}px)`,
                    }}
                />
            </div>
            <div className={styles.decalPos3}> 
                <img
                    src="https://drive.google.com/uc?id=1gyOS0blvwHvCp3jgT-TYCYe1bzsN43w6"
                    alt=""
                    className={styles.parallaxDecals}
                    style={{
                        transform: `translateY(${offset * 0.5}px)`,
                    }}
                />
            </div>
            <div className={styles.decalPos4}> 
                <img
                    src="https://drive.google.com/uc?id=1MXicPfNIoFyESPbx0iX5339aND4dijzX"
                    alt=""
                    className={styles.parallaxDecals}
                    style={{
                        transform: `translateY(${offset * 0.5}px)`,
                    }}
                />
            </div>
            <div className={styles.decalPos5}> 
                <img
                    src="https://drive.google.com/uc?id=1Coj77Obj6SrrC3m6xnvCdG1U5RQkXj2-"
                    alt=""
                    className={styles.parallaxDecals}
                    style={{
                        transform: `translateY(${offset * 0.5}px)`,
                    }}
                />
            </div>
            <div className={styles.decalPos6}> 
                <img
                    src="https://drive.google.com/uc?id=1LcPPAson-vxFxizPHgt5tmB1b54w1dZS"
                    alt=""
                    className={styles.parallaxDecals}
                    style={{
                        transform: `translateY(${offset * 0.5}px)`,
                    }}
                />
            </div>
            <div className={styles.decalPos7}> 
                <img
                    src="https://drive.google.com/uc?id=1EXvHK1bS-Zt3VZ0D0hDO26ByuMKcRSCN"
                    alt=""
                    className={styles.parallaxDecals}
                    style={{
                        transform: `translateY(${offset * 0.5}px)`,
                    }}
                />
            </div>
            <div className={styles.aboutInfo}>
                <div className={styles.ourTeams}>-Our Teams</div>
                <div className={styles.ourTeams}>-First Tech Challenge</div>
                <div className={styles.ourTeams}>-First Robotics Challenge</div>
                <div className={styles.ourTeams}>-FTC 1002</div>
                <div className={styles.ourTeams}>-FTC 11347</div>
                <div className={styles.ourTeams}>-FRC 1002</div>
            </div>
            <div className={styles.aboutCenter}> 
            <div className={styles.titleOurTeams}
                style={{
                    transform: `translateY(${offset * 4}px)`,
                }}>
                    Our Teams
            </div>
            <div className={styles.titleFTC}
                style={{
                    transform: `translateY(${offset * 3}px)`,
                }}>
                FTC</div>
            <div className={styles.ftcDescription}
            style={{
                transform: `translateY(${offset * 3}px)`,
            }}>
                FTC, which stands for FIRST Tech Challenge, is a competition where teams of up to 15 students compete in an alliance format to score as many points as possible via several objectives.
                FTC is an exciting and rigorous competition that was so loved we created two teams - FTC 1002 and FTC 11347.
            </div>
            <div className={styles.titleFRC}
                style={{
                    transform: `translateY(${offset * 2.4}px)`,
                }}>
                FRC</div>
            <div className={styles.frcDescription}
                style={{
                    transform: `translateY(${offset * 2.4}px)`,
                }}>
                FRC, which stands for FIRST Robotics Competition, is a challenge where teams design, build, and program industrial-sized robots in a limited time frame. Teams and their robots complete various challenges on the field to score as many points as possible, all while opposing teams are simultaneously trying to score more points than them.
                It is an exciting and challenging competition that students love. CircuitRunners Robotics has 1 FRC team, FRC 1002.
            </div>
        </div>
        </div>
    </>);
}