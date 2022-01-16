import React from "react";
import "../index.css";
import styles from "../styles/page.module.scss";

export function Home() {
    return (
        <div className={styles.main}>
            <center>
                <div className={styles.slides}>
                    <div className={styles.slogan}>
                        FROM <div className={styles.cyan}>POTENTIAL</div> TO <div className={styles.red}>KINETIC</div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.hidden}>
                            WE'RE CIRCUITRUNNERS ROBOTICS AND WE DON'T JUST BUILD ROBOTS!
                        </div>
                    </div>
                </div>
                <div className={styles.text}>
                    To learn more about our club see our <a href="./about">about</a> page.
                </div>
                <div className="footer">
                    © 2021 CircuitRunners Robotics Inc.
                </div>
            </center>
        </div>
    );
}
