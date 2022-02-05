import React from "react";
// @ts-expect-error
import styles from "../styles/components.module.scss";

export function Sponsors() {
    return(<>
        <div className={styles.sponsorsBg}>
            <div className={styles.sponsorsHeader}>
                <h1>SPONSORS</h1>
            </div>
            <div className={styles.dividerParent}> 
                <img src="/scrimmage.jpg" className={styles.photos} alt="testing the bot"/>
                <img src="/work.jpg" className={styles.photos} alt="in the work space"/>
            </div>
            <div className={styles.bodyStrap}>
                <p>
                    Sponsors are an integral part of CircuitRunners Robotics.
                    We cannot compete without their generous support in funding, tools, and volunteering.
                </p>
            </div>
            <div className={styles.sponsors}>
                <div className={styles.sponsor1}>
                    <img src="/FoundationLogo.png" />
                    <span></span>
                    <p>The Wheeler Magnet Foundation has provided a location for our 3 competition teams to work and has been a staple sponsor of CicuitRunners Robotics since our rookie year in 2002.</p>
                </div>
                
                <div className={styles.sponsor2}>
                    <img src="/LOGO4.png" />
                    <span></span>
                    <p>RW Smith had provide our FTC teams with generous funding to register and compete state wide. They have been with us for 2 consecutive years.</p>
                </div>
            </div>

            <div className={styles.bodyStrap2}>
                <p>
                    Want your logo added to this site? Our jerseys? Our robot, even? Become a sponsor below!
                </p>
            </div>

            <div className={styles.sponsorButtons}>

                <a href = "https://drive.google.com/file/d/1QsJbfrd5cM3CQTODKQ2u-yyq71u_p_DH/view?usp=sharing"><button><span>Learn more!</span></button></a>
                <a href = "https://www.paypal.com/fundraiser/charity/2380684"><button><span>Donate!</span></button></a>

            </div>
        </div>
    </>);
}
//<img className={styles.sponsorDivider} src="/scrimmage.jpg" alt="testing the bot"/>
//<img className={styles.sponsorDivider} src="/work.jpg" alt="in the work space"/>
//

/*

        <div className = "divider-parent">
            <img className = "divider" src = "assets/CR_FLL_Scrimmage-261.png">
            <img className = "divider" src = "assets/IMG-4465.jpg">
        </div>

        <div className = "body-strap">
            <p>
                Sponsors are an integral part of CircuitRunners Robotics.
                We cannot compete without their generous support in funding, tools, and volunteering.
            </p>
        </div>

        <div className = "sponsors">
            <div className = "sponsor-1">
                <img src = "assets/Foundation Logo.png">
                <span></span>
                <p>The Wheeler Magnet Foundation has provided a location for our 3 competition teams to work and has been a staple sponsor of CicuitRunners Robotics since our rookie year in 2002.</p>
            </div>
            
            <div className = "sponsor-2">
                <img src = "assets/LOGO 4.png">
                <span></span>
                <p>RW Smith had provide our FTC teams with generous funding to register and compete state wide. They have been with us for 2 consecutive years.</p>
            </div>
        </div>

        <div className = "body-strap-2">
            <p>
                Want your logo added to this site? Our jerseys? Our robot, even? Become a sponsor below!
            </p>
        </div>

        <div className = "buttons">

            <a href = "https://drive.google.com/file/d/1QsJbfrd5cM3CQTODKQ2u-yyq71u_p_DH/view?usp=sharing"><button><span>Learn more!</span></button></a>
            <a href = "https://www.paypal.com/fundraiser/charity/2380684"><button><span>Donate!</span></button></a>

        </div>
*/ 