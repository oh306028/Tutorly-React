import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Login.module.css";

const Login = () => {
  const [error, setError] = useState({
    login: "",
    password: "",
    notFound: "",
  });

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginData = {
    email: login,
    password: password,
  };

  const validateInputs = () => {
    const newError = { login: "", password: "" };
    let isValid = true;

    if (login === "") {
      newError.login = "Email cannot be empty";
      isValid = false;
    }

    if (password === "") {
      newError.password = "Password cannot be empty";
      isValid = false;
    }
    setError(newError);
    return isValid;
  };

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginButton = async (e) => {
    e.preventDefault();
    const result = validateInputs();

    if (result) {
      try {
        const response = await fetch(
          "https://localhost:7038/api/accounts/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          }
        );
        if (response.status === 404) {
          setError({ notFound: "Invalid email or password" });
        } else {
          const token = await response.text();
          console.log(token);
        }
      } catch (exception) {}
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h1 className={styles.logoText}>Tutorly.com</h1>
          <div>
            <section>
              Tutorly is a platform designed to seamlessly connect students with
              teachers. The service allows teachers to create posts advertising
              their classes or tutoring sessions, which students can easily
              browse and sign up for based on their specific needs and
              preferences.
            </section>

            <section>
              For students, Tutorly.com simplifies the search for the perfect
              teacher by offering a wide selection of educators, each with
              detailed posts describing their expertise, teaching style, and
              availability. Whether you're looking for help with a specific
              subject, skill, or exam preparation, you can quickly find and join
              sessions tailored to your goals.
            </section>

            <section>
              For teachers, Tutorly.com provides an efficient way to reach their
              target audience. By creating engaging posts, teachers can attract
              students who align with their expertise, ensuring that their
              classes fill up quickly and meet their objectives.
            </section>

            <section>
              Tutorly.com is the ideal solution for creating meaningful,
              productive connections between students and teachers, helping
              everyone achieve their educational goals with ease.
            </section>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.form}>
            <div>
              <input placeholder="Email..." onChange={handleLoginChange} />
            </div>
            {error.login && <span className={styles.error}>{error.login}</span>}
            <div>
              <input
                type="password"
                placeholder="Password..."
                onChange={handlePasswordChange}
              />
            </div>
            {error.password && (
              <span className={styles.error}>{error.password}</span>
            )}
            {error.notFound && (
              <span className={styles.error}>{error.notFound}</span>
            )}
            <button onClick={handleLoginButton}>Login</button>
            <NavLink to="/">Back</NavLink>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        ©Tutorly.com - Connecting students with the perfect teachers.
      </div>
    </>
  );
};

export default Login;
