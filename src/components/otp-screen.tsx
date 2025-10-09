import { useState } from "react";


interface OtpScreenProps {
  onBack: () => void;
}

const OtpScreen = ({ onBack }: OtpScreenProps) => {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleDigitClick = (digit: string) => {
    const nextIndex = code.findIndex((c) => c === "");
    if (nextIndex !== -1) {
      const newCode = [...code];
      newCode[nextIndex] = digit;
      setCode(newCode);
    }
  };

  const handleBackspace = () => {
    const lastFilledIndex = code
      .map((c, i) => (c !== "" ? i : -1))
      .filter((i) => i !== -1)
      .pop();
    if (lastFilledIndex !== undefined) {
      const newCode = [...code];
      newCode[lastFilledIndex] = "";
      setCode(newCode);
    }
  };

  return (
    <div className="otp-container">
      <header className="otp-header">
        <div className="otp-back" onClick={onBack}>
          &larr; OTP
        </div>
        <div className="otp-subtitle">Change password</div>
      </header>

      <main className="otp-main">
        <div className="otp-title">Enter new validation code</div>

        <div className="otp-circles">
          {code.map((c, i) => (
            <div key={i} className="otp-circle">
              {c || ""}
            </div>
          ))}
        </div>

        <div className="otp-description">
          This code protects the generator from unauthorized access
        </div>

        <div className="otp-keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleDigitClick(num.toString())}
              className="otp-key"
            >
              {num}
            </button>
          ))}
          <div></div>
          <button
            onClick={() => handleDigitClick("0")}
            className="otp-key"
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            aria-label="Backspace"
            className="otp-key backspace"
          >
            &#x232B;
          </button>
        </div>
      </main>
    </div>
  );
};

export default OtpScreen;
