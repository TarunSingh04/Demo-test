import React, { useState, ChangeEvent } from "react";
import { BsEnvelopeOpen } from "react-icons/bs";
import styles from "./styles.module.scss"; // Import SCSS module
import { useRouter } from "next/navigation";

interface TwoFactorAuthProps {
  email: string;
}

const TwoFactorAuth: React.FC<TwoFactorAuthProps> = ({ email }) => {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [loader, setloader] = useState(false);
  const router = useRouter();

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      const nextInput = document.getElementById(
        `code-${index + 1}`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const verifyOtp = () => {
    setloader(true);
    setTimeout(() => {
      router.push("/pages/onboarding");
    }, 2800);
    console.log(123);
  };

  return (
    <div className={styles.container}>
      {loader && <div className={styles.loader}></div>}
      {!loader && (
        <>
          <div className={styles.subBox}>
            <div className={styles.iconWrapper}>
              <BsEnvelopeOpen className={styles.mailIcon} />
            </div>
            <h2 className={styles.title}>Enter your code</h2>
            <p className={styles.description}>
              We sent a code to <span>{email}</span>
            </p>
          </div>

          <div className={styles.codeInputs}>
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength={1}
                className={styles.input}
                value={digit}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleCodeChange(index, e.target.value)
                }
              />
            ))}
          </div>

          <div className={styles.resend}>
            <p>Didn&apos;t receive the email? </p>
            <a href="#" className={styles.resendLink}>
              Click to resend
            </a>
          </div>

          <button
            className={styles.button}
            onClick={() => {
              verifyOtp();
            }}
          >
            Continue
          </button>
        </>
      )}
    </div>
  );
};

export default TwoFactorAuth;
