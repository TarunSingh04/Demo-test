"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dashboard from "../../../assets/dashboard.png";

const ForgotPassword = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/pages/login-user");
  };

  return (
    <div className={styles.LoginPage}>
      <div className={styles.LoginContainer}>
        <div className={styles.AuthHeader}>
          <p>
            Impakter <span>PRO</span>
          </p>
        </div>
        <div className={styles.LoginBox}>
          <h1 className={styles.loginHead}>Reset Password</h1>
          <div className={styles.wrapperInputBox}>
            <p>Email*</p>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className={styles.buttonBox}>
            <button className={styles.loginButton}>Reset Password</button>
            <button
              className={styles.loginButton}
              onClick={() => {
                navigateToLogin();
              }}
            >
              Back to Login
            </button>
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

export default ForgotPassword;
