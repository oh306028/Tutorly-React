import { useState } from "react";
import TutorlyLogo from "../assets/images/Tutorly-logo.png";
import styles from "../Styles/Home.module.css";
import registerImg from "../assets/images/registerIcon.png";
import Login from "./Login.jsx";

export const Home = () => {
  const [isClickedAboutUs, setisClickedAboutUs] = useState(false);
  const [isClickedLearn, setisClickedLearn] = useState(false);
  const [isClickedTeach, setisClickedTeach] = useState(false);
  const [isClickedLogin, setIsClickedLogin] = useState(false);

  const handleLoginClick = () => {
    setIsClickedLogin(!isClickedLogin);
  };

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
          {(!isClickedLogin && (
            <>
              <Login /> <button onClick={handleLoginClick}>Back</button>
            </>
          )) || (
            <>
              <ul className={styles.menuSection}>
                <li onClick={handleLoginClick}>LOGIN</li>
                <hr></hr>
                <li onClick={handleLearnClick}>
                  LEARN
                  {isClickedLearn && (
                    <>
                      <p>
                        Register as a <b>student</b> and start your educational
                        journey! Join our community and search for your dream
                        tutor!
                      </p>
                      <a href="google.com">
                        <img
                          className={styles.registerImg}
                          src={registerImg}
                        ></img>
                      </a>
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
                        educational offers! Join our tutors family and create
                        your own bussiness!
                      </p>
                      <a href="google.com">
                        <img
                          className={styles.registerImg}
                          src={registerImg}
                        ></img>
                      </a>
                    </>
                  )}
                </li>
                <hr></hr>
                <li onClick={handleAboutUsClick}>
                  ABOUT US
                  {isClickedAboutUs && (
                    <p>
                      <b>Tutorly </b> is a web app connecting students with
                      tutors. Students can search for tutors by subject,
                      location, and availability. Tutors create profiles and
                      post listings detailing their expertise, pricing, and
                      schedules
                    </p>
                  )}
                </li>
                <hr></hr>
                <li onClick={() => handleContactUsClick}>CONTACT US</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};
