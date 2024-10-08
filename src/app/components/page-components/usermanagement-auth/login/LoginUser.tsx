"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import googleLogo from "../../../assets/google.png";
import microsoftLogo from "../../../assets/microsoft.png";
import dashboard from "../../../assets/dashboard.png";
import { useRouter } from "next/navigation";
import { AiFillCloseSquare } from "react-icons/ai";
import TwoFactorAuth from "./two-factor/TwoFactor";

const LoginUser = () => {
  const router = useRouter();
  const [email, setemail] = useState<any>("");
  const [password, setpassword] = useState<any>("");
  const [verificationCode, setverificationCode] = useState<any>("");
  const [popUp, setpopUp] = useState(false);
  const [loaderShow, setloaderShow] = useState("");
  const [errorCheck, seterrorCheck] = useState(false);
  const [message, setmessage] = useState("");

  const navigateToSignin = () => {
    router.push("/pages/register-user");
  };

  const navigateToForgotPassword = () => {
    router.push("/pages/forgot-password");
  };

  const changeEmail = (e: any) => {
    setemail(e.target.value);
  };
  const changePassword = (e: any) => {
    setpassword(e.target.value);
  };

  const Signin = () => {
    if (!email || !password) {
      seterrorCheck(true);
      setmessage("All fields are mandatory*");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      seterrorCheck(true);
      setmessage("Invalid email format*");
      return;
    }
    setpopUp(true);
  };

  const close2FA = () => {
    setpopUp(false);
  };

  const loaderOn = () => {};

  return (
    <div className={styles.LoginPage}>
      {popUp && <TwoFactorAuth email={email} />}
      {loaderShow && (
        <div className={styles.authpopup}>
          <div className={styles.authpopupcontainer}>
            <div className="loader"></div>
          </div>
        </div>
      )}
      <div className={styles.LoginContainer}>
        <div className={styles.AuthHeader}>
          <p>
            Impakter <span>PRO</span>
          </p>
        </div>
        <div className={styles.LoginBox}>
          <h1 className={styles.loginHead}>Login</h1>
          <p className={errorCheck ? styles.message2 : styles.message1}>
            {message}
          </p>
          <div className={styles.wrapperInputBox}>
            <p>Email*</p>
            <input
              type="text"
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
          </div>
          <div className={styles.rememberBox}>
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className={styles.buttonBox}>
            <button
              className={styles.loginButton}
              onClick={() => {
                Signin();
              }}
            >
              Sign In
            </button>
            <div className={styles.buttonBoxLinks1}>
              Don&apos;t remember you password?{" "}
              <p
                onClick={() => {
                  navigateToForgotPassword();
                }}
              >
                Forgot password
              </p>
            </div>
            <p className={styles.buttonBoxLinks}>OR</p>
            <button className={styles.googleButton}>
              <Image src={googleLogo} height={22} width={22} alt="none" />
              <p>Signin with Google</p>
            </button>
            <button className={styles.googleButton}>
              <Image src={microsoftLogo} height={22} width={22} alt="none" />
              <p>Signin with Microsoft</p>
            </button>
            <div className={styles.buttonBoxLinks}>
              Don&apos;t have an account?{" "}
              <p
                onClick={() => {
                  navigateToSignin();
                }}
              >
                Signup
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

export default LoginUser;
