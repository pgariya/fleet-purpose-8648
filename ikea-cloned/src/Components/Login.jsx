import React, { useState } from "react";
import { initializeConnect } from "react-redux/es/components/connect";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";

const initialValueisHERE = {
  first_name: "",
  email: "",
};

const Login = () => {
  let login_value = JSON.parse(localStorage.getItem("login_data"));
  // console.log("login_value", login_value);

  let Navigate=useNavigate()
  const [arr, setLogin_value] = useState(initialValueisHERE);

  const handleChnage = (e) => {
    const { name, value } = e.target;
    // console.log("value",value)
    setLogin_value({ ...arr, [name]: value });
  };
  console.log("value_login", arr);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(arr.first_name, login_value[login_value.length - 1].first_name);
    console.log(arr.email, login_value[login_value.length - 1].email);
    if (
      login_value[login_value.length - 1].first_name === arr.first_name &&
      login_value[login_value.length - 1].email === arr.email
    ) {
      Navigate("/dashboard");
    } else {
      alert("check firstname and email");
    }
  };

  return (
    <div>
      <div className={styles.mainscreen}>
        <div className={styles.toppart}>
          <div className={styles.herotext}>
            <h1>
              <img
                className={styles.logo}
                src="https://user-images.githubusercontent.com/106021674/212925458-e9515ee6-5aaa-4c72-8145-545ca8912606.jpg"
                alt="Logo"
              />
              Login Page
            </h1>
            <p>
              Faboulous Find is a clone of IKEA which is Swedish multinational
              conglomerate based in the Netherlands that designs and sells
              ready-to-assemble furniture, kitchen appliances, decoration, home
              accessories, and various other goods and home services. Started in
              1943 by Ingvar Kamprad, IKEA has been the world's largest
              furniture retailer since 2008
            </p>
          </div>
        </div>

        <div className={styles.bottompart}>
          <div className={styles.imgpart}>
            <img
              src="https://user-images.githubusercontent.com/106021674/212918713-93369401-cf6f-4b17-8789-9ee966e2f2bd.jpg"
              alt="file_name"
              className="heroimg"
            />
          </div>

          <div className={styles.formpart}>
            <form>
              <h2>Login and Get Notes in Email</h2>

              <label for="name">First Name</label>
              <input
                className={styles.inputbox}
                onChange={handleChnage}
                name="first_name"
                type="text"
                autocomplete="off"
              />

              <label for="email">Email</label>
              <input
                onChange={handleChnage}
                className={styles.inputbox}
                type="email"
                name="email"
                autocomplete="off"
              />

              <label for="course">Select the course</label>
              <div className={styles.options}>
                <div className={styles.eachoption}>
                  <input type="checkbox" checked />
                  <span>Affordable living R</span>
                </div>
                <div className={styles.eachoption}>
                  <input type="checkbox" />
                  <span>Furniture</span>
                </div>
              </div>

              <input type="checkbox" className={styles.agree} checked />
              <label for="agree" className={styles.agree}></label>

              <label className={styles.privacy_policy}>
                By clicking the submit button , you agree to our{" "}
                <span>Terms & Conditions</span> and <span>Privacy Policy</span>.
              </label>

              {/* <button className={styles.submitbtn}>Submit</button> */}
              <button onClick={handleClick} className={styles.btn_12}>
                <span>Submit</span>
                <span>Login</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
// custom-btn btn-12
export default Login;
