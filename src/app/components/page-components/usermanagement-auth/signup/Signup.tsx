"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import googleLogo from "../../../assets/google.png";
import microsoftLogo from "../../../assets/microsoft.png";
import { useRouter } from "next/navigation";
import dashboard from "../../../assets/dashboard.png";

const Signup = () => {
  const router = useRouter();
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState<any>("");
  const [password, setpassword] = useState<any>("");
  const [confirmpassword, setconfirmpassword] = useState<any>("");
  const [userType, setuserType] = useState<any>("");
  const [message, setmessage] = useState<any>("All fields are mandatory*");
  const [errorCheck, seterrorCheck] = useState(false);
  const [termsAccept, settermsAccept] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordStrengthColor, setPasswordStrengthColor] = useState("");
  const [passwordStrengthText, setPasswordStrengthText] = useState("");

  const navigateToLogin = () => {
    router.push("/pages/login-user");
  };

  const validatePassword = (password: any) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) || /[A-Z]/.test(password)) strength++;
    if (/[^a-zA-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    return strength;
  };

  const changeEmail = (e: any) => {
    setemail(e.target.value);
  };
  const changePassword = (e: any) => {
    const password = e.target.value;
    const strength = validatePassword(password);
    setPasswordStrength(strength);
    if (strength === 1) {
      setPasswordStrengthColor("red");
      setPasswordStrengthText("Low");
    } else if (strength === 2 || strength === 3) {
      setPasswordStrengthColor("#ffdd00");
      setPasswordStrengthText("Medium");
    } else if (strength === 4) {
      setPasswordStrengthColor("#00d700");
      setPasswordStrengthText("Strong");
    }
    setpassword(password);
  };
  const changeconfirmPassword = (e: any) => {
    setconfirmpassword(e.target.value);
  };
  const changeUserType = (e: any) => {
    setuserType(e.target.value);
  };
  const changeuserName = (e: any) => {
    setuserName(e.target.value);
  };
  const changeAcceptTermsandCondition = (e: any) => {
    settermsAccept(!termsAccept);
  };

  const Signup = () => {
    if (!userName || !userType || !email || !password || !confirmpassword) {
      seterrorCheck(true);
      setmessage("All fields are mandatory*");
      return;
    }

    if (!termsAccept) {
      seterrorCheck(true);
      setmessage("Please accept terms and conditions*");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      seterrorCheck(true);
      setmessage("Invalid email format*");
      return;
    }

    if (passwordStrengthText !== "Strong") {
      seterrorCheck(true);
      setmessage("Please ensure to have strong password*");
      return;
    }

    if (password !== confirmpassword) {
      seterrorCheck(true);
      setmessage("Password fields do not match*");
      return;
    }

    console.log(userName);
    console.log(userType);
    console.log(email);
    console.log(password);
    console.log(confirmpassword);
  };

  return (
    <div className={styles.SignupPage}>
      <div className={styles.SignupContainer}>
        <div className={styles.AuthHeader}>
          {/* <p>Impakter <span>PRO</span></p> */}
        </div>
        <div className={styles.SignupBox}>
          <h1 className={styles.loginHead}>Sign Up</h1>
          <p className={errorCheck ? styles.message2 : styles.message1}>
            {message}
          </p>
          <div className={styles.wrapperInputBox}>
            <p>Name*</p>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={changeuserName}
            />
          </div>
          <div className={styles.wrapperInputBox}>
            <p>Select User*</p>
            <select onChange={changeUserType}>
              <option value="">Select user</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Super-Admin">Super-Admin</option>
            </select>
          </div>
          <div className={styles.wrapperInputBox}>
            <p>Email*</p>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={changeEmail}
            />
          </div>
          <div className={styles.wrapperInputBox}>
            <p>Password*</p>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={changePassword}
            />
            <div className={styles.passwordStrength}>
              {/* <p>{passwordStrengthText}</p> */}
              <div
                className={styles.passwordStrengthBar}
                style={{
                  width: `${passwordStrength * 25}%`,
                  backgroundColor: passwordStrengthColor,
                }}
              />
            </div>
          </div>

          <div className={styles.wrapperInputBox}>
            <p>Confirm Password*</p>
            <input
              type="password"
              placeholder="confirm your password"
              onChange={changeconfirmPassword}
            />
          </div>

          <div className={styles.rememberBox}>
            <input
              type="checkbox"
              name="remember"
              onChange={changeAcceptTermsandCondition}
            />
            <label htmlFor="remember">Accept terms and condition</label>
          </div>

          <div className={styles.buttonBox}>
            <button
              className={styles.loginButton}
              onClick={() => {
                Signup();
              }}
            >
              Sign Up
            </button>
            <p className={styles.buttonBoxLinks}>OR</p>
            <button className={styles.googleButton}>
              <Image src={googleLogo} height={22} width={22} alt="none" />
              <p>Signup with Google</p>
            </button>
            <button className={styles.googleButton}>
              <Image src={microsoftLogo} height={22} width={22} alt="none" />
              <p>Signup with Microsoft</p>
            </button>
            <div className={styles.buttonBoxLinks}>
              Already have an account?{" "}
              <p
                onClick={() => {
                  navigateToLogin();
                }}
              >
                Login
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.BackgroundImage}>
        <h1>Welcome!</h1>
        <p>Where innovation meets sustainability for a better future.</p>
        <Image
          src={dashboard}
          width={720}
          height={500}
          alt="none"
          className={styles.BoxLogo}
        />
      </div>
    </div>
  );
};

export default Signup;
