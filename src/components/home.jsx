import React from "react";
import "../index.css";
import styles from "../styles/home.module.scss";

export function Home() {
    return (
        <div className={styles.main}>
            <center>
                <div className={styles.slides}>
                    <div className={styles.slogan}>
                        FROM <div className={styles.cyan}>POTENTIAL</div> TO <div className={styles.red}>KINETIC</div>
                    </div>
                    <div className={styles.hidden}>
                        WE'RE CIRCUITRUNNERS ROBOTICS AND WE DON'T JUST BUILD ROBOTS!
                    </div>
                </div>
                <div className={styles.p}>
                    home
                    dfsg
                    dfgh
                    dfgh
                    dfgh
                    dfgh
                </div>
                <div className={styles.footer}>
                    © 2021 CircuitRunners Robotics Inc.
                </div>
            </center>
        </div>
    );
}
