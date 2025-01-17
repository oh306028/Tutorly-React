import { useState } from "react";
import TutorlyLogo from "../assets/images/Tutorly-logo.png";
import styles from "../Styles/Home.module.css";
import registerImg from "../assets/images/registerIcon.png";
import Login from "./Login.jsx";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const [isClickedAboutUs, setisClickedAboutUs] = useState(false);
  const [isClickedLearn, setisClickedLearn] = useState(false);
  const [isClickedTeach, setisClickedTeach] = useState(false);

  const handleTeachClick = () => {
    setisClickedTeach(!isClickedTeach);
  };

  const handleLearnClick = () => {
    setisClickedLearn(!isClickedLearn);
  };

  const handleAboutUsClick = () => {
    setisClickedAboutUs(!isClickedAboutUs);
  };

  const handleContactUsClick = () => {};

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.leftMenuContainer}>
          <img className={styles.logoIcon} src={TutorlyLogo}></img>
          <h1 className={styles.logoText}>TUTORLY</h1>
          <h4 className={styles.logoSubText}>TEACH & LEARN</h4>
        </div>

        <div className={styles.rightMenuContainer}>
          <ul className={styles.menuSection}>
            <li>
              <NavLink className={styles.link} to="/accounts/login">
                LOGIN
              </NavLink>
            </li>
            <hr></hr>
            <li onClick={handleLearnClick}>
              LEARN
              {isClickedLearn && (
                <>
                  <p>
                    Register as a <b>student</b> and start your educational
                    journey! Join our community and search for your dream tutor!
                  </p>
                  <NavLink to="/accounts/register/student">
                    <img className={styles.registerImg} src={registerImg}></img>
                  </NavLink>
                </>
              )}
            </li>
            <hr></hr>
            <li onClick={handleTeachClick}>
              TEACH
              {isClickedTeach && (
                <>
                  <p>
                    Register as a <b>teacher</b> and start posting your
                    educational offers! Join our tutors family and create your
                    own bussiness!
                  </p>
                  <NavLink to="/accounts/register/teacher">
                    <img className={styles.registerImg} src={registerImg}></img>
                  </NavLink>
                </>
              )}
            </li>
            <hr></hr>
            <li onClick={handleAboutUsClick}>
              ABOUT US
              {isClickedAboutUs && (
                <p>
                  <b>Tutorly </b> is a web app connecting students with tutors.
                  Students can search for tutors by subject, location, and
                  availability. Tutors create profiles and post listings
                  detailing their expertise, pricing, and schedules
                </p>
              )}
            </li>
            <hr></hr>
            <li onClick={() => handleContactUsClick}>CONTACT US</li>
          </ul>
        </div>
      </div>
    </>
  );
};
